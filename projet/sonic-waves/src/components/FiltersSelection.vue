<template>
  <aside class="overflow-hidden h-auto rounded-lg z-10 w-2/6">
    <div class="h-full relative bg-gray-300">
      <h1 class="flex justify-between items-center p-3 bg-gray-500 border-b-1 border-white font-size-26">
        Filters
        <button class="text-gray-600 font-bold" @click="filters">&times;</button>
      </h1>

      <!-- Menu des catégories -->
      <div class="p-4">
        <ul class="space-y-4">
          <li>
            <button @click="toggleDropdown('state')" class="flex justify-between w-full bg-gray-400 p-2 rounded">
              State <span>{{ dropdowns.state ? '▲' : '▼' }}</span>
            </button>
            <ul v-if="dropdowns.state" class="pl-4 mt-2 space-y-2">
              <li v-for="option in stateOption" :key="option.value">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" v-model="selectedState" :value="option.value" />
                  <span>{{ option.label }}</span>
                </label>
              </li>
            </ul>
          </li>
          <li>
            <button @click="toggleDropdown('genre')" class="flex justify-between w-full bg-gray-400 p-2 rounded">
              Genre <span>{{ dropdowns.genre ? '▲' : '▼' }}</span>
            </button>
            <ul v-if="dropdowns.genre" class="pl-4 mt-2 space-y-2">
              <li v-for="option in genreOptions" :key="option.value">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" v-model="selectedGenre" :value="option.value" />
                  <span>{{ option.label }}</span>
                </label>
              </li>
            </ul>
          </li>
          <li>
            <button @click="toggleDropdown('mood')" class="flex justify-between w-full bg-gray-400 p-2 rounded">
              Mood <span>{{ dropdowns.mood ? '▲' : '▼' }}</span>
            </button>
            <ul v-if="dropdowns.mood" class="pl-4 mt-2 space-y-2">
              <li v-for="option in moodOptions" :key="option.value">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" v-model="selectedMoods" :value="option.value" />
                  <span>{{ option.label }}</span>
                </label>
              </li>
            </ul>
          </li>
          <li>
            <button @click="toggleDropdown('bpm')" class="flex justify-between w-full bg-gray-400 p-2 rounded">
              BPM <span>{{ dropdowns.bpm ? '▲' : '▼' }}</span>
            </button>
            <ul v-if="dropdowns.bpm" class="pl-4 mt-2 space-y-2">
              <li v-for="option in bpmOptions" :key="option.value">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" v-model="selectedBPM" :value="option.value" />
                  <span>{{ option.label }}</span>
                </label>
              </li>
            </ul>
          </li>
          <li>
            <button @click="toggleDropdown('popularity')" class="flex justify-between w-full bg-gray-400 p-2 rounded">
              Popularity <span>{{ dropdowns.popularity ? '▲' : '▼' }}</span>
            </button>
            <ul v-if="dropdowns.popularity" class="pl-4 mt-2 space-y-2">
              <li v-for="option in popularityOption" :key="option.value">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" v-model="selectedPopularity" :value="option.value" />
                  <span>{{ option.label }}</span>
                </label>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['filters'],
  data () {
    return {
      dropdowns: {
        state: false,
        genre: false,
        mood: false,
        bpm: false,
        popularity: false
      },
      stateOption: [
        { label: 'Listened', value: 'listened' },
        { label: 'Listening', value: 'Listening' },
        { label: 'To listen', value: 'toListen' }
      ],
      moodOptions: [
        { label: 'Aggressive', value: 'aggressive' },
        { label: 'Dark', value: 'dark' },
        { label: 'Dramatic', value: 'dramatic' },
        { label: 'Emotional', value: 'emotional' },
        { label: 'Energetic', value: 'energetic' },
        { label: 'Exhuberant', value: 'exhuberant' },
        { label: 'Introspective', value: 'introspective' },
        { label: 'Joyous', value: 'joyous' },
        { label: 'Melancholic', value: 'melancholic' },
        { label: 'Nostalgic', value: 'nostalgic' },
        { label: 'Playful', value: 'playful' },
        { label: 'Romantic', value: 'romantic' },
        { label: 'Sad', value: 'sad' },
        { label: 'Seductive', value: 'seductive' },
        { label: 'Uplifting', value: 'uplifting' },
        { label: 'Upbeat', value: 'upbeat' }
      ],
      genreOptions: [
        { label: 'Country', value: 'country' },
        { label: 'Disco', value: 'disco' },
        { label: 'Electronic', value: 'electronic' },
        { label: 'Hip hop', value: 'hip_hop' },
        { label: 'Pop', value: 'pop' },
        { label: 'R&B', value: 'rnb' },
        { label: 'Reggaeton', value: 'reggaeton' },
        { label: 'Rock', value: 'rock' },
        { label: 'Soul', value: 'soul' },
        { label: 'Trap', value: 'trap' }
      ],
      bpmOptions: [
        { label: 'Slow (70-90 BPM)', value: '70-90' },
        { label: 'Moderate (95-120 BPM)', value: '95-120' },
        { label: 'Upbeat (125-140 BPM)', value: '125-140' },
        { label: 'Fast (160-180 BPM)', value: '160-180' }
      ],
      popularityOption: [
        { label: 'All time', value: 'all_time' },
        { label: 'Day', value: 'day' },
        { label: 'Month', value: 'month' },
        { label: 'Week', value: 'week' },
        { label: 'Year', value: 'year' }
      ],
      selectedState: [],
      selectedMoods: [],
      selectedPopularity: [],
      selectedGenre: [],
      selectedBPM: []
    }
  },
  methods: {
    toggleDropdown (category) {
      this.dropdowns[category] = !this.dropdowns[category]
    }
  }
}
</script>
