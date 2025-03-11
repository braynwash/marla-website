<script>
	import './blogPost.css';
	export let image = '/';
	export let title = 'Default Title';
	export let description = 'Default description goes here.';
	export let date = 'Date goes here.';
</script>

<div class="blogPost">
	<img src={image} alt="Example for blog post" />
	<h3>{title}</h3>
	<p>{description}</p>
	<p><span>{date}</span></p>
</div>
