import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ToDoList from '@/views/ToDoList.vue'
import Suggestions from '@/views/SuggestionsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/ToDoList',
    name: 'todolist',
    component: ToDoList
  },
  {
    path: '/Suggestions',
    name: 'suggestions',
    component: Suggestions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
