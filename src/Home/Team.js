import { Container } from "../components"
import linkidIn from "../images/icons/linkedin-member.png"
import alkhatim from "../images/alkhatim.jpg"
import maxab from "../images/maxab.jpg"
import noel from "../images/noel.jpg"
import shihab from "../images/shihab.jpg"
import shima from "../images/shima.jpg"
import rayan from "../images/rayan.jpg"
import sadia from "../images/sadia.jpg"
import muzan from "../images/muzan.jpg"
import Abdelnaser from "../images/Abdelnaser.jpg"

let members = [
    { name : "Yassir Omer", position : "Founder/President", linkedIn : "", image : maxab },
    { name : "Rayan Abdelfatah", position : "Co-founder/Executive Director", linkedIn : "", image : rayan  },
    { name : "Muzun Tajelsir", position : "Co_founder", linkedIn : "", image : muzan  },
    { name : "Shima Ahmed", position : "Director of International Relations", linkedIn : "", image : shima  },
    { name : "Shehabeldin Osman", position : "Director of Programs", linkedIn : "", image : shihab  },
    { name : "Noel Janna", position : "Director of Social Media platforms", linkedIn : "", image : noel  },
    { name : "Abdoalnaser Ibrahim", position : "Director of Innovation", linkedIn : "", image : Abdelnaser  },
    { name : "Ahmed Alkhatim Awad", position : "Web Developer", linkedIn : "", image : alkhatim  },
    { name : "Saadia Mohamed Ahmed", position : "Graphic Designer", linkedIn : "", image : sadia  },
]
const Team = () => {
    return(
        <div id = "team" className="team">
            <Container>
                <h2>Meet Our Team</h2>
                <div className="flex-between">
                    { members.map( (member) => <ListOfMembers member={ member }/> ) }
                </div>
            </Container>
        </div>
    )
}

const ListOfMembers = ( { member } ) => {
    return(
        <div className="member">
            <div className="member-image">
                <img src = { member.image } alt="member"/>
            </div>
            <h6>{ member.name } </h6>
            <p>{ member.position } </p>
            <img className="linkedin" src={ linkidIn }  alt="linkedin" />
        </div>
    )
}

export default Team