<template>
  <div class="home">
    <h1>Appli démo : Billeterie en ligne</h1>
    <router-link to="/events">Voir les événements à venir</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HomeView extends Vue {}
</script>
