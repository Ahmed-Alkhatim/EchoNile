import { Container } from "../components"
import linkidIn from "../images/icons/linkedin-member.png"
const Team = ({ members }) => {
    return(
        <div className="team">
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
            <img src={ linkidIn }  alt="linkedin" />
        </div>
    )
}

export default Team