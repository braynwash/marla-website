<script>
	import './blogPost.css';
	export let image = '/';
	export let title = 'Default Title';
	export let description = 'Default description goes here.';
	export let date = 'Date goes here.';
	export let slug = 'slug';
</script>

<div class="blogPost">
	<img src={image} alt="Example for blog post" />
	<h3>{title}</h3>
	<p>{description}</p>
	<p><span>{date}</span></p>
	<button class="blogButton"><a class="blogAnchors" href="/blog/{slug}">Read More!</a></button>
</div>
