/**
 * инициализация VUE приложения
 */
import './bootstrap';
import { createApp } from "vue"
import Index from "./components/Index.vue"
import Router from "./router"

createApp(Index)
    .use(Router)
    .mount('#app');
