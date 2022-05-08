import dayjs from "dayjs";
import dayjsUTC from "dayjs/plugin/utc";
import dayjsTimezone from "dayjs/plugin/timezone";

dayjs.extend(dayjsUTC);
dayjs.extend(dayjsTimezone);

class DateUtils {

    static parse(dateAsString) {
        return dayjs(dateAsString);
    }

    static getTimeZone() {
        return dayjs.tz.guess();
    }

    static getNow() {
        return dayjs.tz(dayjs(), DateUtils.getTimeZone());
    }

    static getTimeRemaining(endtime) {

        const now = DateUtils.getNow();

        const total = endtime.valueOf() - now.valueOf();
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    static getTimeRemainingAsString(date) {

        const t = DateUtils.getTimeRemaining(date);

        if (t.total <= 0) {
            return "0 days 0h 0m 00s";
        }

        return `${t.days} days ${t.hours}h ${t.minutes}m ${("0" + t.seconds).slice(-2)}s`;
    }
}

export default DateUtils;
