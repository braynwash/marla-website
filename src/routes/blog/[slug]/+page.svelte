<script>
	import './blogSlug.css';
	let { data } = $props();
</script>

<main class="blogSlug">
	<h1>{data.post.title}</h1>
	<h2>{data.post.description}</h2>
	<p class="date">{data.post.date}</p>
	{#if data.post.image}
		<img src={data.post.image} alt={data.post.title} />
	{/if}
	{#if data.post.content}
		<div>{@html data.post.content}</div>
	{/if}
</main>
