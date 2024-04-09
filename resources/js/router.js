import { createRouter, createWebHistory } from "vue-router"
import About from './components/About.vue'
import Contacts from "./components/Contacts.vue"

const routes = [
    {
        path: '/about', component: About, name: 'about'
    },
    {
        path: '/contacts', component: Contacts
    },
    {
        path: '/people',
        component: () => import('./components/Person/Index.vue'),
        name: 'person.index'
    },
    {
        path: '/people/create',
        component: () => import('./components/Person/Create.vue'),
        name: 'person.create'
    },
    {
        path: '/people/:id/edit',
        component: () => import('./components/Person/Edit.vue'),
        name: 'person.edit'
    },
    {
        path: '/people/:id',
        component: () => import('./components/Person/Show.vue'),
        name: 'person.show'
    },
]

const router = createRouter({
    history: createWebHistory(), // метод для имитации перехода по урлам в строке браузера.
    routes,
})

export default router;