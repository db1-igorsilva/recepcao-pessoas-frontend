import { http } from '../../src/main.js';

export default {
    
    save:(visit) => {
        if(visit.id) {
            return http.post('post', visit);
        }
        return http.put(visit.id, visit);
    },
    getAll:() => {
        return http.get('getAll');
    },
    find:(id) => {
        return http.get('getOne/' + id);
    },
    delete:(visit) => {
        return http.delete(visit.id);
    }
}