import type { PageLoad } from '../../../.svelte-kit/types/src/routes/(app)/$types';
import { error } from '@sveltejs/kit';
import type { CarouselItemInterface } from '$lib/types';

export const prerender = true;

export const load: PageLoad = async () => {

    try {
        const carouselItems: CarouselItemInterface[] = [
            {
                name: '0',
                image: '/images/1.jpg',

            },
            {
                name: '1',
                image: '/images/2.jpg',

            },
            {
                name: '2',
                image: '/images/3.jpg',

            }
        ];
        return { carouselItems };
    } catch (err) {
        throw error(404)
    }
};