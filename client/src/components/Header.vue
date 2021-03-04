<template>
  <v-card flat tile>
    <v-toolbar color="green darken-1" dark>
      <v-toolbar-title class="mr-4">
        <router-link
          class="home"
          :to="{
            name: 'songs'
          }"
          custom
          v-slot="{navigate}">
          <span @click="navigate">
             Chord Guitar
          </span>
        </router-link>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn
          color="green darken-1"
          elevation
          :to="{
            name: 'songs'
          }">
          Song Lists
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          color="green darken-1"
          elevation
          :to="{
            name: 'login'
          }">
          Login
        </v-btn>

        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          color="green darken-1"
          elevation
          :to="{
            name: 'register'
          }">
          Sign Up
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
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
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
