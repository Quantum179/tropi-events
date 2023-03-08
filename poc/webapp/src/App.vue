<template>
  <div id="app">
    <v-app-bar dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Démo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!user" to="/login"></v-btn>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  user = null

  mounted() {

  }
}
</script>
