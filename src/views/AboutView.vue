<script setup lang="ts">
  import {aboutContent} from "../content/aboutPage.js";

</script>

<template>
  <div class=" _grow_div_container">
    <div class=" _grow_div">
      <h1>
        Our Mission
      </h1>
      <p>
        {{aboutContent["Our Mission"]}}
      </p>
    </div>
    <div class=" _grow_div">
      <h1>
        Who we are
      </h1>
      <p>
        {{aboutContent["Who we are"]}}
      </p>
    </div>
  </div>

</template>


<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
