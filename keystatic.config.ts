import { collection, config, fields } from "@keystatic/core";

// GitHub storage for production
const storage = import.meta.env.DEV
	? { kind: "local" as const }
	: {
			kind: "github" as const,
			repo: {
				owner: "Aishwarya-ce12b008",
				name: "personal-website",
			},
			branchPrefix: "keystatic/",
		};

export default config({
	storage,
	ui: {
		brand: {
			name: "Ideas to Interface",
		},
	},
	collections: {
		post: collection({
			label: "Posts",
			path: "src/content/post/*",
			format: { contentField: "content", data: "yaml" },
			entryLayout: "content",
			slugField: "title",
			schema: {
				title: fields.slug({
					name: { label: "Title" },
				}),
				description: fields.text({
					label: "Description",
					validation: { isRequired: true },
				}),
				publishDate: fields.date({
					label: "Publish Date",
					validation: { isRequired: true },
				}),
				draft: fields.checkbox({
					label: "Draft",
					defaultValue: false,
				}),
				ogImage: fields.text({
					label: "OG Image URL",
				}),
				tags: fields.array(fields.text({ label: "Tag" }), {
					label: "Tags",
					itemLabel: (props) => props.value,
				}),
				content: fields.mdx({
					label: "Content",
					extension: "md",
				}),
			},
		}),

		note: collection({
			label: "Notes",
			path: "src/content/note/*",
			format: { contentField: "content", data: "yaml" },
			entryLayout: "content",
			slugField: "title",
			schema: {
				title: fields.slug({
					name: { label: "Title" },
				}),
				description: fields.text({
					label: "Description",
				}),
				publishDate: fields.datetime({
					label: "Publish Date",
					validation: { isRequired: true },
				}),
				content: fields.mdx({
					label: "Content",
					extension: "md",
				}),
			},
		}),

		review: collection({
			label: "Reviews",
			path: "src/content/review/*",
			format: { contentField: "content", data: "yaml" },
			entryLayout: "content",
			slugField: "title",
			schema: {
				title: fields.slug({
					name: { label: "Title" },
				}),
				bookTitle: fields.text({
					label: "Book Title",
					validation: { isRequired: true },
				}),
				description: fields.text({
					label: "Description",
				}),
				publishDate: fields.date({
					label: "Publish Date",
					validation: { isRequired: true },
				}),
				content: fields.mdx({
					label: "Content",
					extension: "md",
				}),
			},
		}),

		video: collection({
			label: "Videos",
			path: "src/content/video/*",
			format: { contentField: "content", data: "yaml" },
			slugField: "title",
			schema: {
				title: fields.slug({
					name: { label: "Title" },
				}),
				youtubeUrl: fields.text({
					label: "YouTube URL",
					validation: { isRequired: true },
				}),
				channel: fields.text({
					label: "Channel",
				}),
				duration: fields.text({
					label: "Duration",
				}),
				tags: fields.array(fields.text({ label: "Tag" }), {
					label: "Tags",
					itemLabel: (props) => props.value,
				}),
				publishDate: fields.date({
					label: "Date Added",
					validation: { isRequired: true },
				}),
				content: fields.mdx({
					label: "My Takeaways",
					extension: "md",
				}),
			},
		}),

		book: collection({
			label: "Books",
			path: "src/content/book/*",
			format: { contentField: "content", data: "yaml" },
			slugField: "title",
			schema: {
				title: fields.slug({
					name: { label: "Title" },
				}),
				author: fields.text({
					label: "Author",
					validation: { isRequired: true },
				}),
				isbn: fields.text({
					label: "ISBN",
				}),
				cover: fields.text({
					label: "Cover URL",
				}),
				status: fields.select({
					label: "Status",
					options: [
						{ label: "Read", value: "read" },
						{ label: "Currently Reading", value: "reading" },
						{ label: "Want to Read", value: "want-to-read" },
						{ label: "Wishlist", value: "wishlist" },
					],
					defaultValue: "want-to-read",
				}),
				rating: fields.number({
					label: "Rating (1-5)",
				}),
				tags: fields.array(fields.text({ label: "Tag" }), {
					label: "Tags",
					itemLabel: (props) => props.value,
				}),
				yearRead: fields.number({
					label: "Year Read",
				}),
				reviewSlug: fields.text({
					label: "Review Slug",
				}),
				content: fields.mdx({
					label: "My Thoughts / Description",
					extension: "md",
				}),
			},
		}),
	},
});
