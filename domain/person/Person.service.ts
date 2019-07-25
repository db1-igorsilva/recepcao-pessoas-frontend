import { http } from '../../src/main.js';

export default {
    
    save:(person) => {
        return http.post('person/post', person);
    },
    getAll:() => {
        return http.get('person/getAll');
    },
    getOne:(person) => {
        return http.get('person/getOne/' + person.id);
    },
    delete:(person) => {
        return http.delete('person' + person.id);
    }
    
}