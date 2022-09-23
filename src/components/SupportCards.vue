<script setup lang="ts">
  import {supportCards} from '../content/homePage.js';
  
  
</script>

<template >
  <div v-for="card in supportCards" class=" flex p-0">
    <div class=" max-w-sm rounded overflow-hidden shadow-lg bg-white m-2 ">
      <img class="w-full" src="@/assets/imgs/esther-ann-glpYh1cWf0o-unsplash.jpg" alt="Elderly happy couple">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ card.title }}</div>
        <p class="text-grey-darker text-base">
            {{card.description}}
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#tech</span>
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#efficiency</span>
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#monitoring</span>
      </div>
    </div>
  </div>

</template>
