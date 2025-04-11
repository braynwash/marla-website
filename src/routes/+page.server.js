import { posts } from '$lib/data';

export function load() {
	return {
		summaries: posts
	};
}
