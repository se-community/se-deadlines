import dayjs from "dayjs";
import dayjsUTC from "dayjs/plugin/utc";
import dayjsTimezone from "dayjs/plugin/timezone";
import dayjsIsSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(dayjsUTC);
dayjs.extend(dayjsTimezone);
dayjs.extend(dayjsIsSameOrAfter);

class DateUtils {

    static parse(dateAsString) {

        if (dateAsString) {
            return dayjs(dateAsString);
        }

        return null;
    }

    static getTimeZone() {
        return dayjs.tz.guess();
    }

    static getNow() {
        return dayjs.tz(dayjs(), DateUtils.getTimeZone());
    }

    static isDue(date) {
        return DateUtils.getNow().isSameOrAfter(date);
    }

    static getTimeRemaining(endtime) {

        const now = DateUtils.getNow();

        const total = endtime.valueOf() - now.valueOf();
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        let str = "Closed";

        if (total > 0) {
            str = `${days} days ${hours}h ${minutes}m ${("0" + seconds).slice(-2)}s`;
        }

        return {
            total,
            days,
            hours,
            minutes,
            seconds,
            str
        };
    }
}

export default DateUtils;
