import { Container } from "react-bootstrap";
import Introduction from "../components/Introduction/introduction";
import HeroSection from "../components/heroSection";

const HomePage = () => {
    return (
        <Container fluid>
            <HeroSection />
            <Introduction />
        </Container >
    )
}
export default HomePage;