import { Carousel } from 'react-bootstrap';
import loginBanner from '../../images/login-banner.jpg'; 

const Carousels = () => {

    return ( 
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loginBanner}
                    alt={loginBanner}
                    height="550"
                    style={{objectFit: 'cover'}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loginBanner}
                    alt={loginBanner}
                    height="550"
                    style={{objectFit: 'cover'}}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loginBanner}
                    alt={loginBanner}
                    height="550"
                    style={{objectFit: 'cover'}}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
 
export default Carousels;