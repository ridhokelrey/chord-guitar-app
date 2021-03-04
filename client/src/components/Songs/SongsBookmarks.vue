<template>
  <panel title="Bookmarks" class="mx-20 my-15">
    <v-data-table
      :headers="headers"
      :sort-desc="true"
      :sort-by="['createdAt']"
      :items-per-page="5"
      :items="bookmarks">
      <template v-slot:item="{item}">
        <td class="text-right">
          {{item.title}}
        </td>
        <td class="text-right">
          {{item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
          align: 'end'
        },
        {
          text: 'Artist',
          value: 'artist',
          align: 'end'
        }
      ],
      bookmarks: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = await BookmarksService.index().data
    }
  }
}
</script>

<style scoped>
</style>
