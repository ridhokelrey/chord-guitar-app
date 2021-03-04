<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :width="500"
      :height="255"
      ref="youtube">
    </youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
