import type { RequestHandler } from './$types';
import type { CarouselItemInterface } from '$lib/types';

export const GET: RequestHandler = async () => {

    const carouselItems: CarouselItemInterface[] = [
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
    return new Response(JSON.stringify(carouselItems));
};