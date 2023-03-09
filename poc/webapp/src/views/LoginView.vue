<template>
  <div class="signup">
    <h1>Connexion</h1>
    <ValidationObserver v-slot="{ invalid }">
      <v-form @submit.prevent="submitLogin">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <ValidationProvider name="username" v-slot="{ errors }">
                <v-text-field v-model="formDto.username" label="Username" required></v-text-field>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4">
              <ValidationProvider name="password" v-slot="{ errors }">
                <v-text-field v-model="formDto.password" label="Mot de passe" required type="password"></v-text-field>
                <span>{{ errors[1] }}</span>
              </ValidationProvider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-btn type="submit" block class="mt-2" :disabled="invalid">Submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { stateModule } from '../store'

@Component({
  components: { ValidationObserver, ValidationProvider },
})
export default class LoginView extends Vue {
  formDto = {
    username: '',
    password: ''
  }

  errors!: []

  mounted() {

  }

  async submitLogin() {
    stateModule.login(this.formDto)
  }
}
</script>

<style lang="stylus" scoped>
h1
  text-align center

#form
  width 50%
</style>
