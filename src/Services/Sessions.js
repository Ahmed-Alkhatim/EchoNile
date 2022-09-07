import { Container, Header, Footer } from "../components";
import { Session, OtherSessions } from "./component";

const sessionsData = [
    {title : "Environmental Impact Assessment (EIA), Presented by: Dr. Osman Mirghani.", discription : `EIA was discussed in detail, as well as the importance of clear legislation in this area, backed by strong institutions that are guided and directed by qualified human resources, as well as the importance of
    activating effective follow-up procedures and R&D to go ahead for more development and innovation.`, src : "https://www.youtube.com/embed/s9NGy5xpo9c"},
    {title : "Climate change impacts in Sudan, Presented by: Dr. Somia Zakieldeen", discription : `Climate change impacts in Sudan, vulnerability and adaptation linked to IPCC data and projections about
    climate change, biodiversity, temperature objectives, GHG gas sources, degrees of susceptibility and
    adjustment in natural and human systems are all covered in detail. Also, the UNFCCC's role in promoting
    global solutions to climate change, as well as the implementation of international measures such as the
    Kyoto Protocol and the Paris Agreement - all of this is linked to both national and international
    situations."`, src : "https://www.youtube.com/embed/YSy3obFT7nE"},
    {title : "Sudan's Commitments toward the Climate Change Convention, Presented by: Rehab Ahmed Hassan.", discription : `Starting with the causes of climate change and its potential consequences, the UNFCCC's duties in
    greater depth, and Sudan's commitment to various agreements and sectors covered in the SDG
    framework, followed challenges encountered in implementing those protocols. Moreover, the lecturer
    discussed the role of the Higher Council for Environment and Natural Resources (HCENR), climate
    change institutions, what has been accomplished thus far, and recommendations related with lessons
    learned, as well as gaps and challenges facing UNFCCC implementation in Sudan.`, src :"https://www.youtube.com/embed/1X0l0W1eIfQ"},
    // {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
]

function Sessions( ) {
    return ( 
        <>
        <div className="services page">
            <Container>
                <Header theme={"navigator-dark"}/>
                <h2 className="page-header blog-header">Sessions</h2>
                <Session data = { sessionsData[0] } />
                <OtherSessions data = { sessionsData } />
            </Container>
        </div>
        <Footer />
        </>
     );
}


export default Sessions