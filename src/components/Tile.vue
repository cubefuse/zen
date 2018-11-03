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
                    <div class="level-item level-left">
                        <div>
                            <h2 class="has-text-weight-semibold">{{name}}</h2>
                            <h3>{{info}}</h3>
                        </div>
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
  info!: string;

  @Prop()
  iconUrl!: string;

  @Prop({ default: "light" })
  color!: string;
}
</script>
