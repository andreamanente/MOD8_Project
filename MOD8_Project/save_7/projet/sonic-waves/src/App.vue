<template>
  <div class="max-w-screen-xl mx-auto">
    <nav class="border-gray-200 bg-gray-900">
      <div class="flex items-center justify-between mx-auto p-4">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="@/assets/pictures/dark_logo.png" alt="logo Sonic Waves" class="w-16 ml-4">
        </div>

        <!-- Navigation -->
        <div class="flex items-center w-auto" id="navbar-user">
          <ul class="flex items-center font-medium p-4 md:p-0 md:space-x-8 md:space-y-0 rtl:space-x-reverse md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button type="button" class="mr-2 text-white" @click="toggleLoginMenu">tempo visuel</button>
              <LoginMenu
                v-if="showLoginMenu"
                :loginmenu="toggleLoginMenu"/>
            </li>
            <li>
              <router-link to="/" class="block py-2 px-3 text-white hover:text-blue-400 md:p-0">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/Suggestions" class="block py-2 px-3 text-white hover:text-blue-400 md:p-0">
                Suggestions
              </router-link>
            </li>
            <li>
              <router-link to="/ToDoList" class="block py-2 px-3 text-white hover:text-blue-400 md:p-0">
                To-Do List
              </router-link>
            </li>
            <li>
              <button type="button" class="ml-4 text-white bg-blue-700 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5" @click="toggleLogin">Log in</button>
              <Login
                  v-if="showLogin"
                  :login="toggleLogin"/>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>

  <router-view :showlogin="showLogin" :toggleLogin="toggleLogin"
              :showFilters="showFilters" :togglefilters="toggleFilters"
              :showtdfilters="showTDFilters" :toggletdfilters="toggleTDFilters"
              :ToDoList="ToDoList" :addtdlist="addTDList" :deletesong="deleteSong"/>
  <MainFooter/>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import LoginMenu from '@/components/LoginMenu.vue'
import Login from '@/components/LogIn.vue'
import song from './songs.json'

export default {
  components: {
    LoginMenu,
    Login,
    MainFooter
  },
  data () {
    return {
      list_songs: song,
      showLoginMenu: false,
      showLogin: false,
      showFilters: false,
      showTDFilters: false,
      ToDoList: []
    }
  },
  methods: {
    toggleLoginMenu () {
      this.showLoginMenu = !this.showLoginMenu
    },
    toggleLogin () {
      this.showLogin = !this.showLogin
    },
    toggleFilters () {
      this.showFilters = !this.showFilters
    },
    toggleTDFilters () {
      this.showTDFilters = !this.showTDFilters
    },

    addTDList (index) {
      console.log('adding index' + index + '\n')
      this.ToDoList.push(index)
      this.list_songs[index].Added = true
    },
    deleteSong (index) {
      console.log('Attempting to delete song at index:', index)
      if (this.list_songs[index]) {
        // Si la chanson existe à cet index, réinitialisez la propriété 'Added'
        this.list_songs[index].Added = false

        // Suppression de l'élément dans ToDoList
        const indexInToDoList = this.ToDoList.indexOf(index)
        if (indexInToDoList !== -1) {
          this.ToDoList.splice(indexInToDoList, 1)
        }
      } else {
        console.error(`No song found at index ${index}`)
      }
    }
  },
  watch: {
    $route () {
      this.showFilters = false
      this.showTDFilters = false
    }
  }
}
</script>
