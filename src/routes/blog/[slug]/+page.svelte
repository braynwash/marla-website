<script>
	import './blogSlug.css';
	let { data } = $props();
</script>

<main class="blogSlug">
	<div class="bs">
		<h1>{data.post.title}</h1>
		<h2>{data.post.description}</h2>
		<p>{data.post.date}</p>
		{#if data.post.image}
			<img src={data.post.image} alt={data.post.title} />
		{/if}
	</div>
</main>
