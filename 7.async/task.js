class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    };

    addClock(timeToAdd, action) {

        if (!timeToAdd || !action) {
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
        return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
    }

    start() {
        if (this.intervalId !== null) {
           return;
        } 

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(i => {
                if (i.time === this.getCurrentFormattedTime() && i.canCall) {
                    i.canCall = false;
                    i.callback();
                }
            });
        }, 1000);

        // let alarmStart = () => {
        //     if (this.alarmCollection.forEach(i => i.time === this.getCurrentFormattedTime() && i.canCall)) {
        //         i.canCall = false;
        //         i.callback();
        //     }
        // }
        // this.intervalId = setInterval(alarmStart, 1000);
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
