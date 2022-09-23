<script setup lang="ts">
import SupportCards from "../components/SupportCards.vue";
import {homeContent} from "../content/homePage.js";
// console.log(`${contents}`)
</script>

<template>
  <!-- <main> -->
    <!-- <TheWelcome /> -->
    <div class=" ">
    <!-- <div class="-z-10 text-5xl bg-[url('@/assets/imgs/juliane-liebermann-O-RKu3Aqnsw-unsplash.jpg')]"> -->
    <!--  tuff -->
     <!-- <img src="@/assets/imgs/juliane-liebermann-O-RKu3Aqnsw-unsplash.jpg" class="bg-bottom" > -->
    <!-- </div> -->
      <div class=" _grow_div_container bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class=" _grow_div md:w-1/3 items-center px-auto">
            <img
            src="@/assets/logo.svg"
            alt="Tetezi_info"
            class=" "
            width="100" height="100">
          <div class=" text-center">
            <h1 class=" font-bold text-xl">
              Tetezi
            </h1>
            <p>
              Your <strong>AI-powered </strong> guardian.
            </p>
        </div>
        </div>
        <div class=" _grow_div md:w-auto text-3xl text-white">
          <p>
            Delivering of services using high level technology.
          </p>
          <br>
          <p>
            Join us in our journey of the future, where AI powers the world.
          </p>
          <div class="_grow_div flex-row p-0 pt-8 text-2xl w-full justify-center">
            <button class=" _router_links p-0 px-10 border-b-2 border-gray-200 mx-4 hover:border-transparent hover:bg-green-400 hover:text-white hover:shadow-md">
              Learn More!
            </button>
            <button class=" _router_links p-0 px-10 border-b-2 border-gray-200 mx-4 hover:border-transparent hover:bg-green-400 hover:text-white hover:shadow-md">
              Contact Us!
            </button>
          </div>
        </div>
      </div>


      <div class="_grow_div_container bg-white">
        <div class=" _grow_div rounded-xl mx-4 pb-4 ">
          <h1>
            {{ homeContent["Applied AI"].title }}
          </h1>
          <p>
            {{ homeContent["Applied AI"].description }}
          </p>
        </div>
        <div class=" _grow_img p-0 shadow-lg shadow-gray-400 rounded-2xl overflow-hidden">
        <img src="@/assets/imgs/juliane-liebermann-O-RKu3Aqnsw-unsplash.jpg"
        class="">
        </div>
      </div>

      <!-- <div class=" _grow_div_container items-start bg-gradient-to-r from-cyan-500 to-blue-500  p-4"> -->
      <div class=" _grow_div_container items-start bg-gradient-to-r from-cyan-300 to-blue-300  p-4">
        <SupportCards/>
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
        <div class="_grow_img ">
          <img src="" alt="">
          <p>Insert Image here</p>
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
        <div class=" _grow_img">
          insert image here
        </div>

      </div>
    </div>
  <!-- </main> -->
</template>

