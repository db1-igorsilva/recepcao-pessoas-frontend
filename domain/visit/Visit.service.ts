import { http } from '../../src/main.js';

export default {
    
    save:(visit) => {
        if(!visit.id) {
            return http.post('visit/post', visit);
        }
        return http.put(visit.id, visit);
    },
    getAll:() => {
        return http.get('visit/getAll');
    },
    find:(id) => {
        return http.get('visit/getOne/' + id);
    },
    delete:(visit) => {
        return http.delete('visit/' + visit.id);
    }
    
}