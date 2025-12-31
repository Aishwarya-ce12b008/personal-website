// Book type definition - used by components and content collection
export interface Book {
	title: string;
	author: string;
	description?: string;
	isbn?: string;
	cover?: string;
	status: "read" | "reading" | "want-to-read" | "wishlist";
	tags?: string[];
	rating?: number;
	recommendation?: string;
	yearRead?: number;
	reviewSlug?: string;
}

// Helper to get book cover URL
export function getBookCover(book: Pick<Book, "cover" | "isbn">): string {
	if (book.cover) return book.cover;
	if (book.isbn) return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
	return "https://placehold.co/400x600?text=No+Cover";
}

// Helper to generate slug from title
export function getBookSlug(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
}
