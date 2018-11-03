<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "./components/NavBar.vue";
import TileGrid from "./views/TileGrid.vue";
import TokenView from "./views/TokenView.vue";

@Component({
  components: {
    TokenView,
    TileGrid,
    NavBar
  }
})
export default class App extends Vue {}
</script>
