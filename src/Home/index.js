import { Footer } from "../components";
import Intro from "./Intro";
import Team from "./Team";
import AboutInHome from "./About";
import FocusArea from "./FocusArea";
import Vision from "./Vision";
import Instructor from "./Instructor"
import { HomeData } from "./data";
import Contact  from "./Contact";
import "./home.css"
function Home() {
console.log(HomeData.members)

    return ( 
        <div>
            <Intro />
            <AboutInHome />
            <Vision />
            <FocusArea />
            <Team members = { HomeData.members } />
            <Instructor />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
