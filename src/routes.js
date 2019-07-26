import NewVisit from '../views/cadastro/Cadastro.view.vue';
import Visits from '../views/consulta/Consulta.view.vue';
export const routes = [
    { path: '/', component: Visits, name: 'visits' },
    { path: '/new_visit', component: NewVisit, name: 'new_visit' },
    { path: '/new_visit/:id', component: NewVisit, name: 'update' },
    { path: '*', component: Visits, name: 'visits' }
];