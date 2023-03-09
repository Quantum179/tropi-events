<template>
  <div id="app">
    <v-app-bar dark>
      <v-toolbar-title>Démo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-if="!user" to="/login">SE CONNECTER</v-btn>
      <v-btn v-else>SE DECONNECTER</v-btn>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState(['user'])
  }
})
export default class App extends Vue {
  user!: object

  mounted() {

  }
}
</script>
