import type { PageServerLoad, Actions } from './$types';
import { adminAuth } from '$lib/firebase/admin.server';
import { error, redirect } from '@sveltejs/kit';
import type { CreateRequest } from 'firebase-admin/auth';

export const load: PageServerLoad = async ({ params }) => {
    const { uid } = params
    return { uid };
};




export const actions: Actions = {
    delete: async ({ request }) => {
        console.log('deleting')
        try {
            const data = await request.formData()
            const uid = data.get('uid')?.toString()
            if (!uid) throw `no uid`
            await adminAuth.deleteUser(uid)
        } catch (err) {
            throw error(404, err as string)
        }
        throw redirect(303, `/admin/users`)

        // let uid = ''
        // try {
        //     const data = await request.formData()
        //     const user: CreateRequest = {
        //         displayName: data.get('displayName')?.toString() ?? '',
        //         email: data.get('email')?.toString() ?? '',
        //         password: data.get('password')?.toString() ?? '',
        //     };
        //     console.log(user)
        //     const userRecord = await adminAuth.createUser(user)
        //     uid = userRecord.uid
        //     console.log(userRecord)
        // } catch (err) {
        //     console.log(err)
        //     throw error(404, err as string)
        // }
        // throw redirect(303, `/admin/users/${uid}`)
    }
};