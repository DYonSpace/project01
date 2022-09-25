import Banner from './banner';
import {Container, Row, Button, Spinner, Carousel} from 'react-bootstrap';

function Main(){

    return(
        <div className="Main">
            <header>
                
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://172.30.1.29:8898/images/slide01.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://172.30.1.29:8898/images/slide02.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://172.30.1.29:8898/images/slide03.png"
            alt="Third slide"
          />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </header>

            <section>
                
            </section>
            
        </div>
    );
} export default Main;