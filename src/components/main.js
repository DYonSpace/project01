import Banner from './banner';
import {Carousel} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


function Main(){

    return(
        <div className="Main">
            <header>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://127.0.0.1:8898/images/slide01.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://127.0.0.1:8898/images/slide02.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Best2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://127.0.0.1:8898/images/slide03.png"
            alt="Third slide"
          />
        <Carousel.Caption>
          <h3>Best3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </header>

            <section>
              <Banner/>
            </section>
            <Outlet/>
        </div>
    );
} export default Main;