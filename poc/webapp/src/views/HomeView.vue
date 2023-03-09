<template>
  <div class="home">
    <h1>Appli démo : Billeterie en ligne</h1>
    <v-container>
      <v-row justify="space-around">
        <v-btn to="/events">Voir les événements à venir</v-btn>
      </v-row>
    </v-container>
    <!-- <router-link to="/events">Voir les événements à venir</router-link> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HomeView extends Vue {}
</script>

<style lang="stylus" scoped>
h1
  text-align center
</style>
