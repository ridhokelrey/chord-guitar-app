<template>
  <panel title="Recently View Songs" class="mx-20 my-15">
    <v-data-table
      class="text-right"
      :headers="headers"
      :sort-by="['createdAt']"
      :sort-desc="true"
      :items-per-page="5"
      :items="histories">
      <template v-slot:item="{item}">
        <td class="text-right">
          {{item.title}}
        </td>
        <td class="text-right">
          {{item.artist}}
        </td>
        <tr></tr>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'
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
      histories: []
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
      this.histories = await SongHistoryService.index().data
    }
  }
}
</script>

<style scoped>
.v-data-table-header {
  text-align: justify;
}
</style>
