<template>
  <div class="relative">
    <!-- Conteneur qui permet de positionner l'élément indépendamment du header -->
    <div class="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/8 z-30 mt-24">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96 left-0 transform -translate-x-1/2">
        <button class="text-gray-600 font-bold" @click="login">&times;</button>

        <div class="text-center mb-6">
          <img src="@/assets/pictures/clear_logo.png" alt="acceuil_picture" class="w-50 mx-auto mb-4">
          <div v-if="!showSignUp">
            <h4 class="text-s font-semibold">
              Don't have an account ?
              <div class="flex justify-center">
                <button class="py-2 px-3 hover:text-blue-400 text-blue-600 md:p-0 text-s" @click="toggleSignUp">Sign in</button>
              </div>
            </h4>
          </div>
          <div v-if="showSignUp">
            <h4 class="text-s font-semibold">
              Already have an account ?
              <div class="flex justify-center">
                <button class="py-2 px-3 hover:text-blue-400 text-blue-600 md:p-0 text-s" @click="toggleSignUp">Log in</button>
              </div>
            </h4>
          </div>
        </div>

        <form>
          <!-- New form de signup -->
          <div v-if="showSignUp">
                        <!-- Champ Prenom -->
            <div class="mb-4">
              <label for="prenom" class="block text-sm font-medium text-gray-700">Surname</label>
              <input
                type="text"
                id="prenom"
                class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your surname"/>
            </div>

            <!-- Champ Nom -->
            <div class="mb-4">
              <label for="nom" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="nom"
                class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"/>
            </div>
          </div>

            <!-- Champ Email -->
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"/>
            </div>

            <!-- Champ Mot de Passe -->
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                id="password"
                class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"/>
                <h4 class="text-s font-semibold">
                <div v-if="!showSignUp">
                  <button class="py-2 px-3 hover:text-blue-400 text-blue-600 md:p-0 text-s" @click="signup">
                  Reset password
                  </button>
                </div>
              </h4>
            </div>

          <!-- Bouton de Connexion -->
          <div v-if="!showSignUp">
            <button type="button" class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Log in
            </button>
          </div>
          <div v-if="showSignUp">
            <button type="button" class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['login'],
  data () {
    return {
      showSignUp: false
    }
  },
  methods: {
    toggleSignUp () {
      this.showSignUp = !this.showSignUp
    }
  }
}
</script>
