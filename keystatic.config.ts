import { collection, config, fields } from "@keystatic/core";

// Always use GitHub storage - Keystatic handles local vs production automatically
const storage = {
	kind: "github" as const,
	repo: {
		owner: "Mani19",
		name: "personal-blog",
	},
};

export default config({
	storage,
	ui: {
		brand: {
			name: "Machines of Loving Grace",
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
				youtubeUrl: fields.url({
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
	},
});
