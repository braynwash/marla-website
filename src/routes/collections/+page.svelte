<script>
	import { CollectionCard } from "$lib";
    import Icon from '@iconify/svelte';
    import "./collections.css";
</script>

<main class="collections">

    <!-- ## COLLECTIONS CONTENT ## -->

    <!-- hero image that displays an image of one of the student games offered in MARLA- could later be updated to be an image carousel -->
    <div class="collectionsWrap">
        <div class="collectionsHero"></div>
    </div>
    
     <div class="collectContentWrap">

        <!-- all the collection cards- in the future will link to a CollectiveAccess instance. component is "CollectionCard" and takes "img" "alt" "title" "description" and "link" -->
        <div class="collectionsContent">
            <h1 id="collectionHead" style="font-family: 'VT323';">Collections</h1>
               <CollectionCard title="ROM Collection" description="From the classics to hidden gems, check out our robust ROM collection!" link="/construction"/>
               <CollectionCard title="Cosmic Wonder MAS Creature Collection" description="View our wonderous creature collection!" link="/construction"/>
               <CollectionCard title="Student Work" description="Check out a wide assortment of work lovingly crafted by our Media Arts and Science students!" link="/construction"/>

               <!-- "view all" button that, in the future will take users to the entire collectiveaccess collections. -->
                <a id="viewAll" href="/construction"><Icon id="viewIcon" icon="pixelarticons:arrow-right" /> View all</a>
                
        </div>

     </div>
  
</main>