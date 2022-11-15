import type { PageLoad } from '../../../.svelte-kit/types/src/routes/(app)/$types';
import { error } from '@sveltejs/kit';
import type { CarouselItemInterface } from '$lib/types';
export const prerender = true;

export const load: PageLoad = async () => {

    try {
        const products: CarouselItemInterface[] = [
            {
                name: '0',
                image: '/images/1.jpg',
                link: '/'
            },
            {
                name: '1',
                image: '/images/2.jpg',
                link: '/'
            },
            {
                name: '2',
                image: '/images/3.jpg',
                link: '/'
            }
        ];
        return { products };
    } catch (err) {
        throw error(404)
    }
};