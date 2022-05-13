import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

import deadlines from "../lib/file-utils";
// import "../lib/jquery-utils";
import Conference from "../components/Conference";

import DateUtils from "../lib/date-utils";

function Index({ conferences }) {

    const conferencesAsHTML = conferences.map((d, i) => {
        return <Conference key={i} {...d} />;
    });

    return (
        <>
            <p className="text-light">Featured</p>

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

            <li className="d-flex justify-content-between align-items-start text-light">
                <p className="me-auto">Deadlines</p>
                <span className="">Your timezone is <span className="text-success">{DateUtils.getTimeZone()}</span></span>
            </li>

            {conferencesAsHTML}

            <div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>



        </>
    );
}

export async function getStaticProps() {

    return {
        props: {
            conferences: await deadlines()
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 1 seconds
        revalidate: 1, // In seconds
    };
}

export default Index;
