<script>
	import './footer.css';
</script>

<footer>
	<div class="content">
		<!-- To "center" the content, all elements in the footer are in the class below with flex styling applied. -->
		<div class="wrapper">

			<!-- The class below contains the logo. Same functionality as the logo div in nav.svelte. -->
			<div class="logo">
				<a href="/">
					<img src="/iu-marla-logo.png"
					alt="Acronym Marla: Media Arts Research and Learning Arcade. With IU Indianapolis Logo."/>
				</a>
			</div>

			<!-- The class below contains the different page links under a header defining the "category" of page. If you wish to add, delete, or edit any section, just add a new a tag and link the PAGES FILE NAME with a backslash in front to link to the new page. If you delete or add an entire section, you may need to edit the distance between or shrink the font size to fit in footer.css-->
			<div class="siteNav">
				<div class="navRow">
					<h1 style="font-size: 22px;">Heading</h1>
					<a href="/">Page</a>
					<a href="/">Page</a>
					<a href="/">Page</a>
				</div>
				<div class="navRow">
					<h1 style="font-size: 22px;">Collections</h1>
					<a href="/">ROM Collection</a>
					<a href="/">Cosmic Wonder</a>
					<a href="/">Student work</a>
				</div>
				<div class="navRow">
					<h1 style="font-size: 22px;">Heading</h1>
					<a href="/">Page</a>
					<a href="/">Page</a>
					<a href="/">Page</a>
				</div>
			</div>
		</div>
	</div>
	<!-- The below class contains the dark gray "copyright" text. The text can be altered whenever without any issue. -->
	<div class="bottom">
		<h1 style="margin-top: 20px; font-size:20px;">Copyright 2025 All rights Reserved</h1>
	</div>
</footer>
