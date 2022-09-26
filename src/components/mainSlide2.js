import {Carousel} from 'react-bootstrap';


function MainSlide2(){

    return(
        <div className="MainSlide2">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://127.0.0.1:8898/images/slide2-1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://127.0.0.1:8898/images/slide2-2.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
} export default MainSlide2;