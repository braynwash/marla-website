<script>
	let { children } = $props();
	import Nav from '$lib/nav.svelte';
	import "../global.css"

</script>

<Nav />

{@render children()}