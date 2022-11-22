import { SHAWARMAS } from '$lib/constants';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const { product_name } = params
    const product = SHAWARMAS.find((value) => (value.name == product_name))
    return {
        product
    };
};