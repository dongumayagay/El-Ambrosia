import type { RequestHandler } from './$types';
import type { CarouselItemInterface } from '$lib/types';

export const GET: RequestHandler = async () => {

    const carouselItems: CarouselItemInterface[] = [
        {
            name: '0',
            image: 'https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/243705065_117847190634917_653339844597567716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fPaxh7gUe4sAX-KvOdU&_nc_ht=scontent.fmnl25-5.fna&oh=00_AT-dZVO9DglatUnc1fk07sQ0-wlnXWkc0yIOvwBVrXyjvw&oe=63343F6E',
            link: '/'
        },
        {
            name: '1',
            image: 'https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/243519876_117847130634923_4447439677517139666_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UisRNgMHRV0AX-aw-fG&_nc_ht=scontent.fmnl25-5.fna&oh=00_AT94swokY4T0Ys0PK-UVGzkXmsAftfsH839WMWiEA0m3_g&oe=6334B7E2',
            link: '/'
        },
        {
            name: '2',
            image: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/244367001_117846543968315_5007865927415458510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_bMqu8e1k4kAX9JP0kt&_nc_ht=scontent.fmnl25-1.fna&oh=00_AT8jSCxvTgO-i-QOL8qnVJ3jfG76l2Ynnu3lawFUyscIPQ&oe=63339AD5',
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

