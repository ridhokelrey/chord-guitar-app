<template>
    <v-row>
      <v-col md="4">
        <panel title="Add Song">
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
          <div class="error--text" v-if="error">
            {{error}}
          </div>
          <v-btn
            color="green darken-1"
            dark
            @click="addSong"
            >Add Song
          </v-btn>
        </panel>
      </v-col>
    </v-row>
</template>

<script>
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
    async addSong () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
