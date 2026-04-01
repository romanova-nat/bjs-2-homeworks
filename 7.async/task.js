class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    };

    addClock(timeToAdd, action) {

        if (!timeToAdd || !action) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(alarm => alarm.time === timeToAdd)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            callback: action,
            time: timeToAdd,
            canCall: true
        });
    }

    removeClock(timeDelite) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != timeDelite);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId != null) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
         }, 1000);
    }

stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
}

resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
}

clearAlarms() {
    this.stop();
    this.alarmCollection = [];
}
}

