import { Container, Header, Footer } from "../components";
import { Service, OtherServices } from "./component";

const sessionsData = [
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
]

function Sessions( ) {
    return ( 
        <>
        <div className="services page">
            <Container>
            <Header theme={"navigator-dark"}/>
                <Service data = { sessionsData[0] } />
                <OtherServices data = { sessionsData } />
            </Container>
        </div>
        <Footer />
        </>
     );
}


export default Sessions