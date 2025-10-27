import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';
import DirectivasComponent from './components/DirectivasComponent.vue';
import ParImpar from './components/ParImpar.vue';
import PropiedadConmutada from './components/PropiedadConmutada.vue';
import MetodosFilters from './components/MetodosFilters.vue';
import { createRouter, createWebHistory } from 'vue-router';

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/cine", component: CineComponent},
    {path: "/musica", component: MusicaComponent},
    {path: "/ciclovida", component: CicloVida },
    {path: "/directivas", component: DirectivasComponent },
    {path: "/parimpar", component: ParImpar },
    {path: "/conmutada", component: PropiedadConmutada },
    {path: "/filters", component: MetodosFilters }
]

//creamos una variable para el router indicando el tipo de navegacion y las rutas
const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})

export default router