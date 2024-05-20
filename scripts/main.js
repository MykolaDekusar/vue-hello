"use strict";
//adding vue.js
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      src: "https://picsum.photos/200",
      alt: "Random Image",
      calculate: 2 + 2,
    };
  },
  mounted() {
    console.log(this.message);
    if (this.calculate > 4) {
      this.message = "Bye Vue!";
      this.calculate++;
    }
  },
}).mount("#app");
