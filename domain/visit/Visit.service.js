import { http } from '../../src/main.js';

export default {
    
    save:(visit) => {
        return http.post('post', visit);
    },
    getAll:() => {
        return http.get('getAll');
    },
    update:(visit) => {
        return http.put(visit.id, visit);
    },
    delete:(visit) => {
        return http.delete(visit.id);
    }
}