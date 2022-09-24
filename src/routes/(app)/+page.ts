import type { PageLoad } from '../../../.svelte-kit/types/src/routes/(app)/$types';
import { error } from '@sveltejs/kit';
import type { CarouselItemInterface } from '$lib/types';
export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {

    try {
        const response = await fetch("/api/products")
        const products: CarouselItemInterface[] = await response.json()
        return { products };
    } catch (err) {
        throw error(404)
    }
};