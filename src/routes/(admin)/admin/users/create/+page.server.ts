
import { adminAuth } from '$lib/firebase/admin.server';
import { error, redirect } from '@sveltejs/kit';
import type { CreateRequest } from 'firebase-admin/auth';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        let uid = ''
        try {
            const data = await request.formData()
            const user: CreateRequest = {
                displayName: data.get('displayName')?.toString() ?? '',
                email: data.get('email')?.toString() ?? '',
                password: data.get('password')?.toString() ?? '',
            };
            const userRecord = await adminAuth.createUser(user)
            uid = userRecord.uid
        } catch (err) {
            throw error(404, err as string)
        }
        throw redirect(303, `/admin/users/${uid}`)
    }
};