import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }) => {
	// If the path looks like a list/collection (e.g. courses, cards, colors), return empty list or empty object
	if (
		url.pathname.includes('/colors') ||
		url.pathname.includes('/custom_colors')
	) {
		return json({ custom_colors: {} });
	}

	return json([]);
};

export const POST: RequestHandler = () => {
	return json({ success: true });
};

export const OPTIONS: RequestHandler = () => {
	return new Response(null, { status: 204 });
};
