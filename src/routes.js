import Cadastro from '../views/cadastro/Cadastro.view.vue';
import Consulta from '../views/consulta/Consulta.view.vue';
export const routes = [
    { path: '/', component: Consulta, name: 'visits' },
    { path: '/new_visit', component: Cadastro, name: 'new_visit' },
    { path: '/new_visit/:id', component: Cadastro, name: 'update' },
    { path: '*', component: Consulta, name: 'visits' }
];