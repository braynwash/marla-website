<script>
	import './memberCard.css';
	export let image = "/member-powers.jpg";
	export let name = "Member name";
    export let role = "Member role";
    export let quote = "Where cool people can view cool collections!";
	export let about = "About the member";
</script>

<div class="memberWrap">
	<div class="member">
		<div class="img"><img src={image} alt='A photo of {name}'></div>
		<div class="memberInfo">
			<h3>{name}</h3>
			<h4>{role}</h4>
			<p>"{quote}"</p>
			<p>
				{about}
			</p>
		</div>
	</div>
</div>

