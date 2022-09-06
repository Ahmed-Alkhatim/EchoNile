import { Link } from "react-router-dom";
import mask1 from "../images/Mask1.png"
import mask2 from "../images/Mask2.png"
function Instructor() {
    return (  
        <div className="instructor">
            <img src= {mask1} alt = "tree"/>
            <Link to = "instructor">
                <h3>Become Instructor</h3>
            </Link>
            <img src= {mask2} alt = "tree"/>

        </div>
    );
}

export default Instructor;