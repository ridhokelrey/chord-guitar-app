<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :width="500"
      :height="255">
    </youtube>
  </panel>
</template>

<script>
import Panel from '../Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
