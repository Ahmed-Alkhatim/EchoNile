import { Container } from "../components"
function FocusArea() {
    return (  
        <div className="focus">
            <Container>
                <h3>Our Focus areas</h3>
                <div className="boxes">
                    <div>Land</div>
                    <div>Water</div>
                    <div>Climate Change</div>
                    <div>Energy</div>
                    <div>Biodiversity</div>
                    <div>Health</div>
                </div>
            </Container>
        </div>
    );
}

export default FocusArea
