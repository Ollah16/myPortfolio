import Introduction from "../components/Introduction/introduction";
import HeroSection from "../components/heroSection";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-10">
            <HeroSection />
            <Introduction />
        </div >
    )
}
export default HomePage;