import Introduction from "../components/Introduction/introduction";
import HeroSection from "../components/heroSection";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-10 h-[calc(100vh-56px-67px-64px)] md:h-full">
            <HeroSection />
            <Introduction />
        </div >
    )
}
export default HomePage;