<template>
  <div class="ml-[10%] mr-[10%]">
    <div>
      <h1 class="text-4xl font-bold p-2 mt-10">Your To-Do List</h1>
      <p class="text-base text-justify flex-wrap leading-relaxed mb-4">Organize your favorite songs based on your current tastes.</p>

      <button type="button" class="text-white bg-customBlue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="toggleFilters">
        Add filters
      </button>
      <FiltersSelection v-if="showFilters" @close="toggleFilters"/>
    </div>

    <div class="relative overflow-hidden">
      <div class="carousel-container w-[80%] flex transition-transform duration-500" :style="carouselStyle">
        <div v-for="(song, i) in list_songs" :key="'original-' + i" class="item w-full flex-shrink-0">
          <div class="w-full bg-gray-300 border border-gray-500 rounded-lg shadow mx-auto transform scale-y-75">
            <img class="p-8 rounded-t-lg" :src="song.photo" :alt="song.Title"/>
            <div class="px-5 pb-5 text-center">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 mb-2">{{ song.Title }}</h5>
              <select :id="'song-selection-' + i" class="w-full max-w-xs p-2 border border-gray-300 rounded-lg">
                <option :value="'Option 1-' + i">Listened</option>
                <option :value="'Option 2-' + i">Listening</option>
                <option :value="'Option 3-' + i">To listen</option>
              </select>
            </div>
          </div>
        </div>
        <div v-for="(song, i) in list_songs" :key="'duplicate-' + i" class="item w-full flex-shrink-0">
          <div class="w-full bg-gray-300 border border-gray-500 rounded-lg shadow mx-auto transform scale-y-75">
            <img class="p-8 rounded-t-lg" :src="song.photo" :alt="song.Title"/>
            <div class="px-5 pb-5 text-center">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{{ song.Title }}</h5>
              <select :id="'song-selection-' + i" class="w-full max-w-xs p-2 border border-gray-300 rounded-lg">
                <option :value="'Option 1-' + i">Listened</option>
                <option :value="'Option 2-' + i">Listening</option>
                <option :value="'Option 3-' + i">To listen</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button @click="prevSlide" class="mouvement_button absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
        Prev
      </button>
      <button @click="nextSlide" class="mouvement_button absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
        Next
      </button>
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
  props: ['toggleFilters', 'showFilters'],
  data () {
    return {
      list_songs: song,
      currentIndex: 0,
      itemWidth: 240,
      isTransitioning: false
    }
  },
  computed: {
    carouselStyle () {
      return {
        transform: `translateX(-${this.currentIndex * this.itemWidth}px)`,
        transition: this.isTransitioning ? 'transform 0.5s ease' : 'none'
      }
    }
  },
  methods: {
    nextSlide () {
      if (this.currentIndex < this.list_songs.length) {
        this.currentIndex += 1
      } else {
        this.isTransitioning = false
        this.currentIndex = 0
        this.$nextTick(() => {
          this.isTransitioning = true
        })
      }
    },

    prevSlide () {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1
      } else {
        this.isTransitioning = false
        this.currentIndex = this.list_songs.length - 1
        this.$nextTick(() => {
          this.isTransitioning = true
        })
      }
    },

    autoSlide () {
      setInterval(() => {
        this.nextSlide()
      }, 3000)
    }
  },
  mounted () {
    this.autoSlide()
  }
}
</script>

<style scoped>
.carousel-container {
  display: flex;
  transition: transform 0.5s ease;
}

.item {
  flex-shrink: 0;
  width: 240px;
}

.mouvement_button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
}

.mouvement_button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
