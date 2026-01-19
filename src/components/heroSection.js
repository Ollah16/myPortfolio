import { useEffect, useState } from "react";
import Header from "./header";
import { getUserData } from "../api/userData";

const HERO_CONTENT = {
    description:
        "Frontend Engineer specialising in building fast, accessible, and scalable web applications. I collaborate closely with designers and product teams to transform complex requirements into intuitive, high-quality user experiences.",
};

const HeroSection = () => {

    const [title, setTitle] = useState("")

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserData()
                setTitle(response.data.title)
            } catch (err) {
                console.error("Failed to load name:", err);
            }
        }

        fetchUserData();
    }, [])

    return (
        <section aria-label="Introduction">
            <Header h2={title} p={HERO_CONTENT.description} />
        </section>
    );
};

export default HeroSection;
