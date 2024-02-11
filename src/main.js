import './assets/main.css'



import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)

app.mount('#app')
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
