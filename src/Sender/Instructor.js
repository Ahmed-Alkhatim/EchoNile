import mask from "../images/instructor-mask.png"
import { Header, Footer, Container } from "../components"
import "./instructor.css"
import instructor_mask from "../images/instructor-mask.png"
const Instructor = () => {
    return(
        <>
        <div className="instruction page">
            <Header theme = {"navigator-dark"}/>
            <div className = " instruction-masker "><img src = {instructor_mask} alt = "mask"/></div>
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
                            <textarea  name = "" placeholder="Message"></textarea>
                        </div>
                        <button>Send</button>
                        
                    </div>
                </Container>
            </div>
            <Footer />
        </>

    )
}

export default Instructor