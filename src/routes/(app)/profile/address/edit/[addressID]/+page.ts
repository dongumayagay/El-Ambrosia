import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const { addressID } = params
    return { addressID };
};