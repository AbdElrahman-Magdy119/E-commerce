import { createApp } from 'vue'


import MainComponent from './MainComponent.vue';
import router from './routers/index';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const app = createApp(MainComponent);
app.use(router);
app.mount('#app')