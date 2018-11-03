<template>
    <router-link to="/token">
        <div class="tile is-parent">
            <article :class="['tile is-child notification is-' + color ]">
                <div class="level is-mobile">
                    <div class="level-item level-left">
                        <div class="image is-24x24">
                            <img :src="iconUrl" />
                        </div>
                    </div>
                    <div class="level-item has-text-centered level-left">
                        <p class="subtitle">{{name}}</p>
                    </div>
                </div>
            </article>
        </div>
    </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tile extends Vue {
  @Prop()
  name!: string;

  @Prop()
  iconUrl!: string;

  @Prop({ default: "light" })
  color!: string;
}
</script>
