import { adminDB } from '$lib/firebase/admin.server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    const { uid } = params
    const querySnapshot = await adminDB.collection('orders').where('owner', '==', uid).get()
    const docData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    return json(docData);
};