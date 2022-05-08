
import { useState, useEffect } from "react";

import DateUtils from "../lib/date-utils";

function Deadline({ ...deadline }) {

    const parsedDeadline = DateUtils.parse(deadline.abstract_deadline);

    const [countDown, setCountDown] = useState(DateUtils.getTimeRemainingAsString(parsedDeadline));

    const tags = deadline.tags.map((t, i) => {
        return <span key={i} className="badge bg-primary me-2">{t}</span>;
    });

    useEffect(() => {

        const interval = setInterval(() => {

            const html = DateUtils.getTimeRemainingAsString(parsedDeadline);

            setCountDown(html);

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="card card-body container pb-0 mb-4">
            <div className="row">
                <div className="col-6">
                    <h3 className="fw-bold pb-2">{deadline.title}</h3>
                    <p>{deadline.when}</p>
                    <p>{deadline.where}</p>
                </div>
                <div className="col-6 text-end">
                    <h3 className="fw-bold pb-2">{countDown}</h3>
                    <p className="">for abstract submission</p>
                    <p><a href="#">Add to Calendar</a></p>

                </div>
            </div>
            <p className="text-right">
                        {tags}
                    </p>
        </div>
    );
}

export default Deadline;
