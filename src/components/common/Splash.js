import { Link } from "react-router-dom";
import "../../styles/Splash.scss"

const Splash = () => {
    return (    

        <div className="Splash">
            <div className="LinkContainer">
                <Link to="/home" className="Link"><h1>Olivia Samuel</h1></Link>
            </div>
        </div>
     );
}
 
export default Splash;