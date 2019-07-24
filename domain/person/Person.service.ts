import { http } from '../../src/main.js';

export default {
    
    save:(person) => {
        return http.post('/person/post', person);
    },
    getAll:() => {
        return http.get('/person/getAll');
    },
    delete:(person) => {
        return http.delete(person.id);
    }
    
}