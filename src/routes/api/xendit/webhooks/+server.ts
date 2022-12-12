import { env } from '$env/dynamic/private';
import { adminDB } from '$lib/firebase/admin.server';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    const callback_token = request.headers.get('x-callback-token')
    if (!callback_token) throw error(401)
    if (callback_token !== env.XENDIT_CALLBACK_VERIFICATION_TOKEN) throw error(403)

    const invoice_request = await request.json()
    if (!invoice_request.status) return new Response()

    await adminDB.collection('invoices').add({
        owner: invoice_request.external_id.split('@')[0],
        order_status: 'ORDER RECEIVED',
        ...invoice_request
    })
    return new Response();
};