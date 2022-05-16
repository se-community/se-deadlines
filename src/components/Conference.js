
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";

import { Card, Container, Row, Col, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";

import DateUtils from "../utils/date-utils";
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
        return <span class="badge border fw-normal text-dark me-2" key={i}>{tag}</span>;
    });

    var settings = {
        // className: "center",
        // centerMode: true,
        // dots: true,
        infinite: true,
        // centerPadding: "20px",
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        // swipeToSlide: true,
        speed: 250,
    };

    return (
        <Card className="mb-4 border-0 rounded-bottom">
            <Card.Body >
                <Container className="mb-2">
                    <Row>
                        <Col md="4" className="px-0">
                            <a href={conference.website} target="_blank">
                                <h3 className="mb-2 fw-bold ">
                                    <FontAwesomeIcon icon={faGlobe} className="me-2 text-blue"/>
                                    <span className="text-dark">{conference.title}</span>
                                </h3>
                            </a>
                            <p className="mb-2 small">{conference.description}</p>
                            <p className="mb-2 small text-muted">{conference.when}</p>
                            <p className="mb-2 small"><a target="_blank" href={`http://maps.google.com/?q=${conference.where}`}>{conference.where}</a></p>
                        </Col>
                        <Col md="8">
                            <Slider {...settings} className="mx-3">
                                <div className="my-s2" style={{ width: 250 }}>
                                    <div className="card card-body d-flex mx-1 justify-content-between align-items-center" style={{ "height": "123px" }}>
                                        <span className="text-muted small">Full Paper</span>
                                        <span className="fw-bold text-primary">{conference.main_track.title}</span>
                                        <span className="fw-bold ">
                                            <CountDown2 datetime={conference.main_track.deadlines.abstract} />
                                        </span>
                                    </div>
                                </div>
                                <div className="my-s2" style={{ width: 250 }}>
                                <div className="card card-body d-flex  mx-1 justify-content-between align-items-center" style={{ "height": "123px" }}>
                                        <p className="text-muted small mb-1">Full Paper</p>
                                        <p className="fw-bold mb-1 text-primary">{conference.main_track.title}</p>
                                        <span className="fw-bold mb-1 ">
                                            <CountDown2 datetime={conference.main_track.deadlines.abstract} />
                                        </span>
                                    </div>
                                </div>
                                <div className="my-s2" style={{ width: 250 }}>
                                <div className="card card-body d-flex mx-1 justify-content-between align-items-center" style={{ "height": "123px" }}>
                                        <p className="text-muted small mb-1">Full Paper</p>
                                        <p className="fw-bold mb-1 text-primary">{conference.main_track.title}</p>
                                        <span className="fw-bold mb-1 ">
                                            <CountDown2 datetime={conference.main_track.deadlines.abstract} />
                                        </span>
                                    </div>
                                </div>
                                <div className="my-s2" style={{ width: 250 }}>
                                <div className="card card-body d-flex mx-1 justify-content-between align-items-center" style={{ "height": "123px" }}>
                                        <h3>4</h3>
                                    </div>
                                </div>
                            </Slider>
                            {/* <Card>
                                <Card.Body className="text-center">
                                    {/* <p className="text-muted small mb-1">Full Paper</p>
                                    <p className="fw-bold mb-1 text-primary">{conference.main_track.title}</p>
                                    <h4 className="fw-bold mb-1 ">
                                        <CountDown2 datetime={conference.main_track.deadlines.abstract} />
                                    </h4> */}


                            {/* </Card.Body>
                    </Card> */}
                        </Col>
                    </Row>
                </Container>
                <div className="badges">
                    {tagsAsHTML}
                </div>
            </Card.Body >
            {/* <Accordion className="accordion-flush">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>See Tracks</Accordion.Header>
                    <Accordion.Body className="py-0 px-0">
                        <ListGroup className="list-group-flush">
                            {tracksAsHTML}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </Card >
    );
}

export default Conference;
