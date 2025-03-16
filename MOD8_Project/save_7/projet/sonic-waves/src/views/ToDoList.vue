<template>
  <div class="ml-[10%] mr-[10%]">
    <div>
      <h1 class="text-4xl font-bold p-2 mt-10">Your To-Do List</h1>
      <p class="text-base text-justify flex-wrap leading-relaxed mb-4">Organize your favorite songs based on your current tastes.</p>

      <button type="button" class="text-white bg-customBlue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="toggletdfilters">
        Add filters
      </button>
      <FiltersTDSelection v-if="showtdfilters" :toggletdfilt="toggletdfilters" @close="toggletdfilters"/>
    </div>

    <!-- Vérification si ToDoList n'est pas vide -->
    <div v-if="ToDoList.length > 0">
      <div class="relative overflow-hidden">
        <div class="carousel-container w-[80%] flex transition-transform duration-500" :style="carouselStyle">

          <!-- Boucle sur ToDoList et affichage des chansons correspondantes -->
          <div v-for="(index) in ToDoList" :key="'song-' + index" class="item w-full flex-shrink-0">
            <div class="w-full bg-gray-300 border border-gray-500 rounded-lg shadow mx-auto transform scale-y-75">
              <img class="p-8 rounded-t-lg" :src="list_songs[index].photo" :alt="list_songs[index].Title"/>
              <div class="px-5 pb-5 text-center">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 mb-2">{{ list_songs[index].Title }}</h5>
                <select :id="'song-selection-' + index" class="w-full max-w-xs p-2 border border-gray-300 rounded-lg">
                  <option :value="'Option 1-' + index">Listened</option>
                  <option :value="'Option 2-' + index">Listening</option>
                  <option :value="'Option 3-' + index">To listen</option>
                </select>
                <button class="text-gray-600 font-bold" @click="deletesong(index)" color="red">&times;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Message si ToDoList est vide -->
    <div v-else>
      <p>ToDo List empty</p>
    </div>

    <button @click="prevSlide" class="mouvement_button absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
      Prev
    </button>
    <button @click="nextSlide" class="mouvement_button absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
      Next
    </button>
  </div>
</template>

<script>
import song from '@/songs.json'
import FiltersTDSelection from '@/components/FiltersTDSelection.vue'

export default {
  components: {
    FiltersTDSelection
  },
  props: ['toggletdfilters', 'showtdfilters', 'ToDoList', 'deletesong'],
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
      this.currentIndex = (this.currentIndex + 1) % this.ToDoList.length
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
