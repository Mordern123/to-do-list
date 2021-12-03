import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import Todolist from './Todolist.vue'

createApp(Todolist).use(store).use(router).mount('#app')
