import { Link } from "react-router-dom" 
import Container from "../Container";
function Header( { theme }) {
    return ( 
        <Container>

        <div className = "header">
            <div className={"navigator " + theme}>
                <div><span className={"logo-header"}>Eco<span>Nile.</span></span></div>
                <div>
                <ul>
                    <Link to = "/"><li>Home</li></Link>
                    <a href = "#about"><li>About us</li></a>
                    <Link to = "/"><li>Services</li></Link>
                    <a to = "#team"><li>Our Team</li></a>
                    <Link to = "/blogs"><li>Blog</li></Link>
                    <Link to = "/"><li>Partnerships</li></Link>
                    <a href = "#contact"><li>Contact us</li></a>
                </ul>
                </div>
            </div>
        </div>
        </Container>

     )
    ;
}

export default Header;
