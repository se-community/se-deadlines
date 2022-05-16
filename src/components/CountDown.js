
import { useState, useEffect } from "react";

import DateUtils from "../utils/date-utils";

function CountDown({ datetime }) {

    const parsedDatetime = DateUtils.parse(datetime);

    const [countDown, setCountDown] = useState(DateUtils.getTimeRemaining(parsedDatetime));

    useEffect(() => {

        const interval = setInterval(() => {

            let time = DateUtils.getTimeRemaining(parsedDatetime);

            if (time.total <= 0) {
                clearInterval(interval);
            } else {
                setCountDown(time);
            }

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div>{countDown.str}</div>
    );
}

export default CountDown;
