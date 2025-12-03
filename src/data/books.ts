export interface Book {
	title: string;
	author: string;
	description?: string;
	// ISBN is useful for fetching covers automatically (e.g. from Open Library)
	isbn?: string;
	// Optional custom cover URL if not using ISBN or want to override
	cover?: string;
	status: "read" | "reading" | "want-to-read" | "wishlist";
	tags?: string[];
	rating?: number; // 1-5
	recommendation?: string; // Why you recommend it
	yearRead?: number;
	reviewSlug?: string;
}

export const books: Book[] = [
	{
		title: "Refactoring UI",
		author: "Adam Wathan & Steve Schoger",
		cover: "https://www.refactoringui.com/_next/static/media/book.43eb3b9aec83fb89.png",
		status: "read",
		tags: ["Building Products"],
		rating: 3.5,
		description:
			"A design handbook for developers. No fluff, just practical tactics for making your UI look good.",
		recommendation:
			"Really liked that the book was concise & had practical tips. Wish it elaborated a bit more on some topics, but it's great for quick wins.",
		yearRead: 2024,
	},
	{
		title: "Sapiens: A Brief History of Humankind",
		author: "Yuval Noah Harari",
		isbn: "9780062316097",
		cover: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Sapiens-_A_Brief_History_of_Humankind.png",
		status: "read",
		tags: ["Source Code"],
		rating: 5,
		description:
			"Explores how Homo sapiens came to dominate the world, covering the cognitive, agricultural, and scientific revolutions.",
		recommendation:
			"This book completely reframed how I view human society. The concept of 'imagined realities'—that money, nations, and laws only exist because we collectively believe in them—is a powerful lens for understanding the world. It makes you question which of your own deeply held beliefs are just stories we've agreed to tell.",
		yearRead: 2020,
		reviewSlug: "sapiens-review",
	},
	{
		title: "Seven Brief Lessons on Physics",
		author: "Carlo Rovelli",
		isbn: "9780399184413",
		cover: "https://m.media-amazon.com/images/I/81Iz11keeTL.jpg",
		status: "read",
		tags: ["Source Code"],
		rating: 4,
		description:
			"A playful introduction to modern physics, explaining general relativity, quantum mechanics, and more.",
		recommendation:
			"What I love about this is how poetic it is. Rovelli doesn't just explain the math; he captures the beauty and mystery of the universe. It's a reminder that science isn't just about cold hard facts, but about our human struggle to understand our place in the vastness of existence. A quick read that leaves you staring at the stars.",
		yearRead: 2021,
	},
	{
		title: "Shoe Dog",
		author: "Phil Knight",
		isbn: "9781501135910",
		cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471146725/shoe-dog-9781471146725_hr.jpg",
		status: "read",
		tags: ["Lives well lived"],
		rating: 5,
		description:
			"The memoir of Nike co-founder Phil Knight, detailing the messy, precarious journey of building Nike.",
		recommendation:
			"Most business biographies are sanitized victory laps. This is the opposite. Knight is honest about his doubts, his mistakes, and the sheer chaos of building Nike. It's a raw look at the grit required to build something enduring. The ending, where he reflects on what it was all for, is genuinely moving.",
		yearRead: 2019,
	},
	{
		title: "Atomic Habits",
		author: "James Clear",
		isbn: "9780735211292",
		cover: "https://m.media-amazon.com/images/I/817HaeblezL._AC_UF1000,1000_QL80_.jpg",
		status: "want-to-read",
		tags: ["Mind & Machine"],
		rating: 5,
		description:
			"A guide to breaking bad habits and building good ones through small changes that compound over time.",
	},
	{
		title: "Principles: Life and Work",
		author: "Ray Dalio",
		isbn: "9781501124020",
		cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501124020/principles-9781501124020_hr.jpg",
		status: "wishlist",
		tags: ["Lives well lived"],
		rating: 5,
		description:
			"Ray Dalio shares the unconventional principles he used to create unique results in life and business.",
		recommendation:
			"Dalio's approach to radical transparency and systematic decision-making is extreme, but there's so much to learn from his rigor. The idea of treating your life and work as a machine that you can tune and improve is powerful. Even if you don't adopt all his methods, the framework for thinking about problems is invaluable.",
	},
	{
		title: "Benjamin Franklin: An American Life",
		author: "Walter Isaacson",
		isbn: "9780743258074",
		cover: "https://m.media-amazon.com/images/I/71AGiGY+DsL._AC_UF1000,1000_QL80_.jpg",
		status: "read",
		tags: ["Lives well lived"],
		rating: 5,
		description:
			"A biography of the Founding Father, detailing his life as a scientist, inventor, diplomat, and writer.",
		recommendation:
			"Franklin was the original prototype for the modern American entrepreneur. His life is a masterclass in curiosity and practicality. What strikes me most is his constant drive for self-improvement and his ability to be serious about his work without taking himself too seriously. A true polymath whose life offers lessons on being a better citizen and human.",
		yearRead: 2022,
	},
	{
		title: "Leonardo da Vinci",
		author: "Walter Isaacson",
		isbn: "9781501139154",
		cover: "https://m.media-amazon.com/images/I/91Ey0+6N-LL.jpg",
		status: "read",
		tags: ["Lives well lived"],
		rating: 5,
		description:
			"A biography connecting Leonardo's art to his science, based on his notebooks and life.",
		recommendation:
			"This book dispels the myth of the divine genius and shows Leonardo as he really was: relentlessly curious, observant, and often distracted. His greatness came from his refusal to separate art from science. It's inspiring because it suggests that his 'genius' was actually a set of habits—observation and curiosity—that we can all cultivate.",
		yearRead: 2023,
	},
	{
		title: "The Design of Everyday Things",
		author: "Don Norman",
		isbn: "9780465050659",
		cover: "https://m.media-amazon.com/images/I/71sF8kuMW3L.jpg",
		status: "read",
		tags: ["Building Products"],
		rating: 5,
		description:
			"A look at how design serves as the communication between object and user, and how to optimize it.",
		recommendation:
			"You'll never look at a door handle the same way again. This is the bible of usability. Norman articulates why we get frustrated with technology and objects, shifting the blame from 'stupid users' to 'bad design.' It's foundational reading for anyone who builds things for people.",
		yearRead: 2021,
	},
	{
		title: "The Making of a Manager",
		author: "Julie Zhuo",
		isbn: "9780735219564",
		cover: "https://m.media-amazon.com/images/I/71qwuYqlexL.jpg",
		status: "read",
		tags: ["Building Teams"],
		rating: 5,
		description:
			"A guide to building a team and giving feedback, based on Zhuo's experience at Facebook.",
		recommendation:
			"Most management books are written by consultants or CEOs at the end of their careers. This feels like advice from a smart friend who is just a few steps ahead of you. It's incredibly tactical and empathetic, dealing with the real, messy day-to-day of leading people. Essential for first-time managers.",
		yearRead: 2023,
	},
	{
		title: "Why We Sleep",
		author: "Matthew Walker",
		isbn: "9781501144318",
		cover: "https://m.media-amazon.com/images/I/61hxw0zJAiL._UF1000,1000_QL80_.jpg",
		status: "read",
		tags: ["Mind & Machine"],
		rating: 5,
		description:
			"A neuroscientist shows how sleep is the foundation of our health, brain power, and emotional balance.",
		recommendation:
			"This is one of those rare books that actually changed my behavior. Walker makes a terrifyingly compelling case for why sleep is the single most effective performance enhancer we have. It's not just about rest; it's about emotional regulation, memory, and long-term health. I prioritize 8 hours now, non-negotiable.",
		yearRead: 2022,
	},
	{
		title: "Influence: The Psychology of Persuasion",
		author: "Robert B. Cialdini",
		isbn: "9780061241895",
		cover: "https://m.media-amazon.com/images/I/71SPjJ+UnLL.jpg",
		status: "read",
		tags: ["Mind & Machine", "Building Teams"],
		rating: 5,
		description:
			"Explains the psychology of why people say 'yes'—and how to apply these understandings.",
		recommendation:
			"It's scary how easily our brains can be hacked. Cialdini breaks down the six principles of persuasion that drive our decisions. As a product person, it's a manual for ethical influence; as a consumer, it's a defense shield against manipulation. A classic for a reason.",
		yearRead: 2020,
	},
	{
		title: "High Output Management",
		author: "Andrew S. Grove",
		isbn: "9780679762881",
		cover: "https://m.media-amazon.com/images/I/9160TSMK0yL.jpg",
		status: "read",
		tags: ["Building Teams"],
		rating: 5,
		description:
			"A guide to the art of the entrepreneur and the skill of creating and maintaining new businesses.",
		recommendation:
			"The definitive text on how to run a company. Grove approaches management with an engineer's mindset: looking at leverage, output, and process. The concepts of 'task relevant maturity' and the purpose of meetings are things I use every week. Dense, but incredibly high ROI per page.",
		yearRead: 2023,
	},
	{
		title: "Hooked: How to Build Habit-Forming Products",
		author: "Nir Eyal",
		isbn: "9781591847786",
		cover: "https://m.media-amazon.com/images/I/81CqmsyyVDL._UF1000,1000_QL80_.jpg",
		status: "read",
		tags: ["Building Products"],
		rating: 5,
		description:
			"Explains the 'Hook Model'—a four-step process embedded into products to encourage customer behavior.",
		recommendation:
			"This is the playbook that Silicon Valley used to capture our attention. Eyal breaks down the loop of Trigger, Action, Reward, and Investment. Understanding this loop is critical for building sticky products, but also for understanding your own digital addictions. Powerful stuff.",
		yearRead: 2021,
	},
	{
		title: "The Laws of Human Nature",
		author: "Robert Greene",
		isbn: "9780525428145",
		cover: "https://m.media-amazon.com/images/I/71yhJgxfNBL._UF1000,1000_QL80_.jpg",
		status: "read",
		tags: ["Mind & Machine"],
		rating: 5,
		description:
			"Draws from history and philosophy to help readers understand the motivations of themselves and others.",
		recommendation:
			"Greene is unparalleled at dissecting the darker, often unacknowledged parts of human psychology. This book is a mirror. It forces you to confront your own envy, narcissism, and shortsightedness. It's a long read, but it gives you X-ray vision into social dynamics and your own behavior.",
		yearRead: 2024,
	},
	{
		title: "The Little Prince",
		author: "Antoine de Saint-Exupéry",
		cover: "https://m.media-amazon.com/images/I/81yLt8OG7zL.jpg",
		status: "want-to-read",
		tags: ["Fiction"],
		rating: 5,
		description:
			"A novella about a young prince who visits various planets, addressing themes of loneliness, friendship, love, and loss.",
	},
];
