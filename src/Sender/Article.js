import mask from "../images/instructor-mask.png"
import { Header, Footer, Container } from "../components"
import "./instructor.css"
import instructor_mask from "../images/instructor-mask.png"
const NewArticle = () => {
    return(
        <>
        <Header theme = {"navigator-dark"}/>
        <div className="instruction page">
            <Container>
            <h2 className="page-header instructor-header">Become an Instructor</h2>

                <div className = "form">
                    <div className = " form-input groubed-inputs">
                        <input type = "text" name = "" placeholder="First Name"/>
                        <input type = "text" name = "" placeholder="Last Name"/>
                    </div>
                    <div className = "form-input">
                        <input type = "text" name = "" placeholder="Company Name"/>
                    </div>
                    <div className = "form-input">
                        <input type = "text" name = "" placeholder="Phone Number"/>
                    </div>
                    <div className = "form-input">
                        <input type = "text" name = "" placeholder="Email"/>
                    </div>
                    <div className = "form-input message">
                        <input type = "text" name = "" placeholder="Message"/>
                    </div>
                    <button>Send</button>
                    
                </div>
            </Container>
        </div>
        <Footer />
        </>
    )
}

export default NewArticle