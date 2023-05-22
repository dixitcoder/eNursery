import AppVue from '@/App.vue'
import login  from '../components/login.vue'
import SignUp from '../components/SignUp.vue'
import { createrrouter, createrhistory  } from 'vue-router'

const router =[
    {
        name:'login',
        component:login,
        path:'/login'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/SignUp'
    }
]

const routes =createrrouter ({
    history:createrhistory(),
    router
})
export default routes
AppVue.use(router)
//{
//     data() {
//         return {
            
//         }
//     },
//     component:{
//         routes
//     }
// }