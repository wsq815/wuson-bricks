import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import testPlugin from './plugins/test.plugin'

const app = createApp(App)
app.use(store).use(router).use(testPlugin)
app.mount('#app')
