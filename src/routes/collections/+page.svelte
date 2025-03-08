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
               <CollectionCard title="ROM Collection" description="This is our ROM collection. It links to a CollectiveAccess instance."/>
               <CollectionCard title="Cosmic Wonder MAS Creature Collection" description="This is our wonderful mysterious creature collection! This goes to a CollectiveAccess instance."/>
               <CollectionCard title="Student Work" description="This is our Student Works collection! This goes to a CollectiveAccess instance."/>
            <a id="viewAll" href="/"><Icon icon="pixelarticons:arrow-right" width="24" height="24" /> View all</a>
        </div>
     </div>
     
        
   
  
</main>