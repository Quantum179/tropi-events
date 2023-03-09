<template>
  <div class="events">
    <h1>Evénements à venir</h1>
    <v-container>
      <v-row>
        <v-btn v-if="selectedID !== -1" @click="openDialog()">MODIFIER</v-btn>
        <v-btn @click="openDialog()">NOUVEAU</v-btn>
      </v-row>
      <v-row>
        <EventCard v-for="(event, index) of events" :event="event" :key="index" @click="selectEvent(event)"/>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog">
      <CreateEditEventView :id="selectedID"/>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapMutations, mapState } from 'vuex';
import CreateEditEventView from '../components/CreateEditEventView.vue';

@Component({
  components: { CreateEditEventView },
  computed: {
    ...mapState(['events']),
    ...mapMutations(['selectEvent']),
    ...mapActions(['fetchEvents'])
  }
})
export default class EventView extends Vue {
  events!: []
  selectEvent!: (event: object) => void
  fetchEvents!: () => void

  selectedID: number = -1
  dialog: boolean = false

  mounted() {
    this.fetchEvents()
  }

  openDialog() {
    this.dialog = true
  }
}
</script>

<style lang="stylus" scoped>
h1
  text-align center
</style>
