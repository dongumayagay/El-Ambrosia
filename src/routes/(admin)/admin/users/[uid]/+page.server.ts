import type { PageServerLoad, Actions } from './$types';
import { admin, adminAuth } from '$lib/firebase/admin.server';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const { uid } = params
    return { uid };
};




export const actions: Actions = {
    delete: async ({ request }) => {
        try {
            const data = await request.formData()
            const uid = data.get('uid')?.toString()
            if (!uid) throw `no uid`
            await adminAuth.deleteUser(uid)
        } catch (err) {
            throw error(404, err as string)
        }
        throw redirect(303, `/admin/users`)
    },
    makeAnAdmin: async ({ request }) => {
        console.log('making an admin')
        try {
            const data = await request.formData()
            const uid = data.get('uid')?.toString()
            if (!uid) throw `no uid`
            await adminAuth.setCustomUserClaims(uid, { admin: true })
            return { success: true }
        } catch (err) {
            throw error(404, err as string)
        }
    }

};