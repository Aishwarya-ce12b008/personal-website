import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
	const url = new URL(request.url);

	// Never return secret values; only whether they exist at runtime.
	const envPresence = {
		KEYSTATIC_SECRET: Boolean(import.meta.env.KEYSTATIC_SECRET),
		KEYSTATIC_GITHUB_CLIENT_ID: Boolean(import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID),
		KEYSTATIC_GITHUB_CLIENT_SECRET: Boolean(import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET),
	};

	return new Response(
		JSON.stringify(
			{
				ok: true,
				host: url.host,
				protocol: url.protocol,
				pathname: url.pathname,
				vercelEnv: process.env.VERCEL_ENV ?? null,
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