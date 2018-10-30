<template>
  <div class="home">
    <d-card style="max-width: 300px">
      <d-card-header>Card header</d-card-header>
      <d-card-img src="https://place-hold.it/300x200"/>
      <d-card-body title="Lorem Ipsum">
        <p>Lorem ipsum dolor sit amet.</p>
        <d-btn theme="primary">Read more &rarr;</d-btn>
      </d-card-body>
      <d-card-footer>Card footer</d-card-footer>
    </d-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
