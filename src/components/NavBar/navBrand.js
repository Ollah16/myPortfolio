import { useEffect, useState } from "react";
import { getUserData } from "../../api/userData"

const NavBrand = () => {

    const [brand, setBrand] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserData();
                setBrand(response.data.brand);
            } catch (error) {
                console.error("Failed to load brand:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <a href="/" className={`md:text-3xl py-3 text-2xl no-underline align-bottom inline-block font-bold uppercase tracking-widest dark:text-white text-black`}>{brand}</a>
        </div>
    )
}

export default NavBrand