// import { admin } from "$lib/firebase/admin.server"
import { getAuth } from "firebase-admin/auth"
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ depends }) => {

    // const result = await adminAuth.listUsers()

    console.log('admin users load function run')
    const dependency = 'admin:users'
    depends(dependency)
    const result = true
    if (result) {
        // const users = result.users.map(user => user.toJSON())
        const users: any = []
        return { users, dependency };
    }

    throw error(500, 'Loading users failed');
}   