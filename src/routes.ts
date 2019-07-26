import NewVisit from '../views/new-visit/NewVisit.view.vue';
import Visits from '../views/visits/Visits.view.vue';
export const routes = [
    { path: '/', component: Visits, name: 'visits' },
    { path: '/new_visit', component: NewVisit, name: 'new_visit' },
    { path: '/new_visit/:id', component: NewVisit, name: 'update' },
    { path: '*', component: Visits, name: 'visits' }
];