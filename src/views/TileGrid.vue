<template>
    <div class="zen-has-fixed-navbar">
        <nav-bar />
        <section class="section">
            <div class="tile is-ancestor">
                <Tile name="Add new site" color="light" />
                <Tile name="Facebook" info="mprasanjith@gmail.com" iconUrl="https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico" color="light" />
                <Tile name="Github" info="mprasanjith@gmail.com" iconUrl="https://github.com/favicon.ico" color="light" />
                <Tile name="Yahoo!" info="mprasanjith@gmail.com" iconUrl="https://yahoo.com/favicon.ico" color="light" />
            </div>
        </section>
    </div>
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


<style lang="scss">
.zen-has-fixed-navbar {
  padding-top: 3.25rem;
}
</style>
