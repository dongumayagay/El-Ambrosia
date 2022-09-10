import { supabase } from '$lib/supabase/client';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({}) {
    
    const {data:products,error:err}=  await supabase.from('products').select(`
    id,name,description,image,type,
    product_variants(
        id,name,price
    )
    `)

    if (err) throw error(404, 'Not found');
  
    return{
        products
    }
}
