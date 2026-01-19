import { useUserData } from "../../hooks/useUserData";

const NavBrand = () => {

    const { brand } = useUserData();

    if (!brand) return

    return (
        <div>
            <a href="/" className={`md:text-3xl py-3 text-2xl no-underline align-bottom inline-block font-bold uppercase tracking-widest dark:text-white text-black`}>{brand}</a>
        </div>
    )
}

export default NavBrand