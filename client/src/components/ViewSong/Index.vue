<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <song-data :song="song" />
      </v-col>
      <v-col cols="6">
        <you-tube :youtubeId="song.youtubeId" ref="youtube"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <lyrics :song="song"/>
      </v-col>
      <v-col cols="6">
        <chord :song="song"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import Chord from './Chord'
import Lyrics from './Lyrics'
import YouTube from './YouTube'
import SongData from './SongData'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongData,
    YouTube,
    Lyrics,
    Chord
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
