import Cadastro from '../views/cadastro/Cadastro.view.vue';
import Consulta from '../views/consulta/Consulta.view.vue';
export const routes = [
    { path: '/', component: Consulta, name: 'consulta' },
    { path: '/cadastro', component: Cadastro, name: 'cadastro' },
    { path: '/cadastro/:id', component: Cadastro, name: 'altera' },
    { path: '*', component: Consulta, name: 'consulta' }
];