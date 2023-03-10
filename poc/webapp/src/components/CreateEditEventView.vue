<template>
  <div class="signup">
    <h1>{{ pageTitle }}</h1>
    <v-form>
      <v-container>

      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['selectedEvent']),
    ...mapActions(['fetchEvent', 'createEvent']),
  }
})
export default class CreateEditEventView extends Vue {
  @Prop(Number) readonly id : number = -1

  formDto = {
    name: '',
    idOrga: -1,
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  }

  get pageTitle() {
    return this.id === -1 ? 'Création d\'événement' : 'Modification d\'événement'
  }

  fetchEvent!: (id: number) => void
  createEvent!: (form: object) => void

  async mounted() {
    if (this.id !== -1) {
      await this.fetchEvent(this.id)
    }
  }

  async create() {
    // validate(this.formDto)
    await this.createEvent(this.formDto)
  }
}
</script>
