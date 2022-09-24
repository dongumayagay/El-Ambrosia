import type { PageLoad } from '../../../.svelte-kit/types/src/routes/(app)/$types';

export const prerender = true;

export const load: PageLoad = async () => {
    return {};
};