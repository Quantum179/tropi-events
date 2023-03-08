<template>
  <div class="event-card">
    <h3>{{ event.name }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class EventCard extends Vue {
  @Prop(Object) readonly event = {name: ''}
}
</script>
