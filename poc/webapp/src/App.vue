<template>
  <div id="app">
    <v-app-bar dark>
      <v-toolbar-title @click="goToHome()">My App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-if="currentUser.id === -1" to="/login">SE CONNECTER</v-btn>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { stateModule } from './store'

@Component
export default class App extends Vue {
  mounted() {

  }

  get currentUser() {
    return stateModule.user
  }

  goToHome() {
    this.$router.push('/')
  }
}
</script>
