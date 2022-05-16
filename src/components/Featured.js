import { Carousel } from "react-bootstrap";

function Featured() {


    const featured = [{
        img: "https://conf.researchr.org/getImage/icse-2021/orig/logo_oficial_bannerTWITTER-4.png"
    }, {
        img: "https://2020.icse-conferences.org/getImage/orig/ICSEwide.png"
    }, {
        img: "https://conf.researchr.org/getImage/icse-2019/orig/icse2019_logo_final.png"
    }];

    const conferencesAsHTML = featured.map((c, key) => {
        return (
            <Carousel.Item key={key} className="bg-light">
                <img height="200px" src={c.img} className="d-block w-100" alt="..." />
            </Carousel.Item>
        );
    });

    return (
        <Carousel fade className="mb-3">
            {conferencesAsHTML}
        </Carousel>
    );
}

export default Featured;
