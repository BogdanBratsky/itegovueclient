import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ItegoHeader from './components/ItegoHeader.vue'
import ItegoFooter from './components/ItegoFooter.vue'
import './normalize.css'
import './fonts.css'
import './variables.scss'


const app = createApp(App)

app.component('itego-header', ItegoHeader)
app.component('itego-footer', ItegoFooter)

app.use(store).use(router).mount('#app')