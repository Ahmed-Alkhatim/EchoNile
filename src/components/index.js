import Header from "./Header"
import Footer from "./Footer"
import Container from "./Container"
import "./component.css"
const Page = ({ children }) => {
    return (
    <>
        <Header />
            { children }
        <Footer />
    </>
)}

export { Page, Header, Footer, Container }