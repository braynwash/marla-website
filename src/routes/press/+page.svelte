<script>
	import { NewsPost } from '$lib';
	import './press.css';
	let { data } = $props();
</script>

<main class="press">
	<img class="press-img" src="/press-hero.png" alt="Hero for press page." />

	<div class="press-sub">
		<h2>News</h2>
		<h2>Recognition</h2>
		<h2>Awards</h2>
	</div>
	<div class="press-posts">
		{#if data.summaries.length > 0}
			{#each data.summaries as { slug, title, image, date, description } (slug)}
				<NewsPost {image} {title} {description} {date} {slug} />
			{/each}
		{:else}
			<p>Loading posts...</p>
		{/if}
	</div>
</main>
