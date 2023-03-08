<template>
  <div class="signup">
    <h1>Connexion</h1>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="formDto.username" label="Username" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="formDto.password" label="Mot de passe" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapMutations } from 'vuex';

@Component({
  computed: {
    ...mapMutations(['setToken'])
  }
})
export default class LoginView extends Vue {
  formDto = {
    username: '',
    password: ''
  }

  mounted() {

  }

  submitLogin() {

  }
}
</script>
