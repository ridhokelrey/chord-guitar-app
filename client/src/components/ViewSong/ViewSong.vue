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
import Chord from './Chord'
import Lyrics from './Lyrics'
import YouTube from './YouTube'
import SongData from './SongData'
import SongsService from '@/services/SongsService'
import Panel from '../Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
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
