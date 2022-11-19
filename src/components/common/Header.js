import { Link } from "react-router-dom";
import '../../styles/Header.scss';

const Header = () => {

    return ( 
        <div className='Header'>

            <div className="HeaderTitle"><Link to="/"><h3>Olivia's Digicrib</h3></Link></div>

            <ul>
                <li><Link to="/home"><h5>Home</h5></Link></li>
                <li><Link to="/gallery"><h5>Gallery</h5></Link></li>
            </ul>

        </div>
     );
}
 
export default Header;