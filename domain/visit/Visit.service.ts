export default class VisitService {
    _resource;
    constructor(resource) {
        this._resource = resource();
    }
    save(visit) {
        if (visit._id) {
            return this._resource
                .upadte({ id: visit._id }, visit);
        } else {
            return this._resource
                .save(visit);
        }
    }
    getAll() {
        return this._resource
            .query()
            .then(getResponse => getResponse.json(),
            error => {
                console.log(error);
                throw new Error('NullPointerException');
            });
    }
}