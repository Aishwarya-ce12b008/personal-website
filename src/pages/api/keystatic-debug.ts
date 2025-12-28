import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
	const url = new URL(request.url);

	// Never return secret values; only whether they exist at runtime.
	const envPresence = {
		// `import.meta.env.*` can be build-time substituted depending on how the bundle is produced.
		importMeta: {
			KEYSTATIC_SECRET: Boolean(import.meta.env.KEYSTATIC_SECRET),
			KEYSTATIC_GITHUB_CLIENT_ID: Boolean(import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID),
			KEYSTATIC_GITHUB_CLIENT_SECRET: Boolean(import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET),
		},
		// `process.env.*` reflects what the runtime (Vercel Function) actually received.
		process: {
			KEYSTATIC_SECRET: Boolean(process.env.KEYSTATIC_SECRET),
			KEYSTATIC_GITHUB_CLIENT_ID: Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
			KEYSTATIC_GITHUB_CLIENT_SECRET: Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET),
		},
		// Helpful for confirming which KEYSTATIC vars exist (names only).
		keys: Object.keys(process.env)
			.filter((k) => k.startsWith("KEYSTATIC_"))
			.sort(),
	};

	return new Response(
		JSON.stringify(
			{
				ok: true,
				host: url.host,
				protocol: url.protocol,
				pathname: url.pathname,
				vercelEnv: process.env.VERCEL_ENV ?? null,
				vercelUrl: process.env.VERCEL_URL ?? null,
				vercelProjectId: process.env.VERCEL_PROJECT_ID ?? null,
				vercelRegion: process.env.VERCEL_REGION ?? null,
				envPresence,
			},
			null,
			2,
		),
		{
			status: 200,
			headers: {
				"content-type": "application/json; charset=utf-8",
				"cache-control": "no-store",
			},
		},
	);
};