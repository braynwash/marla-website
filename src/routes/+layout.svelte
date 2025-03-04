<script>
	let { children } = $props();
	import '../global.css';
	import { Nav, Footer, MemberCard } from '$lib';
</script>

<Nav />

{@render children()}

<Footer />
