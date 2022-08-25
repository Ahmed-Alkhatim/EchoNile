import { Link } from "react-router-dom" 
function Header( { theme }) {
    return ( 
        <div className = "header">
            <div className={"navigator " + theme}>
                <div><span className={"logo-header"}>Eco<span>Nile.</span></span></div>
                <div>
                <ul>
                    <Link to = "/"><li>Home</li></Link>
                    <Link to = "/"><li>About us</li></Link>
                    <Link to = "/"><li>Services</li></Link>
                    <Link to = "/"><li>Our Team</li></Link>
                    <Link to = "/"><li>Blog</li></Link>
                    <Link to = "/"><li>Partnerships</li></Link>
                    <Link to = "/"><li>Contact us</li></Link>
                </ul>
                </div>
            </div>
        </div>
     )
    ;
}

export default Header;
