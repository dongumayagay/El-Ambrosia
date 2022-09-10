import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({}) {
  // @ts-ignore
//   if (params.slug === 'hello-world') {
//     return {
//       title: 'Hello world!',
//       content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
//     };
//   }
 return {
    text:"hello"
 }

//   throw error(404, 'Not found');
}