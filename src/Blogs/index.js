import { Header, Footer, Container } from "../components"
import { Blog, OtherBlog, OtherBlogs } from "./component"
import member from "../images/members/ahmed.jpg"
import "./blog.css";
import image from  "../images/shop.jpg";

const blogssData = [
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et", memberName : "Ahmed alkhatim", memberImage : member , memberPosition : "Co-Founder"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et", memberName : "Ahmed alkhatim", memberImage : member , memberPosition : "Co-Founder"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et", memberName : "Ahmed alkhatim", memberImage : member , memberPosition : "Co-Founder"},
    {title : "Lorem ipsum dolor sit amet, consetetur", discription : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et", memberName : "Ahmed alkhatim", memberImage : member , memberPosition : "Co-Founder"},
]

const Blogs = () => {
    return(
        <>
        <Header />
        <div className="blogs page">
            <Container>
            <h2 className="page-header blog-header">Blog</h2>
            <Blog data = { blogssData[0] } />
            <OtherBlogs data = { blogssData } />
            </Container>
        </div>
        <Footer />
        </>
    )
}
const BlogView = () => {
    return(
        <>
        <div className = "view page" >
            <Container>
            <Header theme={"navigator-dark"}/>
                <div className="img-container ">
                    <img src={ image } alt="course" />
                </div>
                <div className="view-details">
                    <h2 className="head-marg">Lorem ipsum dolor sit amet, consetetur</h2>
                    <p>There is no question that Earth has been a giving planet. Everything humans have needed to survive, and thrive, was provided by the natural world around us: food, water, medicine, materials for shelter, and even natural cycles such as climate and nutrients. Scientists have come to term such gifts ‘ecosystem services’, however the recognition of such services goes back thousands of years, and perhaps even farther if one accepts the caves paintings at Lascaux as evidence. Yet we have so disconnected ourselves from the natural world that it is easy—and often convenient—to forget that nature remains as giving as ever, even as it vanishes bit-by-bit. The rise of technology and industry may have distanced us superficially from nature, but it has not changed our reliance on the natural world: most of what we use and consume on a daily basis remains the product of multitudes of interactions within nature, and many of those interactions are imperiled. Beyond such physical goods, the natural world provides less tangible, but just as important, gifts in terms of beauty, art, and spirituality. Earth Day seems as good a day as any to remind ourselves what nature gives us free-of-charge.</p>
                    <p>IELTS Vocabulary: The Environment, is a topic-specific vocabulary course designed to help you increase your lexical range for environmental topics and questions. This IELTS preparation course will help you to master the essential environmental vocabulary needed to get a high IELTS score</p>
                </div>
                <div className="img-container img-container-more">
                    <img src={ image } alt="course" />
                </div>
                <p>There is no question that Earth has been a giving planet. Everything humans have needed to survive, and thrive, was provided by the natural world around us: food, water, medicine, materials for shelter, and even natural cycles such as climate and nutrients. Scientists have come to term such gifts ‘ecosystem services’, however the recognition of such services goes back thousands of years, and perhaps even farther if one accepts the caves paintings at Lascaux as evidence. Yet we have so disconnected ourselves from the natural world that it is easy—and often convenient—to forget that nature remains as giving as ever, even as it vanishes bit-by-bit. The rise of technology and industry may have distanced us superficially from nature, but it has not changed our reliance on the natural world: most of what we use and consume on a daily basis remains the product of multitudes of interactions within nature, and many of those interactions are imperiled. Beyond such physical goods, the natural world provides less tangible, but just as important, gifts in terms of beauty, art, and spirituality. Earth Day seems as good a day as any to remind ourselves what nature gives us free-of-charge.</p>
                <p>IELTS Vocabulary: The Environment, is a topic-specific vocabulary course designed to help you increase your lexical range for environmental topics and questions. This IELTS preparation course will help you to master the essential environmental vocabulary needed to get a high IELTS score</p>
                <p>There is no question that Earth has been a giving planet. Everything humans have needed to survive, and thrive, was provided by the natural world around us: food, water, medicine, materials for shelter, and even natural cycles such as climate and nutrients. Scientists have come to term such gifts ‘ecosystem services’, however the recognition of such services goes back thousands of years, and perhaps even farther if one accepts the caves paintings at Lascaux as evidence. Yet we have so disconnected ourselves from the natural world that it is easy—and often convenient—to forget that nature remains as giving as ever, even as it vanishes bit-by-bit. The rise of technology and industry may have distanced us superficially from nature, but it has not changed our reliance on the natural world: most of what we use and consume on a daily basis remains the product of multitudes of interactions within nature, and many of those interactions are imperiled. Beyond such physical goods, the natural world provides less tangible, but just as important, gifts in terms of beauty, art, and spirituality. Earth Day seems as good a day as any to remind ourselves what nature gives us free-of-charge.</p>
            </Container>
        </div>
        <Footer />
        </>
    )
}


export { Blogs, BlogView }