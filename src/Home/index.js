import { Footer } from "../components";
import Intro from "./Intro";
import Team from "./Team";
import AboutInHome from "./About";
import FocusArea from "./FocusArea";
import { HomeData } from "./data";

import "./home.css"
function Home() {
console.log(HomeData.members)

    return ( 
        <div>
            <Intro />
            <AboutInHome />
            <FocusArea />
            <Team members = { HomeData.members } />
            <Footer />
        </div>
    );
}

export default Home;
