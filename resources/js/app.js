/**
 * инициализация VUE приложения
 */
import './bootstrap';
import { createApp } from "vue"
import Index from "./components/Index.vue"
import Router from "./router"
import store from "./store/index";

createApp(Index)
    .use(Router)
    .use(store)
    .mount('#app');
