import Header from "./header";

const HERO_CONTENT = {
    title: "Hi, I’m Olaoluwa Oke",
    description:
        "Frontend Engineer specialising in building fast, accessible, and scalable web applications. I collaborate closely with designers and product teams to transform complex requirements into intuitive, high-quality user experiences.",
};

const HeroSection = () => {
    return (
        <section aria-label="Introduction">
            <Header h2={HERO_CONTENT.title} p={HERO_CONTENT.description} />
        </section>
    );
};

export default HeroSection;
