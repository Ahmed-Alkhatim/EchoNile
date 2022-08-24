import bransh from "../images/bransh.png"

const AboutInHome = () => {
    return(
        <div className="home-about">
             <div className="bransh-image">
                <img src={bransh} alt="" />
            </div>
            <div className="home-about-text">
                <h2>About Us</h2>
                <p>EcoNile is a non-profit organization that aims to build and inculcate environmental awareness by providing the knowledge, skills, values that regulate behavior, and enable one to interact with his social and natural environment, thus preserving the environment and limiting its deterioration. The dissemination of this knowledge is tackled through sessions, seminars, webinars, courses, workshops and conferences. Through the aforementioned means, we encourage discourse and interactions between our audiences and experts and between experts likewise.</p>
            </div>
           
        </div>
    )
}

export default AboutInHome