import type { RequestHandler } from './$types';
import { adminAuth } from "$lib/firebase/admin.server"
import { error, json } from '@sveltejs/kit';
import type { CreateRequest } from 'firebase-admin/auth';

export const GET: RequestHandler = async ({ }) => {
    const result = await adminAuth.listUsers()

    if (result) {
        const users = result.users.map(user => user.toJSON())
        return json(users)
    }
    throw error(500, 'Loading users failed');
};

export const POST: RequestHandler = async ({ request }) => {
    try {
        const userToCreate: CreateRequest = await request.json()
        const userRecord = await adminAuth.createUser(userToCreate)
        return json(userRecord)
    } catch (err) {
        throw error(404, err as string)
    }
}