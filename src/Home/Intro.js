import { Link } from "react-router-dom"
import { Container, Header } from "../components"
import faceBook from "../images/icons/faceGreen.svg"
import linkidin from "../images/icons/linkedinGreen.svg"
import instagram from "../images/icons/instagramGreen.svg"
import twitter from "../images/icons/twitterGreen.svg"
const Intro = () => {
    return(
        <div className="intro">
            <Container>
                <Header theme = {"navigator-light"}/>
                <h1><span>Together For </span> Environmentally Sustainable Future</h1>
                <div className="intro-contact">
                    <div className="intro-mask">
                        <img src={linkidin} alt = "linkidin"/>
                        <img src={instagram} alt = "instagram"/>
                        <img src={twitter} alt = "twitter"/>
                        <img src={faceBook} alt = "faceBook"/>
                    </div>
                    <div className="introContact-header"><Link to = "instructor">become an instructor</Link></div>
                </div>
            </Container>
        </div>
    )
}

export default Intro