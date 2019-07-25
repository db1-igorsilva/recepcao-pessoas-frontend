import { http } from '../../src/main.js';
import VisitPerson from './VisitPerson.entity.js';

export default {
    
    save:(person, visit) => {
        return http.post('visitPerson/post', new VisitPerson(person, visit));
    },
    getAll:() => {
        return http.get('visitPerson/getAll');
    },
    delete:(visitPerson) => {
        return http.delete('visitPerson/' + visitPerson.id);
    }
    
}