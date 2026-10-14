import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, message } = (await request.json()) as {
			name?: string;
			email?: string;
			message?: string;
		};

		if (!name || !email) {
			return new Response('Name and email are required.', { status: 400 });
		}

		console.log(`[DevClub Inquiry Received] From: ${name} <${email}> — Message: ${message ?? 'N/A'}`);

		return new Response('Message received successfully.', { status: 200 });
	} catch (error) {
		return new Response('Invalid request payload.', { status: 400 });
	}
};
