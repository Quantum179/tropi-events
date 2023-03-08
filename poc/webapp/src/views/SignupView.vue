<template>
  <div class="signup">
    <h1>Inscription</h1>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="formDto.email" label="Email" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="formDto.username" label="Username" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="formDto.phoneNumber" label="Username" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="formDto.password" label="Mot de passe" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="formDto.password2" label="Répéter mot de passe" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({})
export default class SignupView extends Vue {
  formDto = {
    username: '',
    type: 0,
    email: '',
    phoneNumber: null,
    password: '',
    password2: ''
  }

  mounted() {

  }
}
</script>
