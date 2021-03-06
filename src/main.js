import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bulma/css/bulma.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faLock, 
    faTachometerAlt, 
    faHistory, faBars,
    faPlus, faPaperPlane, 
    faStickyNote, 
    faBullseye, 
    faUserCircle, 
    faUsers,
    faPager,
    faExternalLinkSquareAlt,
    faMinus,
    faTimes,
    faTrashAlt,
    faAlignLeft,
    faImages,
    faVideo,
    faThumbsUp,
    faComments,
    faShare,
    faSortAmountDownAlt,
    faSortAmountDown,
    faArrowsAltV,
    faUserSecret,
    faUserCog,
    faPowerOff,
    faKey,
    faCog,
    faUser,
    faCheck,
} 
from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)
library.add(
    faLock, 
    faTachometerAlt, 
    faHistory, faBars, 
    faPlus, 
    faPaperPlane, 
    faStickyNote, 
    faBullseye, 
    faUserCircle, 
    faUsers, 
    faPager, 
    faExternalLinkSquareAlt, 
    faMinus, 
    faTimes, 
    faTrashAlt,
    faAlignLeft,
    faImages,
    faVideo,
    faThumbsUp,
    faComments,
    faShare,
    faSortAmountDownAlt,
    faSortAmountDown,
    faArrowsAltV,
    faUserSecret,
    faUserCog,
    faPowerOff,
    faKey,
    faCog,
    faUser,
    faCheck,
    )
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({router, render: h => h(App),}).$mount('#app')