import { createApp} from 'vue'
import App from '@/App.vue'
import routes from './back-routes'

createApp(App).use(routes).mount('#app')