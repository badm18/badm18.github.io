import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import vuetify from "./plugins/vuetify";

import "./styles/index.css";

const initApp = async () => {
  new Vue({
    vuetify,
    router,
    render: (h) => h(App),
  }).$mount("#app");
};

initApp();
