
import { useState, useEffect } from "react";

import { Card, Container, Row, Col, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";

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
            <div className={`me-auto ${mainTrack}`}>{track.title}</div>
            <div className="text-end">
                <p className="tiny mb-0 text-muted">Full Paper</p>
                <span className={`${isClosed}`}>{countDown.str}</span>
            </div>
        </ListGroupItem>
    );
}

function Conference({ ...conference }) {

    const tracksAsHTML = conference.tracks.map((track, i) => {
        return <Track key={i} {...track} />;
    });

    const tagsAsHTML = conference.tags.map((tag, i) => {
        return <span class="mb-2 badge border fw-normal text-dark me-2" key={i}>{tag}</span>;
    });

    return (
        <Card className="mb-4 border-0 rounded-bottom">
            <Card.Body className="pb-1">
                <Container>
                    <Row>
                        <Col md="8">
                            <h3 className="mb-2 fw-bold">{conference.title}</h3>
                            <p className="mb-2 small">{conference.description}</p>
                            <p className="mb-2 small text-muted">{conference.when}</p>
                            <p className="mb-2 small"><a target="_blank" href={`http://maps.google.com/?q=${conference.where}`}>{conference.where}</a></p>

                            {tagsAsHTML}
                        </Col>
                        <Col md="4">
                            <Card>
                                <Card.Body className="text-center">
                                    <p className="text-muted small mb-1">Full Paper</p>
                                    <p className="fw-bold mb-1 text-primary">Research Track</p>
                                    <h4 className="fw-bold mb-1 ">90 days 12h 30m 15s</h4>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Accordion className="accordion-flush">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> See Tracks
                        {/* <button class="accordion-button collapsed text-light bg-info" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            See Tracks
                        </button> */}
                    </Accordion.Header>
                    <Accordion.Body className="py-0 px-0">
                        <ListGroup className="list-group-flush">
                            {tracksAsHTML}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card>
    );
}

export default Conference;
