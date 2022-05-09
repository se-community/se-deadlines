
import { useState, useEffect } from "react";

import { Card, Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

import DateUtils from "../lib/date-utils";

function Track({ ...track }) {

    const abstractDeadline = DateUtils.parse(track.abstract_deadline);
    const fullPaperDeadline = DateUtils.parse(track.full_paper_deadline);

    let selectDeadline = fullPaperDeadline;

    if (abstractDeadline && !DateUtils.isDue(abstractDeadline)) {
        selectDeadline = abstractDeadline;
    }

    const [countDown, setCountDown] = useState(DateUtils.getTimeRemaining(selectDeadline));

    useEffect(() => {

        const interval = setInterval(() => {

            let time = DateUtils.getTimeRemaining(selectDeadline);

            if (time.total <= 0) {
                clearInterval(interval);
            } else {
                setCountDown(time);
            }

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const mainTrack = track.main_track ? "fw-bold" : "";
    const isClosed = countDown.total <= 0 ? "text-danger" : "";

    return (
        <ListGroupItem className="d-flex justify-content-between align-items-center py-1">
            <div className="me-auto">
                <span className={mainTrack}>{track.title}</span>
            </div>
            <div className="text-end">
                <p className="small mb-0 pb-0 text-muted">Full Paper</p>
                <span className={`${isClosed}`}>{countDown.str}</span>
            </div>
        </ListGroupItem>
    );
}

function Conference({ ...conference }) {

    const tracksAsHTML = conference.tracks.map((track, i) => {
        return <Track key={i} {...track} />;
    });

    return (
        <Card className="mb-4">
            <Card.Body>
                <Container>
                    <Row>
                        <Col md="4">
                            <h3 className="mb-2 fw-bold">{conference.title}</h3>
                            <p className="mb-2">{conference.description}</p>
                            <p className="mb-2 text-muted">{conference.when}</p>
                            <p className="mb-2"><a href={`http://maps.google.com/?q=${conference.where}`}>{conference.where}</a></p>
                        </Col>
                        <Col md="8">
                            <Card>
                                <ListGroup className="list-group-flush">
                                    {tracksAsHTML}
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Conference;
