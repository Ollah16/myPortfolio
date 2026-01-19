import { useUserData } from "../../hooks/useUserData";



const NavBrand = () => {

    const { brand } = useUserData();

    const BrandSkeleton = () => (
        <div className="md:text-3xl py-3 text-2xl font-bold uppercase tracking-widest
                  bg-gray-300 dark:bg-gray-700
                  w-40 h-[36px] rounded animate-pulse" />
    );


    return (
        <div>
            {brand ?
                <a href="/" className={`md:text-3xl py-3 text-2xl no-underline align-bottom inline-block font-bold uppercase tracking-widest dark:text-white text-black`}>{brand}</a>
                :
                <BrandSkeleton />
            }
        </div>
    )
}

export default NavBrand