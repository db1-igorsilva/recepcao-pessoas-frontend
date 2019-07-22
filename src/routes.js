import Cadastro from '../views/cadastro/Cadastro.view.vue';
import Consulta from '../views/consulta/Consulta.view.vue';
export const routes = [
    { path: '/consulta', component: Consulta },
    { path: '/cadastro', component: Cadastro },
    { path: '*', component: Consulta }
];