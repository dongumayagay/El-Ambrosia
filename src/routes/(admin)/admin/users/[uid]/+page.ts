import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const { uid } = params
    return { uid };
};