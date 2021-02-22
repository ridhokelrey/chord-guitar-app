<template>
  <v-container>
    <v-row>
      <v-col>
        <panel title="Login" class="mx-20 my-15">
          <form
            name="chord-guitar-form"
            autocomplete="off">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
            ></v-text-field>
          </form>
          <br>
          <div
            class="error"
            v-html="error" />
          <br>
          <v-btn
            color="green darken-1"
            dark
            @click="login"
            >Login
          </v-btn>
      </panel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
