<script>
    import "./contact.css";
    import Icon from '@iconify/svelte'; // Imports Iconify for the pixel icons. Requires Iconify to be installed locally.

    // The below code handles the form data and sending it over to the MARLA email. All of the below code can be accessed through Web3Form's documentation under the "Svelte" tab.

    let status = ""; // Status message for the user- empty by default.
    let showModal = false; // The long orange tab (modal) that appears when users submit that shows the status message. Off by default.

const handleSubmit = async data => { // The function that runs after "submit" is pressed and form data is sent.
    showModal = true; // Orange tab (modal) appears
  status = 'Submitting...' // Updates status message to show users the data is submitting.
  const formData = new FormData(data.currentTarget) 
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page so the user can see the modal

  const response = await fetch("https://api.web3forms.com/submit", { // Sends over the data using Web3Form's API
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: json
  });

  const result = await response.json();

  if (result.success) { // If the "result" variable gets a positive response
      console.log(result);
      status = result.message || "Success! Your email has been submitted." // If the email is sent successfully
  } else {
    status = result.message || "We couldn't submit your email. Please try again!"; // If the email fails to send
  }
}

</script>

<!-- ## MODAL ## -->

{#if showModal} <!-- Conditional statement using Svelte -->

<!-- The below statements ignore Svelte's ally conditions that determine all of the code in .modal as a "warning." -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->

  <div class="modal" on:click={() => (showModal = false)}> <!-- When the modal itself is clicked at all for accessiblity -->
    <div class="modalContent" on:click|stopPropagation>
      <h2>{status}</h2> <!-- Updates content in the modal with the status of the email submission -->
      <button class="closeBtn" on:click={() => (showModal = false)}>X</button>
    </div>
  </div>
{/if}

<!-- ## PAGE CONTENT ## -->

<main class="contact">

    <!-- Hero img -->
    <div class="contactHero"></div>

    <div class="contactContent">

        <div class="contactInfo">

            <!-- Two boxes on the left side of the page. The boxes are differentiated by ID. Uses Iconify for the pixel Icons and span elements that contain both the icon AND the text. -->
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

        <!-- Contact form -->
        <div class="contactForm">
            <h1>Send us an email!</h1>
            <form on:submit|preventDefault={handleSubmit}> <!-- Form sends its data to the handleSubmit function. -->

                <!-- Empty input that contains the access key Web3Form uses to know what email to send the results to. -->
                <input type="hidden" name="access_key" value="c9f39597-0d93-4833-aa03-204b55075196">

                <!-- First and Last name inputs -->
                <div class="inputFlex"> 
                    <input type="text" name="First name" id="fName" placeholder="First name" required>
                    <input type="text" name="Last name" id="lName" placeholder="Last name" required>
                </div>
                 
                <!-- Email inputs -->
                <input type="email" name="email" id="email" placeholder="Email Address" required>

                <!-- Purpose of Message inputs -->
                <select name="Purpose of message" id="purpose" required>
                    <option value="">What is the purpose of your email?</option>
                    <option value="General question">General question</option>
                    <option value="Tour request">Tour request</option>
                    <option value="Donation">Donation inquiry</option>
                    <option value="Contribution">Financial contribution</option>
                </select> 

                <!-- Message input -->
                <textarea name="Message" id="message" placeholder="Message" required></textarea> <br>

                <!-- Submit btn -->
                <div class="btnCenter">
                    <input type="submit" id="submit" >
                </div>
        
            </form>
        </div>
    </div>        
</main>