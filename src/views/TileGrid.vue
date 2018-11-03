<template>
    <section class="hero">
        <div class="hero-head">
            <nav-bar />
        </div>
        <section class="section">
            <div class="tile is-ancestor">
                <Tile name="Facebook" iconUrl="https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico" color="dark" />
                <Tile name="Github" iconUrl="https://github.com/favicon.ico" color="light" />
                <Tile name="Github" iconUrl="https://github.com/favicon.ico" color="light" />
                <Tile name="Github" iconUrl="https://github.com/favicon.ico" color="light" />
                <Tile name="Github" iconUrl="https://github.com/favicon.ico" color="light" />
                <Tile name="Github" iconUrl="https://github.com/favicon.ico" color="light" />
            </div>
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tile from "../components/Tile.vue";
import NavBar from "../components/NavBar.vue";

@Component({
  components: { NavBar, Tile }
})
export default class TileGrid extends Vue {}
</script>
