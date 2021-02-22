<template>
  <panel title="Lyrics">
    <v-textarea
      class="textarea"
      rows="25"
      readonly
      v-model="song.lyrics"
    ></v-textarea>
  </panel>
</template>

<script>
import Panel from '../Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.textarea {
  font-family: monospace;
  font-size: 15px;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
