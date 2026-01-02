import { BiX } from "react-icons/bi"
import DropDownBtn from "./dropDownBtn"
import NavLinks from "./navLinks"

const DropDownContent = ({ dropdown, setDropDown }) => {
    return (
        <section className={`backdrop:blur-3xl md:hidden flex absolute z-[150] left-0 right-0 w-full h-[22rem] transition-[top] ease-in-out duration-500 dark:bg-[#01070ce6] bg-[#262727e6] text-white ${dropdown ?
            "top-0" :
            'top-[-500px]'}`}>

            <div className="w-full relative flex justify-center items-center">
                <div>
                    <DropDownBtn
                        className={`p-2 dark:text-[#62d4f7] dark:hover:bg-[#f8f6f933] hover:bg-[#3b3b3c] text-white h-[2.8rem] rounded-md transition-all ease-in-out duration-300 border-0 absolute top-2 right-3`}
                        icon={<BiX size={32} />}
                        onClick={() => setDropDown(false)} />
                </div>

                <NavLinks className={`flex flex-col no-underline w-full items-center justify-between gap-10`} />
            </div>

        </section>
    )
}

export default DropDownContent