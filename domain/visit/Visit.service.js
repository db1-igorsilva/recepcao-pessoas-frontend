import { http } from '../../src/main.js';

export default {
    
    save:(visit) => {
        if (visit._id) {
            return this._resource
                .upadte({ id: visit._id }, visit);
        } else {
            return this._resource
                .save(visit);
        }
    },
    getAll:() => {
        return http.get('getAll');
    },
    find:(id) => {
        return this._resource
            .get({ id })
            .then(getResponse => getResponse.json());
    },
    delete:(id) => {
        return this._resource
            .delete({ id })
            .then(null, error => {
                console.log(error);
                throw new Error('Visit can\'t be removed.');
            });
    }
}