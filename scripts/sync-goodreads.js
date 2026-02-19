/**
 * Goodreads RSS Sync Script
 * Fetches books from Goodreads RSS feed and generates markdown files
 * 
 * Usage: node scripts/sync-goodreads.js
 */

const fs = require('fs');
const path = require('path');

const GOODREADS_USER_ID = '69517240';
const SHELVES = ['read']; // Add 'currently-reading', 'to-read' if needed
const BOOKS_DIR = path.join(__dirname, '..', 'src', 'content', 'book');

// Status mapping from Goodreads shelf to our schema
const STATUS_MAP = {
  'read': 'read',
  'currently-reading': 'reading',
  'to-read': 'want-to-read',
};

async function fetchRSS(url) {
  const response = await fetch(url);
  const text = await response.text();
  return text;
}

function parseRSSItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    
    const getTag = (tag) => {
      const regex = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}>([\\s\\S]*?)<\\/${tag}>`);
      const m = itemXml.match(regex);
      return m ? (m[1] || m[2] || '').trim() : '';
    };
    
    const title = getTag('title');
    const author = getTag('author_name');
    const isbn = getTag('isbn') || '';
    const rating = getTag('user_rating');
    const dateRead = getTag('user_read_at');
    const bookImage = getTag('book_large_image_url') || getTag('book_image_url');
    const bookId = getTag('book_id');
    
    if (title && author) {
      items.push({
        title: title.replace(/"/g, '\\"'),
        author: author.replace(/"/g, '\\"'),
        isbn: isbn.replace(/-/g, ''),
        rating: parseInt(rating) || null,
        dateRead,
        cover: bookImage || null,
        bookId,
      });
    }
  }
  
  return items;
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Normalize title for comparison (removes series info, punctuation, etc.)
function normalizeTitle(title) {
  return title
    .toLowerCase()
    .replace(/\s*\([^)]*\)\s*/g, '') // Remove parenthetical content like "(Series, #1)"
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Get all existing book titles from the content folder
function getExistingBookTitles() {
  const existingTitles = new Map();
  
  if (!fs.existsSync(BOOKS_DIR)) return existingTitles;
  
  const files = fs.readdirSync(BOOKS_DIR).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    const content = fs.readFileSync(path.join(BOOKS_DIR, file), 'utf-8');
    const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    if (titleMatch) {
      const title = titleMatch[1].replace(/^["']|["']$/g, '');
      existingTitles.set(normalizeTitle(title), file);
    }
  }
  
  return existingTitles;
}

function generateMarkdown(book, status) {
  const slug = generateSlug(book.title);
  const yearRead = book.dateRead ? new Date(book.dateRead).getFullYear() : null;
  
  let frontmatter = `---
title: "${book.title}"
author: "${book.author}"`;

  if (book.isbn) {
    frontmatter += `\nisbn: "${book.isbn}"`;
  }
  
  if (book.cover) {
    frontmatter += `\ncover: ${book.cover}`;
  }
  
  frontmatter += `\nstatus: ${status}`;
  
  if (book.rating && book.rating > 0) {
    frontmatter += `\nrating: ${book.rating}`;
  }
  
  frontmatter += `\ntags: []`;
  
  if (yearRead) {
    frontmatter += `\nyearRead: ${yearRead}`;
  }
  
  frontmatter += `\n---\n\n`;
  
  return { slug, content: frontmatter };
}

async function syncShelf(shelf) {
  const url = `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=${shelf}`;
  console.log(`Fetching ${shelf} shelf from Goodreads...`);
  
  const xml = await fetchRSS(url);
  const books = parseRSSItems(xml);
  
  console.log(`Found ${books.length} books in ${shelf} shelf`);
  
  // Get existing books by normalized title to prevent duplicates
  const existingTitles = getExistingBookTitles();
  
  const status = STATUS_MAP[shelf] || 'read';
  let created = 0;
  let skipped = 0;
  
  for (const book of books) {
    const normalizedTitle = normalizeTitle(book.title);
    
    // Skip if a book with similar title already exists (prevents duplicates with different slugs)
    if (existingTitles.has(normalizedTitle)) {
      skipped++;
      continue;
    }
    
    const { slug, content } = generateMarkdown(book, status);
    const filePath = path.join(BOOKS_DIR, `${slug}.md`);
    
    // Double-check: also skip if exact file exists
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content);
      console.log(`  Created: ${slug}.md`);
      created++;
      // Add to existing titles to prevent duplicates within same sync
      existingTitles.set(normalizedTitle, `${slug}.md`);
    } else {
      skipped++;
    }
  }
  
  console.log(`  Created: ${created}, Skipped (already exists): ${skipped}`);
  return books.length;
}

async function main() {
  console.log('🔄 Starting Goodreads sync...\n');
  
  // Ensure books directory exists
  if (!fs.existsSync(BOOKS_DIR)) {
    fs.mkdirSync(BOOKS_DIR, { recursive: true });
  }
  
  let totalBooks = 0;
  
  for (const shelf of SHELVES) {
    totalBooks += await syncShelf(shelf);
  }
  
  console.log(`\n✅ Sync complete! Processed ${totalBooks} books total.`);
}

main().catch(console.error);

