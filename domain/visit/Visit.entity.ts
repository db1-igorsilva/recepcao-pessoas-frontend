export default class Visit {
    id;
    date;
    start_time;
    end_time;
    guest;
    constructor(id, date, start_time, end_time, guest) {
        this.id = id;
        this.date = date;
        this.start_time = start_time;
        this.end_time = end_time;
        this.guest = guest;
    }
}