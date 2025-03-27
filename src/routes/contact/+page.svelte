<script>
    import "./contact.css";
    import Icon from '@iconify/svelte';
</script>

<main class="contact">
    <div class="contactHero"></div>

    <div class="contactContent">
        <div class="contactInfo">

            <div id="box1" class="contactBox">
                <div class="contactWrap">
                    <h1>Contact us!</h1>
                    <span><Icon icon="pixelarticons:buildings" class="contactIcon" />535 W Michigan St <br> Indianapolis, IN 46202</span>
                    <span><Icon icon="pixelarticons:home" class="contactIcon" />IT 420</span>
                    <span><Icon icon="pixelarticons:clock" class="contactIcon" />Weekdays from 9 AM - 5 PM</span>
                    <span><Icon icon="pixelarticons:mail" class="contactIcon" />marlalab@iu.edu</span>
                    <span><Icon icon="pixelarticons:device-phone" class="contactIcon" /><a style="margin-right: 5px;" href="https://www.instagram.com/iuiluddy/">@iuiluddy </a> on Instagram</span>
                </div>
            </div>

            <div id="box2" class="contactBox">
                <div class="contactWrap">
                    <h1>LORE Club: Get involved!</h1>
                    <span><a href="https://thespot.indianapolis.iu.edu/organization/lore" target="_blank"><Icon icon="pixelarticons:device-laptop" class="contactIcon" />Check out our Spot page!</a></span>
                    <span><a href="https://discord.gg/G5kzgdZKTa" target="_blank"><Icon icon="pixelarticons:device-phone" class="contactIcon" />Join our Discord!</a></span>
                    <span><Icon icon="pixelarticons:mail" class="contactIcon" />lore@iu.edu</span>
                    
                </div>
            </div>

        </div>
        <div class="contactForm">
            <h1>Send us an email!</h1>
            <form>
                <div class="inputFlex"> 
                    <input type="text" name="fName" id="fName" placeholder="First name" required>
                    <input type="text" name="Name" id="lName" placeholder="Last name" required>
                </div>
                 
                <input type="email" name="email" id="email" placeholder="Email Address" required>
                <select name="purpose" id="purpose" required>
                    <option value="">What is the purpose of your email?</option>
                    <option value="general">General question</option>
                    <option value="tour">Tour request</option>
                    <option value="donation">Donation inquiry</option>
                    <option value="contribution">Financial contribution</option>
                </select> 
                <textarea name="message" id="message" placeholder="Message" required></textarea> <br>

                <div class="btnCenter">
                    <input type="submit" id="submit" >
                </div>
                
            </form>
        </div>
    </div>
</main>