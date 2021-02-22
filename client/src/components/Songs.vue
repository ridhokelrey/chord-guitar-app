<template>
  <v-container>
    <v-row>
      <v-col>
        <panel title="Songs" class="mx-20 my-15">
          <v-btn
            slot="action"
            @click="navigateTo({name: 'songs-add'})"
            fab
            small
            absolute
            elevation="2"
            right
            color="green lighten-5"
            >
              <v-icon
                color="green darken-3">
                mdi-plus
              </v-icon>
          </v-btn>

          <div
            v-for="song in songs"
            class="song"
            :key="song.id">

            <v-row>
              <v-col sm-6>
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
                    name: 'song',
                    params: {
                      songId: song.id
                      }
                    })"
                  >View
                </v-btn>
              </v-col>

              <v-col sm-6>
                <img class="album-image" :src="song.albumImageUrl" />
              </v-col>
            </v-row>
          </div>
        </panel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  width: 50%;
  margin: 0 auto;
}
</style>
