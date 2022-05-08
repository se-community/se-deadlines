import { Container } from "react-bootstrap";
import dayjs from "dayjs";
import dayjsUTC from "dayjs/plugin/utc";
import dayjsTimezone from "dayjs/plugin/timezone";

import deadlines from "../lib/deadlines";
import Deadline from "../components/Deadline";

dayjs.extend(dayjsUTC);
dayjs.extend(dayjsTimezone);

function Index({ deadlines }) {

    const deads = deadlines.map((d, i) => {
        return <Deadline key={i} {...d} />;
    });

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

            {deads}
        </>
    );
}

export async function getStaticProps(context) {

    return {
        props: {
            deadlines: await deadlines()
        },
    };
}

export default Index;
