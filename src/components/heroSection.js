import Header from "./header";
import { useUserData } from "../hooks/useUserData";

const HERO_CONTENT = {
    description:
        "Frontend Engineer specialising in building fast, accessible, and scalable web applications. I collaborate closely with designers and product teams to transform complex requirements into intuitive, high-quality user experiences.",
};

const HeroSection = () => {

    const { title } = useUserData();

    const placeholder = <div className="h-10 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4" />
    const header = title ?? placeholder

    return (
        <section aria-label="Introduction">
            <Header title={header} p={HERO_CONTENT.description} />
        </section>
    );
};

export default HeroSection;

