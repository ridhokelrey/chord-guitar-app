<template>
  <panel title="Song Data">
    <v-row>
      <v-col sm-6 >
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn
          color="green darken-1"
          dark
          @click="navigateTo({
            name: 'song-edit',
            params: {
              songId: song.id
            }
          })">
          Edit
        </v-btn>
      </v-col>

      <v-col sm-6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-col>
    </v-row>
  </panel>
</template>

<script>
import Panel from '../Panel'
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 15px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
