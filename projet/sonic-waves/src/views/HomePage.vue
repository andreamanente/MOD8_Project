<template>
  <div>
    <div>
      <div class="ml-[10%] mr-[10%]">
        <h1 class="text-4xl font-bold p-2 mt-10">Sonic Waves</h1>
        <h3 class="text-2xl font-semibold">Your Music, Perfectly Organized</h3>
        <p class="text-base text-justify flex-wrap leading-relaxed mb-4">Record, track, and plan your music listening with ease.</p>

        <!-- Bouton pour afficher/masquer le Login -->
        <button
          type="button"
          class="ml-4 text-white bg-customBlue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="toggleLogin">
          Get started
        </button>
        <Login v-if="showLogin" @close="toggleLogin"/>
      </div>

      <div class="flex justify-center items-center h-screen">
        <img src="@/assets/pictures/acceuil.png" alt="acceuil_picture" class="w-[80%]">
      </div>
    </div>
  </div>

  <div class="ml-[10%] mr-[10%]">
    <h3 class="text-2xl font-semibold">About Sonic Waves</h3>
    <p class="text-base text-justify flex-wrap leading-relaxed">Sonic Waves allows you to keep track of the songs and albums you've listened to, follow your current plays, and create a list of tracks to discover. </p>
  </div>

  <!-- Robin -->
  <div class="flex justify-center gap-6 p-6">
    <div v-for="(item, index) in items" :key="index" class="card">
      <img :src="item.image" :alt="item.title" class="card-image" />
      <p class="card-title">{{ item.title }}</p>
    </div>
  </div>>
</template>

<script>
import Login from '@/components/LogIn.vue'

export default {
  components: {
    Login
  },
  props: ['toggleLogin', 'showlogin']
}
</script>

<script setup>
const items = [
  { image: require('@/assets/pictures/songs.png'), title: 'Songs' },
  { image: require('@/assets/pictures/albums.png'), title: 'Albums' },
  { image: require('@/assets/pictures/genres.png'), title: 'Music genres' }
]
</script>

<style scoped>
.card {
  @apply w-48 h-48 rounded-2xl overflow-hidden shadow-lg flex flex-col items-center text-center bg-white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.card-image {
  @apply w-full h-4/5 object-cover;
}

.card-title {
  @apply text-sm font-semibold p-2;
}
</style>
