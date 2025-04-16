<script>
	import { CollectionCard } from "$lib";
    import Icon from '@iconify/svelte';
    import "./collections.css";
</script>


<main class="collections">
    <div class="collectionsWrap">
    <div class="collectionsHero"></div>
     </div>
    
     <div class="collectContentWrap">
        <div class="collectionsContent">
            <h1 id="collectionHead" style="font-family: 'VT323';">Collections</h1>
               <CollectionCard title="ROM Collection" description="From the classics to hidden gems, check out our robust ROM collection!" link="/construction"/>
               <CollectionCard title="Cosmic Wonder MAS Creature Collection" description="View our wonderous creature collection!" link="/construction"/>
               <CollectionCard title="Student Work" description="Check out a wide assortment of work lovingly crafted by our Media Arts and Science students!" link="/construction"/>
            <a id="viewAll" href="/construction"><Icon icon="pixelarticons:arrow-right" width="24" height="24" /> View all</a>
        </div>
     </div>
     
        
   
  
</main>