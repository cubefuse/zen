import Vue from "vue";
import Buefy from "buefy";
// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "buefy/dist/buefy.css";

Vue.component("fas", FontAwesomeIcon);

Vue.use(Buefy, { defaultIconPack: "fas" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
