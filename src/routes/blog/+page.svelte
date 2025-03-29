<script>
	import { BlogPost } from '$lib';
	import './blog.css';
	let { data } = $props();
</script>

<main class="blog">
	<img class="blog-img" src="/blog-hero.png" alt="Hero for blog page." />

	<div class="bg">
		<h1>Blog</h1>
		<h3>Recent Posts</h3>
	</div>
	<div class="bgPosts">
		{#if data.summaries.length > 0}
			{#each data.summaries as { slug, title, image, date, description } (slug)}
				<BlogPost {image} {title} {description} {date} />
			{/each}
		{:else}
			<p>Loading posts...</p>
		{/if}
	</div>
</main>
