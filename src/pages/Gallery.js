import Layout from "../components/common/Layout";
import "../styles/Gallery.scss";

const Gallery = () => {
    return ( 
        <Layout>
            <div className="Gallery">
                <h1>Gallery</h1>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium temporibus dolorem voluptate eius magnam vel eum unde suscipit accusantium rem nobis deserunt tempore ad aliquid asperiores, ex omnis! Incidunt pariatur provident vitae suscipit excepturi ipsa sint minus quibusdam rerum fugiat.</p>

                <div className="PhotoContainer">
                    <ul>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                    </ul>
                </div>
            </div>
        </Layout>
     );
}
 
export default Gallery;