<template>
    <nav :class="['navbar is-fixed-top is-transparent ', 'is-' + color]"  role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <h1>Cubefuse <strong class="is-uppercase">Zen</strong> Authenticator</h1>
                </router-link>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  @Prop({ default: "white" })
  color!: string;
}
</script>
