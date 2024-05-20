"use strict";
//adding vue.js
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      src: "https://picsum.photos/200",
      alt: "Random Image",
    };
  },
}).mount("#app");
