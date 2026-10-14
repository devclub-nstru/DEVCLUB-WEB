import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return json({ Items: [], Next: null });
};

export const POST: RequestHandler = () => {
	return json({ success: true });
};

export const OPTIONS: RequestHandler = () => {
	return new Response(null, { status: 204 });
};
