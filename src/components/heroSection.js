import Header from "./header"

const HeroSection = () => {
    const header = "Hi, I'm Olaoluwa Oke!";
    const subHeader = "Welcome to my portfolio website! I am a passionate Front End engineer with expertise in HTML, CSS, JavaScript, React and more. I love turning ideas into interactive and user-friendly websites. My commitment is to architect solutions that are not just functional, but intuitively beautiful.";
    return (<Header h2={header} p={subHeader} />)
}

export default HeroSection
