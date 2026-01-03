import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { useThemeContext } from '../context/themeContext';

const links = [{
    to: "mailto:arowoloalao4@gmail.com",
    dataName: "Email",
    iconClass: `bg-[#ffffffb3] text-[#030f1c] rounded-[50%] p-[2px]`
},
{
    to: "https://github.com/arowoloalao4",
    dataName: "GitHub",
    iconClass: `bg-[#ffffffb3] text-[#030f1c] rounded-[50%] p-[2px]`
}]


const Footer = () => {

    const { pageTheme } = useThemeContext()
    const linkClass = `before:content-[attr(data-name)] before:hidden hover:before:block before:absolute before:rounded before:px-1 before:top-[-12px] md:before:top-[-10px] before:text-black before:text-xs hover:before:bg-[#626264] hover:before:text-white dark:hover:before:bg-[#ffffffb3] dark:hover:before:text-black`
    const isEmail = (data) => data.includes("Email")

    return (
        <footer className={'dark:bg-[#030f1c] bg-[#1a1b1b] dark:text-[#ffffffb3] m-0 w-full flex md:flex-row flex-col gap-2 md:gap-0 justify-evenly md:!p-4 p-2 items-center text-[#ffffffb3]'}>
            <div className='flex items-center justify-center'>
                <FaCode size={19} className={pageTheme === 'lightmode' ?
                    "lightmode-link" : 'darkmode-link me-2'} />
                <span>Software Engineer</span>
            </div>
            <div className='text-[#050a0f] flex items-center justify-center gap-2 md:gap-5 relative'>
                {links.map((d, index) => {
                    const is_Email = isEmail(d.dataName)
                    return (
                        <Link key={index} to={d.to}
                            data-name={d.dataName}
                            className={linkClass}>
                            {is_Email ?
                                <MdOutlineMail size={19} className={d.iconClass} /> :
                                <FaGithubSquare size={19} className={d.iconClass} />}
                        </Link>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer
