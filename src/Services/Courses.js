import { Container, Header, Footer } from "../components";
import { Service, OtherServices, Date, More  } from "./component";

import "./service.css"
import image from  "../images/shop.jpg";

const sessionsData = [
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},
]

function Courses( ) {

    return ( 
        <>
        <Header theme={"navigator-dark"}/>
        <div className="services page">
            <Container>
                <Service data = { sessionsData[0] } date = {<Date date = "Monday, June 27, 2022" time = "1:24 AM -GTM" />}  button = {<More linkedTo = "/course" pad={2}/>} />
                <OtherServices data = { sessionsData } contain = {true} />
            </Container>
        </div>
        <Footer />
        </>
     );
}

const Course = () => {
    return(
        <>
        <Header theme={"navigator-dark"}/>
        <div className = "view page">
            <Container>

            <div className="img-container course-img-container">
                <img src={ image } alt="course" />
                <Date date = "Monday, June 27, 2022" time = "1:24 AM -GTM" />
            </div>
            <div>
                <h2>Lorem ipsum dolor sit amet, consetetur</h2>
                <p>IELTS Vocabulary: The Environment, is a topic-specific vocabulary course designed to help you increase your lexical range for environmental topics and questions. This IELTS preparation course will help you to master the essential environmental vocabulary needed to get a high IELTS score</p>
                <p>. Learn 121-words and their meanings Practice the pronunciation of each word See how each word is used in example sentences Learn high band score collocations Test your knowledge using crosswords, matching activities and more! Observe and practice how to use the vocabulary to answer IELTS speaking task 2&3 questions.</p>
                <p>Learn how to write a high-band task 2 essay by skillfully applying a wide range of topic-specific vocabulary. Access various resources to help you build your knowledge, ideas, and awareness of environmental issues. How confident are you when speaking and writing about the environment? It's difficult, I know! Words like Climate Change, </p>
                <p>Renewable Energy and Environmental Conservation will soon be natural and easy for you to use! I teach hundreds of students, just like you, to prepare for IELTS each year, and the biggest challenge for most students is that they do not know enough words to express their thoughts and ideas... A strong lexical range is essential for achieving a high-band score on the IELTS exam. </p>
                <p>This IELTS preparation & English vocabulary course will teach you the knowledge and help build your confidence to achieve the high band score you need! The Vocabulary… In total, you will learn a mixture of over 120 words, phrases and collocations related to the topic: The Environment tht will help you achieve a high band score on the IELTS test. Why the Environment? The Environment is a hot topic and features in many English courses and exams! According to various sources, the topic: The Environment has a 10-15% chance of appearing in the IELTS exam. </p>
            </div>
            </Container>
        </div>
        <Footer />
        </>
    )
}

export { Courses, Course }