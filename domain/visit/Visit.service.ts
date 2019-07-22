export default class VisitService {
    _resource;
    constructor(resource) {
        this._resource = resource();
    }
}