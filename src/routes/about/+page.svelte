<script>
	import './about.css';
	import { MemberCard } from '$lib';
</script>

<main class="about">
	<img
		class="about-img"
		src="/about-hero.png"
		alt="Haven holding ribbons in Marla with Powers by his side."
	/>
	<!-- <div class="hero-img"></div> -->
	<div class="ab">
		<h1>About Us</h1>
		<p>
			The lab, in the Information Communication Technology Complex Building at IU Indianapolis, has
			Nintendo consoles ranging from the original Nintendo Entertainment System to the Wii U. Luddy
			students can play classics such as Pac-Man and Space Invaders on an Atari 2600, which was
			released in 1977. Classic consoles are also on display, such as the Commodore VIC-20 from 1980
			or Radio Shack’s TRS-80, a desktop microcomputer also launched in 1977.The lab, in the
			Information Communication Technology Complex Building at IU Indianapolis, has Nintendo
			consoles ranging from the original Nintendo Entertainment System to the Wii U.
		</p>
		<p>
			Luddy students can play classics such as Pac-Man and Space Invaders on an Atari 2600, which
			was released in 1977. Classic consoles are also on display, such as the Commodore VIC-20 from
			1980 or Radio Shack’s TRS-80, a desktop microcomputer also launched in 1977.The lab, in the
			Information Communication Technology Complex Building at IU Indianapolis, has Nintendo
			consoles ranging from the original Nintendo Entertainment System to the Wii U. Luddy students
			can play classics such as Pac-Man and Space Invaders on an Atari 2600, which was released in
			1977. Classic consoles are also on display, such as the Commodore VIC-20 from 1980 or Radio
			Shack’s TRS-80, a desktop microcomputer also launched in 1977.
		</p>
	</div>

	<div class="about-pics">
		<div class="about-pic">
			<img src="/about-pic1.png" alt="Nintendo Super" />
			<p>The lab, in the Information Communication Technology Complex</p>
		</div>
		<div class="about-pic">
			<img src="/about-pic2.png" alt="Nintendo Super" />
			<p>The lab, in the Information Communication Technology Complex</p>
		</div>
		<div class="about-pic">
			<img src="/about-pic3.png" alt="Nintendo Super" />
			<p>The lab, in the Information Communication Technology Complex</p>
		</div>
	</div>
	<div class="ab">
		<h1>Meet Our Members</h1>
		<div class="members">
			<MemberCard name="Mathew Powers" />
			<MemberCard image="/member-haven.jpg" name="Haven Hamelin"/>
			<MemberCard image="/member-sam.png" name="Sam Barks" role="Council Member, Student" quote="Game Preservation to me is something we should all work towards." about="I am a full time student at IU Indy working on the Council for the Marla Museum. I love collecting anything video games and showing people how important it is to do so!"/>
			<MemberCard image="member-gary.png" name="Gary Maxiner III"/>
			<MemberCard image="member-jason.jpg" name="Jason Peercy"/>
			<MemberCard image="member-zeb.jpg" name="Zebulun Wood" />
		</div>
	</div>
</main>
