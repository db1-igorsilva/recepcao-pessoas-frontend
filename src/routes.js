import Cadastro from '../views/cadastro/Cadastro.view.vue';
import Consulta from '../views/consulta/Consulta.view.vue';
export const routes = [
    { path: '/consulta', component: Consulta, name: 'consulta' },
    { path: '/cadastro/:id', component: Cadastro, name: 'cadastro' },
    { path: '*', component: Consulta, name: 'consulta' }
];