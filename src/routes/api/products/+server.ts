import type { RequestHandler } from './$types';
import type { CarouselItemInterface } from '$lib/types';

export const GET: RequestHandler = async () => {

    const carouselItems: CarouselItemInterface[] = [
        {
            name: '0',
            image: 'https://via.placeholder.com/1000.webp/?text=El%20Ambrosia%200',
            link: '/'
        },
        {
            name: '1',
            image: 'https://via.placeholder.com/1000.webp/?text=El%20Ambrosia%201',
            link: '/'
        },
        {
            name: '2',
            image: 'https://via.placeholder.com/1000.webp/?text=El%20Ambrosia%202',
            link: '/'
        }
    ];


    return new Response(JSON.stringify(carouselItems));
};

// import { supabase } from '$lib/supabase/client';
// import { error } from '@sveltejs/kit';

// export async function load({}) {
//     const {data:products,error:err} = await supabase
//         .from('products')
//         .select(
//             `id,name,description,image,type,
//             product_variants(
//             id,name,price
//             )`
//         )
//     if (err) throw error(404, 'Not found');
//     return{
//         products
//     }
// }

