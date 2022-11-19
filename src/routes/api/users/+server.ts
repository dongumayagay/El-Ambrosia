import type { RequestHandler } from './$types';
import { adminAuth } from "$lib/firebase/admin.server"
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ }) => {
    const result = await adminAuth.listUsers()

    if (result) {
        const users = result.users.map(user => user.toJSON())
        return json(users)
    }
    throw error(500, 'Loading users failed');
};