<template>
  <v-card flat tile>
    <v-toolbar color="green darken-1" dark>
      <v-toolbar-title class="mr-4">
        <span
          class="home"
          @click="navigateTo({name: 'root'})">
          Chord Guitar
        </span>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn
          color="green darken-1"
          elevation
          @click="navigateTo({name: 'songs'})">
          Search
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          color="green darken-1"
          elevation
          @click="navigateTo({name: 'login'})">
          Login
        </v-btn>

        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          color="green darken-1"
          elevation
          @click="navigateTo({name: 'register'})">
          <!-- <router-link to="register" class="text-decoration-none white--text"> -->
            Sign Up
          <!-- </router-link> -->
        </v-btn>

        <v-btn
          v-if="$store.state.isUserLoggedIn"
          color="green darken-1"
          elevation
          @click="logout">
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>
<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #43A047;
  text-emphasis: inherit
  ;
}
</style>
