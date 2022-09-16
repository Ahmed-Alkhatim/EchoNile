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
    { name : "Yassir Omer", position : "Founder/President", image : maxab, linkedIn : "https://www.linkedin.com/in/yasser-omer-5a117a18a" },
    { name : "Rayan Abdelfatah", position : "Co-founder/Executive Director", image : rayan, linkedIn : "https://www.linkedin.com/in/rayan-ahmed-6581b4104"},
    { name : "Muzun Tajelsir", position : "Director of Programs",image : muzan, linkedIn : "https://www.linkedin.com/in/muzun-tajelsir-00570b235"   },
    { name : "Shima Ahmed", position : "Director of International Relations", image : shima, linkedIn : "https://www.linkedin.com/in/shima-ahmed-8740881b2" },
    { name : "Shehabeldin Osman", position : "Secretary General",  image : shihab, linkedIn : "https://www.linkedin.com/in/shihab-eldin-osman-0b329050"},
    { name : "Noel Janna", position : "Director of Social Media", image : noel, linkedIn : "https://www.linkedin.com/in/noeljanna"   },
    { name : "Abdoalnaser Ibrahim", position : "Director of Innovation",  image : Abdelnaser, linkedIn : "http://linkedin.com/in/abdoalnaser-ibrahim-5a8b37111"},
    { name : "Ahmed Alkhatim Awad", position : "Web Developer", image : alkhatim , linkedIn : "https://www.linkedin.com/in/ahmed-alkhatim/" },
    { name : "Saadia Mohamed Ahmed", position : "Graphic Designer",  image : sadia, linkedIn : "https://www.linkedin.com/in/saadia-mohamed-ahmed-0b7052200"},
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
            <a href = {member.linkedIn     }><img className="linkedin" src={ linkidIn }  alt="linkedin" /></a>
        </div>
    )
}

export default Team