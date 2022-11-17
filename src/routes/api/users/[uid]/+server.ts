import type { RequestHandler } from './$types';
import { adminAuth } from "$lib/firebase/admin.server"
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
    const { uid } = params

    try {
        const result = await adminAuth.getUser(uid)
        if (!result) throw error(404, 'No user found')
        console.log(result)
        return json(result)
    } catch (errorMessage) {
        throw error(500, errorMessage as string)
    }

};