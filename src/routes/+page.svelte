<script>
    import { HomeCollectCard } from "$lib";
    import { NewsPost } from '$lib';
    import "./home.css"
    
    export let data;
    let currentHighlight = 1;

const highlights = {
  1: '/about-pic1.png',
  2: '/about-pic2.png',
  3: '/about-pic3.png'
};
</script>

<main class="home">
    <div class="hero">
        <div class="heroText">
            <img alt="ROM Logo" src="/rom-logo.png">
            <h1>PRESERVE. STUDY. PLAY.</h1>
            <p>where people can do really scholarly study on game design to be able to look every game with this genre, mechanic, etcetera, and actually be able to play them, study them, or write papers on them.</p>
            <a href="/collections">view collections</a>
        </div>
        <img id="controller" alt="3D render of a Game Controller" src="/controller.png">
        <img id="banner" alt="border" src="/marla-banner.png" >
    </div>

    <div class="homeWrap">
        <div class="homeAbtWrap">
            <div class="homeAbout">
                <div class="homeAbtImg">
                    <img alt="Friends" src="/about-pic3.png">
                </div>
                <div class="homeAbtText">
                    <h1 style="font-size: 18px; font-weight: normal;">The lab, in the Information Communication Technology Complex Building at IU Indianapolis, has Nintendo consoles ranging from the original Nintendo Entertainment System to the Wii U. Luddy students can play classics such as Pac-Man and Space Invaders on an Atari 2600, which was released in 1977. Classic consoles are also on display, such as the Commodore VIC-20 from 1980 or Radio Shack’s TRS-80, a desktop microcomputer also launched in 1977.</h1>
                <a href="/about">About Us</a>
                </div>
            </div>
    </div>

    <h1 class="homeHeader">Highlights</h1>

    <div class="highlightSection">

        <div 
  class="imageContainer" 
  style="--bg-image: url({highlights[currentHighlight]})"
>
  <img src={highlights[currentHighlight]} alt="Current Highlight" />
</div>

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

    <h1 class="homeHeader">Get involved in Lore Club!</h1>

    <div class="loreClub">
        <div class="loreImg"></div>
        <div class="loreWrap"></div>
        <div class="loreText">The LORE Club is a Luddy student organization hosted in MARLA that promotes the preservation and analysis of media new and old with a focus on gaming. In meetings students share their interests and personal works with other dedicated students in an engaged, open environment to expand horizons and get excited for upcoming projects or the latest news in the video game world. Learn more and get involved below!
            <div class="loreBtns">
                <a href="https://thespot.indianapolis.iu.edu/organization/lore">Check out our SPOT Page!</a>
                <a href="https://discord.gg/G5kzgdZKTa">Join our Discord!</a> 
            </div>
        </div>
    </div>

    <div class="collectionsTop">
        <h1 class="homeHeader">Collections</h1>
        <a href="/collections">View more</a>
    </div>

    <div class="collectionsWrap">
        <HomeCollectCard image="/collectCard1.png"/>
        <HomeCollectCard image="/game.png"/>
        <HomeCollectCard image="/collectCard2.png"/>
    </div>

    <h1 class="homeHeader">MARLA @ Luddy in Indianapolis</h1>
    <div class="press-posts">
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

