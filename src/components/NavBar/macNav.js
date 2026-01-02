import { IoRadioButtonOffSharp } from "react-icons/io5";

const MacNav = ({ size, label = null, icon = null, className = null }) => {
    return (
        <div className={`${className} bg-[#868383] text-black dark:text-white px-2 rounded-t-xl rounded-b-none items-center justify-between py-1 flex h-8 w-full font-bold`}>
            <span className="flex">
                {Array.from({ length: 3 }).map((_, index) =>
                    (<IoRadioButtonOffSharp key={index} size={size} className={`${index === 0 ? "bg-[#f86a6a] text-[#f86a6a]" : index === 1 ? "text-[#ffa500] bg-[#ffa500] mx-[.2em]" : "text-[#008000] bg-[#008000]"} rounded-full my-0`} />)
                )}
            </span>
            <span className="flex items-center">{label}{icon}</span>
            <span></span>
        </div>
    )
}

export default MacNav
