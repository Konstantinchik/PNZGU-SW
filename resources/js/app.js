import router from "./routes";
import i18n from "./i18n";

require('./bootstrap');

import { createApp } from 'vue';
import App from './App.vue';
import {FontAwesomeIcon} from "./fontawesome";

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(i18n);
app.mount('#app');
