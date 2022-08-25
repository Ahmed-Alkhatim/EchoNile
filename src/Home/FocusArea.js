import { Container } from "../components"
import bransh from "../images/bransh-left.png"

function FocusArea() {
    return (  
        <div className="focus">
                <img className="bransh-focus" src={bransh} alt="" />
                <div>
                    <h3>Our Focus areas</h3>
                    <div className="boxes">
                
                        <div><h6>Land</h6></div>
                        <div><h6>Water</h6></div>
                        <div><h6>Climate Change</h6></div>
                        <div><h6>Energy</h6></div>
                        <div><h6>Biodiversity</h6></div>
                        <div><h6>Health</h6></div>
                    </div>
                </div>
        </div>
    );
}

export default FocusArea
