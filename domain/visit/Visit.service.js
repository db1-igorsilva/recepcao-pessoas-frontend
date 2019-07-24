import { http } from '../../src/main.js';

export default {
    
    save:(visit) => {
        return http.post('post', visit);
    },
    getAll:() => {
        return http.get('getAll');
    },
    find:(id) => {
        return this._resource
            .get({ id })
            .then(getResponse => getResponse.json());
    },
    delete:(visit) => {
        return http.delete(visit.id);
    }
}