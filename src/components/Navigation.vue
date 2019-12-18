<template>
<v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
    <v-list dense>
        <v-list-tile @click="onClick('home')">
          <!-- <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action> -->
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onClick('storage')">
          <!-- <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action> -->
          <v-list-tile-content>
            <v-list-tile-title>Storage</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onClick(settings)">
          <!-- <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action> -->
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onClick(about)">
          <!-- <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action> -->
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
</v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
    drawer = true;

    onClick(name:string) {
        this.$router.push(name);
        console.log(name);
    }
}
</script>

<style scoped lang="scss">
</style>
