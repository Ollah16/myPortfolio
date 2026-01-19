import Header from "./header";
import { useUserData } from "../hooks/useUserData";

const HERO_CONTENT = {
    description:
        "Frontend Engineer specialising in building fast, accessible, and scalable web applications. I collaborate closely with designers and product teams to transform complex requirements into intuitive, high-quality user experiences.",
};

const HeroSection = () => {

    const { title } = useUserData();

    if (!title) return

    return (
        <section aria-label="Introduction">
            <Header h2={title} p={HERO_CONTENT.description} />
        </section>
    );
};

export default HeroSection;
