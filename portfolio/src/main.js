import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import VueObserveVisibility from 'vue-observe-visibility'


const app = createApp(App).use(VueObserveVisibility)
app.mount('#app')