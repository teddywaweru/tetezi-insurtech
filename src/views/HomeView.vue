<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import {homeContent} from "../content/homePage.js";
// console.log(`${contents}`)
</script>

<template>
  <!-- <main> -->
    <!-- <TheWelcome /> -->
    <div class=" ">


      <div class=" _grow_div_container ">
        <div class=" _grow_div md:w-1/2">
            <img
            src="@/assets/logo.svg"
            alt="Tetezi_info"
            width="100" height="100">
          <div class="">
            <h1 class=" font-bold text-xl">
              Tetezi
            </h1>
            <p>
              Your <strong>AI-powered </strong> guardian.
            </p>
        </div>
        </div>
        <div class=" _grow_div md:w-1/2">
          <p>
            Delivering of services using high level technology.
          </p>
          <br>
          <p>
            Join us in our journey of the future, where AI powers the world.
          </p>
          <div class="_grow_div_container p-0 pt-10 h-auto">
            <button class=" px-6">
              Learn More!
            </button>
            <button class="px-6">
              Contact Us!
            </button>
          </div>
        </div>
      </div>


      <!-- <div class=" home_divs bg-slate-200 items-center "> -->
        <div class="_grow_div_container bg-white">
      <!-- <div class=" "> -->
        <div class=" _grow_div ">
          <h1>
            {{ homeContent["Applied AI"].title }}
          </h1>
          <p>
            {{ homeContent["Applied AI"].description }}
          </p>
        </div>
        <div class=" _grow_img p-10">
          <p>
            Insert image here.
          </p>
        </div>
      </div>
      <div class=" _grow_div_container ">
        <div class=" _grow_div">
          <h1>
            {{ homeContent["Applied AI"].title }}
          </h1>
          <p>
            {{ homeContent["Applied AI"].description }}
          </p>
        </div>
        <div class="_grow_img p-10">
          <img src="" alt="">
          <p>Insert Imge here</p>
        </div>
      </div>
      <div class=" _grow_div_container bg-white">
        <div class=" _grow_div">
          <h3>
            {{ homeContent["Distributed Infrastructure"].title }}
          </h3>
          <p>
            {{ homeContent["Distributed Infrastructure"].description }}
          </p>
        </div>
        <div class=" _grow_img ">
          Insert image here
        </div>
        
      </div>
      <div class=" _grow_div_container bg-black">
        <div class=" _grow_div">
          <h3>
            {{ homeContent["Future of Connectivity"].title }}
          </h3>
          <p>
            {{ homeContent["Future of Connectivity"].description }}
          </p>
          <!-- <p> -->
            {{ homeContent["Future of Connectivity"].image_cred }}
          <!-- </p> -->
        </div>
        <div class=" x_grow_img">
          insert image here
        </div>

      </div>
    </div>
  <!-- </main> -->
</template>

