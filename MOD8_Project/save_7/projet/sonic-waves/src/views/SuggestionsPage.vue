<template>
  <div>
    <div class="ml-[10%] mr-[10%]">
      <h1 class="text-4xl font-bold p-2 mt-10">Suggestions</h1>
      <p class="text-base text-justify flex-wrap leading-relaxed mb-4">Looking for new music? Explore a curated selection of tracks tailored to your taste and discover your next favorite song!</p>
      <button type="button" class="text-white bg-customBlue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="togglefilters">
        Add filters
      </button>
      <FiltersSelection v-if="showFilters" :togglefilt="togglefilters" @close="togglefilters"/>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 px-4 lg:px-8">
    <div v-for="(song, i) in list_songs" :key="i" class="w-full bg-gray-400 border border-gray-500 rounded-lg shadow mx-auto transform scale-y-75">
      <img class="p-8 rounded-t-lg" :src="song.photo" :alt="song.Title"/>
      <div class="px-5 pb-5 text-center">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 mb-2">{{ song.Title }}</h5>

        <div v-if="!song.Added">
          <button @click="addtdlist(i)">
            <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
            </svg>
          </button>
        </div>
        <div v-else>
          <button @click="deletesong(i)">
            <svg class="w-6 h-6 text-green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
            </svg>
          </button>
          <p>
            added
          </p>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import song from '@/songs.json'
import FiltersSelection from '@/components/FiltersSelection.vue'

export default {
  components: {
    FiltersSelection
  },
  props: ['showFilters', 'togglefilters', 'ToDoList', 'addtdlist', 'deletesong', 'selectedList'],
  data () {
    return {
      list_songs: song
    }
  }
}
</script>
