import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/cine", component: CineComponent},
    {path: "/musica", component: MusicaComponent},
]

//creamos una variable para el router indicando el tipo de navegacion y las rutas
const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})

export default router