import Container from "../Container";
import "./footer.css"

function Footer() {
    return ( 
        <div className = "footer">
            <Container>
                <div className = "flex-footer flex-between">
                    <Header />
                    <About />
                    <Services />
                    <Contact />
                </div>
                <div className="foo"><p style={{ textAlign : "center" }}>© Copyright 2002-2022 EcoNile. All Rights Reserved.</p></div>
            </Container>
        </div>
    );
}

const Header = () => {
    return(
        <div className="header-footer">
            <h6 className="logo-footer">Eco<span>Nile.</span></h6>
            <p>EcoNile is a non-profit organization that aims to build and inculcate environmental awareness by providing the knowledge, skills, values that regulate behavior, and enable one to interact with his social and natural environment, thus preserving the environment and limiting its deterioration.</p>
        </div>
    )
}

const About = () => {
    return(
        <div className="about-footer">
            <h6>Home</h6>
            <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Blog</li>
                <li>Partnerships</li>
            </ul>
        </div>
    )
}

const Services = () => {
    return(
        <div className="about-services">
            <h6>Services</h6>
            <ul>
                <li>Sessions</li>
                <li>Courses</li>
                <li> Conferences </li>
            </ul>
        </div>
    )
}

const Contact = () => {
    return(
        <div className="about-services">
            <h6>Contact us</h6>
            <ul>
                <li>Email</li>
                <li style={{ color : "#55625E"}}>ecoNile. academy @gmail.com </li>
                <li>Phone</li>
                <li>number</li>
                <li style={{ color : "#55625E" }}>+249 11 413 5874</li>
            </ul>
        </div>
    )
}

export default Footer;