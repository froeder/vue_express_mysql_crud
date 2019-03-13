<template>
  <v-layout column justify-center align-center>
      <v-card-title class="headline">Login</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field type="text" placeholder="E-mail"  v-model="email"></v-text-field>
            <v-text-field type="password" placeholder="senha" v-model="senha"></v-text-field>
          </v-form>
          <v-layout row>
            <v-btn style="border-radius:.5em" color="primary" nuxt to="/auth/signup">Cadastro</v-btn>
            <v-btn style="border-radius:.5em"  color="success" nuxt to="/home">Login</v-btn>
          </v-layout>
        </v-card-text>
  </v-layout>
</template>


<script>
export default {
  layout: 'login',
  data () {
    return {
      email: '',
      senha: ''
    }
  }
}
</script>