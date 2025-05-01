<script>
	import './newsSlug.css';
	let { data } = $props();
</script>

<main class="newsSlug">
	<h1>{data.post.title}</h1>
	<h2>{data.post.description}</h2>
	<p class="date">{data.post.date}</p>
	{#if data.post.image}
		<img src={data.post.image} alt={data.post.title} />
	{/if}
</main>
