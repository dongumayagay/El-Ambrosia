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

    const owner = invoice_request.external_id.split('@')[0]
    const contactInfo = await (await adminDB.collection('userContactInfo').doc(owner).get()).data()
    const delivery_address = await (await adminDB.collection('userConfig').doc(owner).get()).get('selected_address')

    await adminDB.collection('orders').add({
        owner,
        order_status: 'ORDER RECEIVED',
        contactInfo,
        delivery_address,
        ...invoice_request
    })
    // await adminDB.collection('orders').doc(invoice_request.id).set({
    //     owner: invoice_request.external_id.split('@')[0],
    //     order_status: 'ORDER RECEIVED',
    //     ...invoice_request
    // })

    return new Response();
};