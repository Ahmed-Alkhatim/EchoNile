import React from "react";
import { Container, Header, Footer } from "../components";
import image from  "../images/shop.jpg";
import arrow from "../images/arrow.svg"
import "./session.css"
const sessionsData = [
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
]

function Service( ) {

    const sessions = sessionsData.map( (session, index) => (
        <React.Fragment key = { index }>
            <ServicesList session = { session } />
        </React.Fragment>
    ))
    return ( 
        <>
        <div className="services page">
            <Container>
            <Header theme={"navigator-dark"}/>

                <div className="service">
                    <div className="img-container">
                        <img src={image} alt="" />
                        <Date />
                    </div>
                    <div className = "service-description">
                        <div>
                            <h3 className="head-marg">Lorem ipsum dolor sit amet, consetetur</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                            <More pad = {2}/>
                        </div>
                    </div>
                </div>
                <div className="flex-between">
                    { sessions }
                </div>
            </Container>
        </div>
        <Footer />
        </>
     );
}

const ServicesList = ( { session }) => {
    return(
        <div className="service-card">
            <div className="img-container">
                <img src={image} alt="" />
                <Date />
            </div>
            <div className = "service-description">
                <div>
                    <h3 className="head-marg">{session.title}</h3>
                    <p>{session.discription}</p>
                    <More pad = {1}/>

                </div>
            </div>
        </div>
    )
}

const Date = () => {
    return(
        <div className="date">
            <div>
                <p>Date</p>
                <p>Monday, June 27, 2022</p>
            </div>
            <div>
                <p>Hour</p>
                <p>1:24 AM -GTM</p>
            </div>
        </div>
    )
}

const More = ({ pad }) => ( <p style={{ color : "#65A94D" , fontFamily : "theRegular", paddingRight : "10px", paddingTop : (16 * pad + "px"), paddingBottom : (16 * pad + "px")  }}>View details <img src={ arrow } alt="arrow" /></p>)

export default Service