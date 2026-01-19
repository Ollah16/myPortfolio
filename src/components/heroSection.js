import { useEffect, useState } from "react";
import Header from "./header";
import { getUserData } from "../api/userData";
import { useUserData } from "../hooks/useUserData";

const HERO_CONTENT = {
    description:
        "Frontend Engineer specialising in building fast, accessible, and scalable web applications. I collaborate closely with designers and product teams to transform complex requirements into intuitive, high-quality user experiences.",
};

const HeroSection = () => {

    const { title } = useUserData();

    return (
        <section aria-label="Introduction">
            <Header h2={title} p={HERO_CONTENT.description} />
        </section>
    );
};

export default HeroSection;
