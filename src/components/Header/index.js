import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom" 
import up from "../../images/icons/up.png"
import down from "../../images/icons/down.png"
import down_b from "../../images/icons/down-b.png"
function Header( { theme }) {
    const [dropList , setDropList ] = useState(false)
    useEffect(() => {
    document.getElementsByClassName("App")[0].addEventListener("click", 
        () => setDropList(false)
    )
    }, []);
    
    const { pathname } = useLocation()
    const services = [ "/sessions", "/courses", "/conferences", "/events", "/workshops" ]
    const isService = (services = services, item) => {
        if( services.indexOf(item) != 1) return true
        return false
    }

    return ( 

        <div className = "header" >
            <div className={"navigator " + theme}>
                <div><span className={"logo-header"}>Eco<span>Nile.</span></span></div>
                <div>
                <ul className="navigator-list">
                    <Link to = "/"><li>Home</li></Link>
                    <a href = "/#about"><li>About us</li></a>
                        <li 
                            className={ isService(pathname) && "active"}
                            style={{ position : "relative", color : dropList || isService(pathname) && "#256F44", fontWeight : isService(pathname) && "bold", cursor : "pointer" }}
                            onClick= { (e) => {setDropList(!dropList)} }
                        >

                        Services 
                            <img src= {dropList?  up : (theme === "dark" ? down : down_b) } alt = "icon"/>
                            <div >
                                <ul id = "drop-down" className="drop-list" style = {{ display : dropList ? "block" : "none"}}>
                                    <Link to = "/sessions"><li>Session</li></Link>
                                    <Link to = "/courses"> <li>Courses</li></Link>
                                    <Link to = "/conferences"><li>Conferences</li></Link>
                                    <Link to = "/events"><li>Events</li></Link>
                                    <Link to = "/workshops"><li>Workshops</li></Link>
                                </ul>
                            </div>
                        </li>
                    <a href = "/#team"><li>Our Team</li></a>
                    <Link to = "/blogs"><li  style={{ color : pathname === "/blogs" && "#256F44", fontWeight : pathname === "/blogs" && "bold"}} >Blog</li></Link>
                    <Link to = "/"><li>Partnerships</li></Link>
                    <a href = "/#contact"><li>Contact us</li></a>
                </ul>
                </div>
            </div>
        </div>

     )
    ;
}

export default Header;
