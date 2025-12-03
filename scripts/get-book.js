const https = require('https');

const isbn = process.argv[2];

if (!isbn) {
  console.log('Please provide an ISBN.');
  console.log('Usage: node scripts/get-book.js <isbn>');
  process.exit(1);
}

const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      const bookKey = `ISBN:${isbn}`;
      const bookData = response[bookKey];

      if (!bookData) {
        console.log('Book not found.');
        return;
      }

      const output = {
        title: bookData.title,
        author: bookData.authors ? bookData.authors.map(a => a.name).join(', ') : 'Unknown',
        isbn: isbn,
        status: "read", // Default
        tags: [],
        rating: 5,
        recommendation: "",
        cover: bookData.cover ? bookData.cover.large : undefined
      };

      console.log('\nCopy this object into src/data/books.ts:\n');
      console.log(JSON.stringify(output, null, 2) + ',');
      
    } catch (e) {
      console.error('Error parsing response:', e);
    }
  });

}).on('error', (err) => {
  console.error('Error fetching data:', err.message);
});




