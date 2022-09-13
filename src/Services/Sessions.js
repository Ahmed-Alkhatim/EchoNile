import { Container, Header, Footer } from "../components";
import { Session, OtherSessions } from "./component";

const sessionsData = [
    {title : "Environmental Impact Assessment (EIA)", 
    discription : `EIA was discussed in detail, as well as the importance of clear legislation in this area, backed by strong institutions that are guided and directed by qualified human resources, as well as the importance of
    activating effective follow-up procedures and R&D to go ahead for more development and innovation.`, 
    by : "Dr. Osman Mirghani.",
    src : "https://www.youtube.com/embed/s9NGy5xpo9c"},
    {title : "Climate change impacts in Sudan", 
    by : "Dr. Somia Zakieldeen",
    discription : `Climate change impacts in Sudan, vulnerability and adaptation linked to IPCC data and projections about
    climate change, biodiversity, temperature objectives, GHG gas sources, degrees of susceptibility and
    adjustment in natural and human systems are all covered in detail."`, 
    src : "https://www.youtube.com/embed/YSy3obFT7nE"},
    {title : "Sudan's Commitments toward the Climate Change Convention", 
    by : "Rehab Ahmed Hassan.",
    discription : `Starting with the causes of climate change and its potential consequences, the UNFCCC's duties in
    greater depth, and Sudan's commitment to various agreements and sectors covered in the SDG
    framework, followed challenges encountered in implementing those protocols.`, 
    src :"https://www.youtube.com/embed/1X0l0W1eIfQ"},
    {title : "Water in UNESCO and Sudan Opportunities", 
    by : "Prof. Abdin Muhammad Ali", 
    src : "https://www.youtube.com/embed/cmGhFIjfFvg",
    discription : `The session delves into the history of water in UNESCO as well as the international hydrological
    program. The session also touched on Sudan and IHP, as well as the UNESCO broad water family.`},
    { title : "Climate Change Causes, Impacts, and Sudan Experiences,",
    by : "Dr. Ismail Elgizouli.",
    src : "https://www.youtube.com/embed/0uBSBH7ZsWw",
    discription : `Very interesting session which started with the science of climate change explanation. International
    efforts to face this phenomenon through adaptation and mitigation have taken place, as well as the
    impacts on Sudan (sectors and ecological systems affected)`        
}
]

function Sessions( ) {
    return ( 
        <>
        <div className="services page">
            <Header theme={"navigator-dark"}/>
            <Container>
                <h2 className="page-header blog-header">Sessions</h2>
                <Session data = { sessionsData[0] } />
                <OtherSessions data = { sessionsData.slice(1) } />
            </Container>
        </div>
        <Footer />
        </>
     );
}


export default Sessions