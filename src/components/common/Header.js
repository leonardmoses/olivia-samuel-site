import { Link } from "react-router-dom";
import '../../styles/Header.scss';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {

    return ( 
        <div className='Header'>

            <div className="HeaderTitle"><Link to="/"><div className="hx1">Olivia's Digicrib</div></Link></div>

            <div className="CarouselContainer">
                <Carousel fade>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/35e4ac6339f5fdcc164160a5755790cd.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.insider.com/55c79980dd08956e0c8b4699?width=700"
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://as01.epimg.net/meristation_en/imagenes/2022/06/10/news/1654896748_190800_1654896873_sumario_normal.jpg"
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

            <ul>
                <li><Link to="/home"><h5>Home</h5></Link></li>
                <li><Link to="/gallery"><h5>Gallery</h5></Link></li>
            </ul>

        </div>
     );
}
 
export default Header;