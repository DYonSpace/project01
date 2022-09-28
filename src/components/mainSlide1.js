import {Carousel} from 'react-bootstrap';


function MainSlide1(){

    return(
        <div className="MainSlide1">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL+"/images/slide1-1.png"}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL+"/images/slide1-2.png"}
                alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL+"/images/slide1-3.png"}
                alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
} export default MainSlide1;