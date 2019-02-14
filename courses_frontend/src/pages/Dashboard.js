import React from "react";
import Courses from "./courses/CoursesPage";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/1528965178_sale_15391_primary_image_story.jpg";
import Image2 from "../assets/What-Is-Back-End-Development.png";
import Image3 from "../assets/images.jpg";

function Dashboard(props) {
    return (
        <div>
            <h1>Advanced Web Design</h1>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={960} height={405} alt="960x405" src={Image1}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={960} height={405} alt="960x405" src={Image2}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={960} height={405} alt="960x405" src={Image3} align="middle"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Courses value={props.value} />
        </div>
    )
}

export default Dashboard