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
			The Media Arts Research and Learning Arcade (MARLA) at the Luddy School of Informatics, Computing, and Engineering in IU Indianapolis is dedicated to the research, preservation, and celebration of video game culture and history. Recognized officially as an IU Museum Collection, MARLA boasts an extensive library of video games, consoles, and interactive media both from offical studios and Luddy students, ensuring these artifacts remain accessible for education and enjoyment for years to come. Through providing hands-on experiences, dedicated collections, and active scholarship, MARLA emphasizes the cultural importance and impact of games as well as media, highlighting their impact as influential digital heritage that shapes society, art, and technology today and beyond.
		</p>
		<p>
			Our mission is to protect, document, and showcase the evolution of games and media as vital artifacts of digital storytelling, artistic innovation, and community engagement. From classic arcade machines to modern, viral indie titles, MARLA ensures that future generations of students can study, experience, and appreciate the impact of gaming in all its forms. Whether you're a student looking to research games new and old or just a casual game enthusiast looking to get into some classic titles, MARLA invites you to step into the world of preserved play- where every pixel has a past.
		</p>
	</div>

	<div class="about-pics">
		<div class="about-pic">
			<img src="/about-pic1.png" alt="A Nintendo Entertainment System on a beige TV stand next to a Sonic Mania Collector's box." />
			<p> A Nintendo Entertainment System (NES)- one of the many available consoles in the lab!</p>
		</div>
		<div class="about-pic">
			<img src="/about-pic2.png" alt="A front view of MARLA Council members Haven Hamelin on the left and Mathew Powers on the right with their hands over each others' shoulders smiling in the lab against many different posters, prints, and memorbilia in the lab." />
			<p>MARLA Council members Haven Hamelin (left) and Mathew Powers (right) in the lab.</p>
		</div>
		<div class="about-pic">
			<img src="/about-pic3.png" alt="Two students, one with blonde curly hair and one with brown coily hair, playing a video game in Japanese with a large flat-screen TV in the middle. Memorbilia, trinkets, and console boxes are laid around the counter and walls around the TV." />
			<p>Two students playing a 3D horror game on the lab TV localized in Japanese.</p>
		</div>
	</div>
	<div class="ab">
		<h1 style="margin-bottom: 30px;">Meet Our Members</h1>
		<div class="members">
			<MemberCard name="Mathew Powers" />
			<MemberCard image="/member-haven.jpg" name="Haven Hamelin"/>
			<MemberCard image="/member-sam.png" name="Sam Barks" role="Council Member, Student" quote="Game Preservation is something we should all work towards." about="I am a full time student at IU Indy working on the Council for the Marla Museum. I love collecting anything video games and showing people how important it is to do so!"/>
			<MemberCard image="member-gary.png" name="Gary Maxiner III"/>
			<MemberCard image="member-jason.jpg" name="Jason Peercy"/>
			<MemberCard image="member-zeb.jpg" name="Zebulun Wood" />
			<MemberCard image="member-erin.jpg" name="Erin Brady"/>
		</div>
	</div>
</main>
