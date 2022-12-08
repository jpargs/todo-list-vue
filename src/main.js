import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash)
library.add(faPencil)

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");

