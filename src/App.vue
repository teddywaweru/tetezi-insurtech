<script lang="ts">
  import { defineComponent } from "vue";
  import { RouterLink, RouterView } from "vue-router";
  export default defineComponent({
    setup() {
    return {
      checklist
    }
      }
  
    })
  var checklist = ["About","Members","Partners","Events","Join","Contact"];
// import HelloWorld from "./components/HelloWorld.vue";

  


</script>
<template>
  <header class=" bg-black sticky top-0 left-0 right-0 z-10 h-16 ">
    <div class=" flex flex-row h-full items-center">
      <a href="/">
        <img
          alt="Vue logo"
          class=""
          src="@/assets/logo.svg"
          width="30"
          height="30"
        />    
      </a>
        <nav class=" flex flex-row px-2 h-full">
          <!-- <div> -->
            <RouterLink to="/" class="_router_links">Home</RouterLink>

          <!-- </div> -->
          <RouterLink to="/services" class="_router_links">Services</RouterLink>
          <RouterLink to="/about" class="_router_links">About</RouterLink>
          <RouterLink to="/career" class="_router_links">Careers</RouterLink>
        </nav>

    <!-- </div> -->
    </div>
  </header>

  <div class=" "> 
    <RouterView />
  </div>
  
  <footer>
    <div class=" bg-blue-300 sticky">
    <div class="_grow_div_container items-start">
      <div v-for="val in checklist" class="_grow_div sm:m-2">
        <div>{{val}}</div>
      </div>
    </div>
    <div class="flex flex-row h-8 px-1 py-1 ">
      <div class=" w-96 h-0.5 bg-white rounded-md ">
      </div>
    </div>
    <div class="_grow_div_container items-start">
      <div class=" _grow_div  items-start">
        <a href="/">Mission</a>
        <a href="/">Our Team</a>
        <a href="/">Events</a>
      </div>
      <div class="_grow_div items-start">
        <a href="/">Founding Partners</a>
        <a href="/">General Partners</a>
        <a href="/">Ecosystem Partners</a>
        <a href="/">Legal Partners</a>
      </div>
    </div>
    </div>

  </footer>
</template>
<!-- 
<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
}
 */
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    /* place-items: flex-start; */
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
