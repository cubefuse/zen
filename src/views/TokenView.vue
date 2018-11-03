<template>
  <section class="hero is-light is-fullheight is-bold">
    <div class="hero-head">
      <nav-bar />
    </div>
    <div class="hero-body has-text-centered">
      <div class="container">
        <img src="http://spotify.com/favicon.ico" />
        <h3>spotify.com</h3>
        <h1 class="title">
          265 545
        </h1>
        <h3 class="subtitle has-text-weight-light">mprasanjith@gmail.com</h3>
        <progress class="progress is-dark is-small" value="15" max="100">15%</progress>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "../components/NavBar.vue";
@Component({
  components: { NavBar }
})
export default class TokenView extends Vue {}
</script>
