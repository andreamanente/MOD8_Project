<template>
  <aside class="fixed overflow-hidden h-auto rounded-lg z-10">
    <div class="h-full relative bg-gray-300">
      <h1 class="flex justify-between items-center p-3 bg-gray-500 border-b-1 border-white font-size-26">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"/>
        </svg>
        <button class="text-lg text-gray-600 font-bold" @click="loginmenu">&times;</button>
      </h1>

      <!-- Menu des catégories -->
      <div class="p-4">
        <ul class="space-y-4">
          <!-- Compte -->
          <li>
            <button class="w-full text-left text-white hover:bg-gray-400 p-2 rounded-md">
              Mon compte
            </button>
          </li>

          <!-- Se déconnecter -->
          <li>
            <button class="w-full text-left text-white hover:bg-gray-400 p-2 rounded-md">
              Se déconnecter
            </button>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['loginmenu']
}
</script>
