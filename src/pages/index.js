import { Container } from "react-bootstrap";

function Index() {

    return (
        <>
            <p>Featured</p>

            <div id="carouselExampleCaptions" class="carousel slide mb-3" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img height="300px" src="https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-329.jpg?w=2000" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img height="300px" src="https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-329.jpg?w=2000" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img height="300px" src="https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-329.jpg?w=2000" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <p>Deadlines</p>

            <div className="card card-body container pb-0 mb-3">
                <div className="row">
                    <div className="col-6">
                        <h5 className="fw-bold pb-2">ICMI 2022</h5>
                        <p>November 7-11, 2022</p>
                        <p><a href="http://maps.google.com/?q=Bangalore,%20India">Bangalore, India</a></p>
                    </div>
                    <div className="col-6 text-end">
                        <h5 className="fw-bold pb-2">07 days 18h 02m 28s</h5>
                        <p>Deadline: Sat May 14 2022 02:59:00 GMT-0400</p>
                        <p>Share</p>
                    </div>
                </div>
            </div>

            <div className="card card-body container pb-0 mb-3">
                <div className="row">
                    <div className="col-6">
                        <h5 className="fw-bold pb-2">ICMI 2022</h5>
                        <p>November 7-11, 2022</p>
                        <p>Bangalore, India</p>
                    </div>
                    <div className="col-6 text-end">
                        <h5 className="fw-bold pb-2">07 days 18h 02m 28s</h5>
                        <p><a href="#">Add to Calendar</a></p>
                        <p>
                        <span class="badge bg-primary">Light</span>
                        <span class="badge bg-primary ms-1">Light</span>

                        </p>
                    </div>
                </div>
            </div>

            <div className="card card-body container pb-0 mb-3">
                <div className="row">
                    <div className="col-6">
                        <h5 className="fw-bold pb-2">ICMI 2022</h5>
                        <p>November 7-11, 2022</p>
                        <p>Bangalore, India</p>
                    </div>
                    <div className="col-6 text-end">
                        <h5 className="fw-bold pb-2">07 days 18h 02m 28s</h5>
                        <p>Deadline: Sat May 14 2022 02:59:00 GMT-0400</p>
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
