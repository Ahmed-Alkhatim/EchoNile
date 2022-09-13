import { Container } from "../components"
import facebook from "../images/icons/facebook.svg"
import instagram from "../images/icons/instagram.svg"
import linkedin from "../images/icons/linkedin.svg"
import twitter from "../images/icons/twitter.svg"
import email from "../images/icons/email.svg"
import location from "../images/icons/location.svg"
import phone from "../images/icons/phone.svg"
import mask from "../images/contact-mask.png"

const Contact = () => {
    return(
        <Container>
        <h3 className="page-header ">Contact Us</h3>

        <div id = "contact" className="home-contact">

            <div className="home-form">
                <div className = "form">
                        <div className = "form-input">
                            <input type = "text" name = "" placeholder="Name"/>
                        </div>

                        <div className = "form-input">
                            <input type = "text" name = "" placeholder="Email"/>
                        </div>
                        <div className = "form-input message">
                            <textarea  name = "" placeholder="Message"></textarea>
                        </div>
                        <button>Send</button>
                        
                </div>
            </div>
            <div className="mask-contact">
                <div className="contact-masker">
                    <img src = {mask} alt = "mask"/>
                </div>
                <div className="img-and-icons">
                    <div >
                        <p><img src= {email} alt = "icon"/>echoNile.academy@gmail.com</p>
                        <p><img src= {phone} alt = "icon"/> +249 11 413 5874</p>
                        <p><img src= {location} alt = "icon"/>Khartoum - Sudan</p>
                    </div>
                    <div className="links">
                        <img src= {linkedin} alt = "icon"/>
                        <img src= {facebook} alt = "icon"/>
                        <img src= {twitter} alt = "icon"/>
                        <img src= {instagram} alt = "icon"/>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}
export default Contact