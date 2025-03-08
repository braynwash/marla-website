<script>
	import './collectionCard.css';
    export let title = "Default Title";
    export let description = "Default description goes here.";
    export let link = "/";
</script>

<div class="collectionCard">
    <div class="cardPic">
        <img src="/game.png" alt="">
    </div>
    <div class="cardText">
        <h1>{title}</h1>
        <span>{description}</span>
        <div class="collectionBtn">
            <a href={link}>View collection</a>
        </div>
        
    </div>
</div>