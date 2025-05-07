<script>
	import './nav.css';
	let isOpen = false;
</script>

<nav class="mainNav">
	<div class="iu-logo">
		<img
			src="/iu-marla-logo.png"
			alt="Acronym Marla: Media Arts Research and Learning Arcade. With IU Indianapolis Logo."
		/>
	</div>

	<button
		class="hamburger"
		aria-label="Toggle menu"
		aria-expanded={isOpen}
		on:click={() => (isOpen = !isOpen)}
	>
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</button>

	<!-- The class below uses list elements around the anchor tags that serve as a "wrapper" for styling. If you wish to add a new page to the nav bar, add a new <li> element with an <a> tag inside. The href should lead to the PAGES FILE NAME with a backslash in front. -->
	<div class="nav-links" class:open={isOpen}>
		<ul>
			<li><a href="/" on:click={(isOpen = !isOpen)}>Home</a></li>
			<li><a href="/about" on:click={(isOpen = !isOpen)}>About</a></li>
			<li><a href="/collections" on:click={(isOpen = !isOpen)}>Collections</a></li>
			<li><a href="/blog" on:click={(isOpen = !isOpen)}>Blog</a></li>
			<li><a href="/press" on:click={(isOpen = !isOpen)}>Press Releases</a></li>
			<!--The contact a tag has extra styling and requires a class be on it for specificty.-->
			<li class="contact"><a href="/contact" on:click={(isOpen = !isOpen)}>Contact</a></li>
		</ul>
	</div>
</nav>
