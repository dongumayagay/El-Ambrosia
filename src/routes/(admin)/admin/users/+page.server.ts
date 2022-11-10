import { adminAuth } from "$lib/firebase/admin.server"
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ depends }) => {
    const result = await adminAuth.listUsers()
    // console.log('admin users load function run')
    const dependency = 'admin:users'
    depends(dependency)
    if (result) {
        const users = result.users.map(user => user.toJSON())
        return { users, dependency };
    }

    throw error(500, 'Loading users failed');
}   