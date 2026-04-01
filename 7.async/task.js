class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    };

    addClock(timeToAdd, action) {

        // регулярное выражение на проверку формата времени hh:mm, вернет true / false
        // let regexp = /^([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
        // let result = regexp.test(timeToAdd);


        if (timeToAdd === null || action === null) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(i => i.time === timeToAdd)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            callback: action,
            time: timeToAdd,
            canCall: true
        });
    }

    removeClock(timeDelite) {
        this.alarmCollection = this.alarmCollection.filter(i => i.time != timeDelite);
    }

    getCurrentFormattedTime() {
        return String((new Date().getHours()) + ":" + (new Date().getMinutes()));
    }

    start() {
        if (this.intervalId) {
           return;
        } 

        let alarmStart = () => {
            if (this.alarmCollection.forEach(i => i.time === this.getCurrentFormattedTime() && i.canCall === true)) {
                i.canCall = false;
                i.callback;
            }
        }
        this.intervalId = setInterval(alarmStart, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(i => i.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
