<template>
  <div class="signup">
    <h1>Connexion</h1>
    <ValidationObserver v-slot="{ invalid }">
      <v-form @submit.prevent="submitLogin">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <ValidationProvider name="username" immediate v-slot="{ errors }" rules="required|min:3|alpha_num">
                <v-text-field v-model="formDto.username" label="Nom d'utilisateur" required></v-text-field>
                <span style="color: red">{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4">
              <ValidationProvider name="password" immediate v-slot="{ errors }" rules="required|min:8">
                <v-text-field v-model="formDto.password" label="Mot de passe" required type="password"></v-text-field>
                <span style="color: red">{{ errors[0] }}</span>
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
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, min, alpha_num } from 'vee-validate/dist/rules';
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

  created() {
    extend('required', {
      ...required,
      message: 'Ce champ est obligatoire'
    })
    extend('min', {
      ...min,
      message: 'Champ trop court'
    })

    extend('alpha_num', {
      ...alpha_num,
      message: 'Champ alphanumérique requis'
    })
  }

  async submitLogin() {
    await stateModule.login(this.formDto)
    if (stateModule.user.type === -1) {
      // login incorrect
    } else {
      this.$router.push('/events')
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  text-align center

#form
  width 50%
</style>
