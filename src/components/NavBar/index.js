import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import NavLinks from "./navLinks";
import NavBrand from "./navBrand";
import ThemeToggle from "./themeToggle";
import DropDownBtn from "./dropDownBtn";
import DropDownContent from "./dropDownContent";

const NavBar = () => {

    const [dropdown, setDropDown] = useState(false)

    return (
        <nav className={`px-4 sticky w-full top-0 z-[100] backdrop-blur-lg dark:bg-[#030f1c99] bg-[#41424299] dark:text-white`}>

            <section className="flex justify-between items-center">
                <NavBrand />
                <div className="flex items-center gap-5 relative">
                    <NavLinks className={`h-full hidden md:flex no-underline font-semibold text-lg gap-5`} />
                    <ThemeToggle />

                    <div className="md:hidden block">
                        <DropDownBtn
                            className={`p-2 dark:text-[#62d4f7] dark:hover:bg-[#185ba3] hover:bg-[#3b3b3c] text-white h-[2.8rem] rounded-md transition-all ease-in-out duration-300 border-0`}
                            icon={<GrMenu size={25} />}
                            onClick={() => setDropDown(true)}
                        />
                    </div>
                </div>
            </section>
            <DropDownContent dropdown={dropdown} setDropDown={setDropDown} />
        </nav >)
}

export default NavBar