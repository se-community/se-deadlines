
import { useState, useEffect } from "react";

import Slider from "react-slick";

import { Card, Container, Row, Col, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";

import DateUtils from "../lib/date-utils";
import CountDown2 from "./CountDown";

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

    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <Card className="mb-4 border-0 rounded-bottom">
            <Card.Body className="">
                <Container>
                    <Row>
                        <Col md="4">
                            <h3 className="mb-2 fw-bold">{conference.title}</h3>
                            <p className="mb-2 small">{conference.description}</p>
                            <p className="mb-2 small text-muted">{conference.when}</p>
                            <p className="mb-2 small"><a target="_blank" href={`http://maps.google.com/?q=${conference.where}`}>{conference.where}</a></p>
                            <div className="badges">
                                {tagsAsHTML}
                            </div>
                        </Col>
                        <Col md="8">
                            <Card>
                                <Card.Body className="text-center">
                                    {/* <p className="text-muted small mb-1">Full Paper</p>
                                    <p className="fw-bold mb-1 text-primary">{conference.main_track.title}</p>
                                    <h4 className="fw-bold mb-1 ">
                                        <CountDown2 datetime={conference.main_track.deadlines.abstract} />
                                    </h4> */}

                                    <Slider {...settings}>
                <div >
                    <div className="card card-body px-5 mx-3">
                        <h3>1</h3>
                    </div>
                </div>
                <div>
                    <div className="card card-body px-5 mx-3">
                        <h3>2</h3>
                    </div>
                </div>
                <div >
                <div className="card card-body px-5 mx-3">
                        <h3>3</h3>
                    </div>
                </div>
                <div >
                <div className="card card-body px-5 mx-3">
                        <h3>4</h3>
                    </div>
                </div>
                <div >
                <div className="card card-body px-5 mx-3">
                        <h3>5</h3>
                    </div>
                </div>
                <div >
                <div className="card card-body px-5 mx-3">
                        <h3>6</h3>
                    </div>
                </div>
            </Slider>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Accordion className="accordion-flush">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>See Tracks</Accordion.Header>
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
