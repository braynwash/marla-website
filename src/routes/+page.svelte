<script>
    import { HomeCollectCard } from "$lib";
    import { NewsPost } from '$lib';
    import "./home.css"
    
    export let data; // export the variable for news posts

    let currentHighlight = 1; //sets the current photo in the highlight section to 

  // the sequence of photos in the "highlights" section on the page- image sources can be changed, but images cannot be added/deleted (no more or less than 3 possible highlights.)
  const highlights = {
  1: '/about-pic1.png',
  2: '/about-pic2.png',
  3: '/about-pic3.png'
};
</script>

<main class="home"> 

  <!-- banner with the controller -->
    <div class="hero">
        <div class="heroText">
            <img alt="MARLA ROM Logo" src="/rom-logo.png">
            <h1>PRESERVE. STUDY. PLAY.</h1>
            <p>Where scholars, students, and gamers come together to explore the legacy of games and media. From rare finds to modern classics- every game has a story worth saving.</p>
            <a href="/collections">view collections</a>
        </div>
        <img id="controller" alt="3D render of a Game Controller" src="/controller.png">
        <img id="banner" alt="border" src="/marla-banner.png" >
    </div>

    <!-- ## HOME CONTENT ## -->

    <div class="homeWrap">

      <!-- "about" card  -->
        <div class="homeAbtWrap">
            <div class="homeAbout">
                <div class="homeAbtImg">
                    <img alt="Two students playing a game in Japanese on the MARLA TV." src="/about-pic3.png">
                </div>
                <div class="homeAbtText">
                    <p style="font-weight: normal;">The Media Arts Research and Learning Arcade (MARLA) at the Luddy School of Informatics, Computing, and Engineering in IU Indianapolis is dedicated to exploring the cultural, historical, and technological significance of video games and interactive media. As one of the few academic spaces focused on game and media preservation in the Midwest, MARLA serves as a research hub and playable archive that bridges the gap between study and play by maintaining several collections of video games new and old.</p>
                <a href="/about">About Us</a>
                </div>
            </div>
        </div>


        <!-- highlighted images section -->
    <h1 class="homeHeader">Highlights</h1>

    <div class="highlightSection">

      <!-- takes the currently highlighted image, turns it into the bg image and blurs it -->
        <div class="imageContainer" style="--bg-image: url({highlights[currentHighlight]})">
          <img src={highlights[currentHighlight]} alt="A set of images relating to ." />
        </div>

<!-- the set of buttons that changes the current highlight #, thus changing the photo. -->
<div class="buttons">
  <button 
    onclick={() => currentHighlight = 1} 
    class:selected={currentHighlight === 1}>
    Student Work collection
  </button>
  <button 
    onclick={() => currentHighlight = 2} 
    class:selected={currentHighlight === 2}>
    Creature collection
  </button>
  <button 
    onclick={() => currentHighlight = 3} 
    class:selected={currentHighlight === 3}>
    Game <br> collection
  </button>
  </div>        
</div>

    <!-- lore club section -->
    <h1 id="loreHead" class="homeHeader">Get involved with Lore Club!</h1>

    <div class="loreClub">
        <div class="loreImg"></div>
        <div class="loreText">The LORE Club is a Luddy student organization hosted in MARLA that promotes the preservation and analysis of media new and old with a focus on gaming. In meetings students share their interests and personal works with other dedicated students in an engaged, open environment to expand horizons and get excited for upcoming projects or the latest news in the video game world. Learn more and get involved below!
            <div class="loreBtns">
                <a href="https://thespot.indianapolis.iu.edu/organization/lore">Check out our SPOT Page!</a>
                <a href="https://discord.gg/G5kzgdZKTa">Join our Discord!</a> 
            </div>
        </div>
    </div>


<!-- collection cards- links to collectiveaccess instances -->
    <div class="collectionsTop">
        <h1 class="homeHeader">Collections</h1>
        <a href="/collections">View more</a>
    </div>

    <!-- component is titled "HomeCollectCard"- contains "image" "title" "description" and "link"  -->
    <div class="collectionsWrap">
        <HomeCollectCard title="ROM Collection" description="View our ROMs from the new to the old!" image="/collectCard2.png" link="/construction"/>
        <HomeCollectCard title="Creature Collection" description="See our Cosmic Wonder creature collection!" image="/collectCard1.png" link="/construction"/>
        <HomeCollectCard title="Student Work" description="Check out work made by our MAS students!" image="/game.png" link="/construction"/>
    </div>

    <!-- press release cards- copies EXACTLY from the press post data from page.server.js in press folder, gets the data from +page.server.js in the root of routes -->
    <h1 class="homeHeader">MARLA @ Luddy in Indianapolis</h1>
    <div class="press-posts">

      <!-- uses a svelte loop to create a NewsPost component when data exists and fill it with the data it received -->
		{#if data.summaries.length > 0}
			{#each data.summaries as { slug, title, image, date, description } (slug)}
				<NewsPost {image} {title} {description} {date} />
			{/each}
		{:else}
			<p>Loading posts...</p>
		{/if}
	</div>

</div>


</main>

