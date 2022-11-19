import { Link } from "react-router-dom";
import "../../styles/Splash.scss"

const Splash = () => {
    return (    

        <div className="Splash">
            <div className="LinkContainer">
                <Link to="/home" className="Link"><div className="hx2">Olivia Samuel</div></Link>
            </div>
        </div>
     );
}
 
export default Splash;