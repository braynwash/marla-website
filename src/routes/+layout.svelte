<script>
	let { children } = $props();
	import '../global.css';
	import { Nav, Footer } from '$lib';
</script>

<Nav />

{@render children()}

<Footer />
