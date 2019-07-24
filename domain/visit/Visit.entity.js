export default class Visit {
    constructor(id, date, presentationStartTime, presentationEndTime, guest, welcomeText) {
        this.id = id;
        this.date = date;
        this.presentationStartTime = presentationStartTime;
        this.presentationEndTime = presentationEndTime;
        this.guest = guest;
        this.welcomeText = welcomeText;
    }
}