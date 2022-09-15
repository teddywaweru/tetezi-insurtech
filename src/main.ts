import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { d, e, f } from "vitest/dist/index-60e2a8e1";
import { doesNotThrow } from "assert";

const app = createApp(App);

app.use(router);

app.mount("#app");

/*
// 1. Contents
      a. Articles & Declarations of Service
      b. images
    2. Title Bar
      a. Hmoepage
      b. Projects
      c. Plan Options
      d. Our Partners
      e. Our Organization
      f. Contacts & Forms
    3. UI Design
      a. Color scheme & fonts - USE WHITESPACES!!
      a. Menu drop down
      b. onHover
      d. Animations & transitions
      e. Lazy Loading
      f. Caching
*/