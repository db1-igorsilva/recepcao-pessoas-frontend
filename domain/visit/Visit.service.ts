import { http } from '../../src/main.js';

export default {
    
    save:(visit) => {
        if(!visit.guest) {
            alert('Every visit needs a Guest.');
            throw new Error('Every visit needs a guest.');
        }
        if(!visit.welcomeText) {
            alert('Every visit needs to have a W3lcome Text.');
            throw new Error('Every visit needs to have a w3lcome text.');
        }
        if(!visit.date) {
            alert('Every visit needs a Date to come over.');
            throw new Error('Every visit needs a Date ot come over.');
        }
        if(!visit.id) {
            return http.post('visit/post', visit);
        }
        return http.put('visit/' + visit.id, visit);
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