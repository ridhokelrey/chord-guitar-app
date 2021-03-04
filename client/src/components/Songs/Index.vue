<template>
  <v-row>
    <v-col v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-view-song />
    </v-col>
    <v-col>
      <songs-search-panel />
      <songs-panel />
    </v-col>
  </v-row>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewSong from './RecentlyViewSong.vue'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewSong
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
</style>
