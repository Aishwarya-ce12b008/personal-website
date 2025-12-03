import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft posts based on the environment */
export async function getAllReviews(): Promise<CollectionEntry<"review">[]> {
	return await getCollection("review", ({ data }) => {
		// Assuming reviews don't have a draft field in schema for now, but if they did:
		// return import.meta.env.PROD ? !data.draft : true;
		return true;
	});
}

/** groups reviews by year */
export function groupReviewsByYear(reviews: CollectionEntry<"review">[]) {
	return reviews.reduce<Record<string, CollectionEntry<"review">[]>>((acc, review) => {
		const year = review.data.publishDate.getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year]?.push(review);
		return acc;
	}, {});
}


