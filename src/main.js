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

//Global properties
app.config.globalProperties.$cart = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 1
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 2
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        quantity: 1
    }
]


app.mount('#app')
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
