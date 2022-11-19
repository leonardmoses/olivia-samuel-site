import { Link } from "react-router-dom";

const Header = () => {

    return ( 
        <div className='Header'>
            <h3>Header</h3>

            <ul>
                <li><Link to="/"><h5>Splash</h5></Link></li>
                <li><Link to="/home"><h5>Home</h5></Link></li>
                <li><Link to="/gallery"><h5>Gallery</h5></Link></li>
            </ul>

        </div>
     );
}
 
export default Header;