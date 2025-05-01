<script>
	import './newsPost.css';
	export let image = '/';
	export let title = 'Default Title';
	export let description = 'Default description goes here.';
	export let date = 'Date goes here.';
	export let slug = 'slug';
</script>

<div class="newsPost">
	<img src={image} alt="Example for news post" />
	<div class="newsSub">
		<h3>{title}</h3>
		<p>{description}</p>
		<p><span>{date}</span></p>
		<a class="newsButton newsAnchors" href="/press/{slug}">Read More!</a>
	</div>
</div>
