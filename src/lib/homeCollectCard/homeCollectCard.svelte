<script>
	import './homeCollectCard.css';
    export let image = "/collectCard1.png"
    export let title = "Heading";
    export let description = "Where cool people can view cool collections!";
    export let link = "/";
</script>

<div class="homeCollectCard">
    <img class="collectCardImg" src={image} alt="meow"/>
        <div class="collectCardWrap">
            <h2>{title}</h2>
            {description}
            <a href={link}>Read more</a>
        </div>
</div>