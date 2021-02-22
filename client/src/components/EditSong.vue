<template>
    <v-row>
      <v-col md="4">
        <panel title="Edit Song">
          <v-text-field
              label="Title"
              :rules="rules.required"
              required
              v-model="song.title"
          ></v-text-field>

          <v-text-field
              label="Artist"
              :rules="rules.required"
              v-model="song.artist"
          ></v-text-field>

          <v-text-field
              label="Genre"
              :rules="rules.required"
              v-model="song.genre"
          ></v-text-field>

          <v-text-field
              label="Album"
              :rules="rules.required"
              v-model="song.album"
          ></v-text-field>

          <v-text-field
              label="Album Image URL"
              :rules="rules.required"
              v-model="song.albumImageUrl"
          ></v-text-field>

          <v-text-field
              label="YouTube ID"
              :rules="rules.required"
              v-model="song.youtubeId"
          ></v-text-field>
        </panel>
      </v-col>
      <v-col md="8">
        <panel>
          <v-textarea
              label="Lyrics"
              :rules="rules.required"
              v-model="song.lyrics"
          ></v-textarea>

          <v-textarea
              label="Chord"
              :rules="rules.required"
              v-model="song.chord"
          ></v-textarea>
          <div class="danger-alert" v-if="error">
            {{error}}
          </div>
          <v-btn
            color="green darken-1"
            dark
            @click="saveSong"
            >Save Song
          </v-btn>
        </panel>
      </v-col>
    </v-row>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        chord: null
      },
      error: null,
      rules: {
        required: [value => (value || '').length > 0 || 'This field is required']
      }
    }
  },
  methods: {
    async saveSong () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId

      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (error) {
        this.error = error.data.error
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (error) {
      this.error = error.data.error
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger-alert {
  color: red;
}
</style>
