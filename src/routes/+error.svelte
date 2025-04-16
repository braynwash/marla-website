<script>
     import "./error.css"
</script>

<!-- If a user attempts to go to a route that ISNT available/a 404 error occurs, Svelte will automatically route to this page. -->

<div class="errorWrap">
     <div class="error">
          <h1 style="font-size:130px;color:#F27447;">Whoops!</h1>
          <h1 style="font-size:40px;margin-bottom:75px;">The page you're looking for is in another castle.</h1>
          <a href="/">Back to Home</a>
     </div>
</div>

