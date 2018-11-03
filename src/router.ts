import Vue from "vue";
import Router from "vue-router";
import TileGrid from "./views/TileGrid.vue";
import TokenView from "./views/TokenView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: TileGrid
    },
    {
      path: "/token",
      name: "token",
      component: TokenView
    }
  ]
});
