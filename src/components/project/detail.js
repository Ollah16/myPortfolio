import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiReactjsFill } from 'react-icons/ri';

const ProjectDetail = ({ project, index }) => {

    const { url, name, description, framework } = project

    return (<section className={`lg:w-[50%] text-ellipsis overflow-hidden lg:h-[40%] rounded-none lg:rounded-xl ${index % 2 === 0 ? "lg:left-[-42%] lg:rounded-r-none" : "lg:right-[-42%] lg:rounded-l-none"} group dark:bg-[#030f1c] bg-[white] hover:bg-[#ffffffcc] text-black dark:hover:bg-[#030f1ccc] transition-all ease-in-out duration-150 dark:text-white p-4 lg:absolute relative rounded-none w-full flex h-fit flex-col text-ellipsis cursor-pointer gap-1`}>

        <div className='flex justify-between items-center'>
            <h1 className="
                font-bold text-2xl lg:text-xl
                truncate
                w-[80%]
                ">
                {name}
            </h1>
            <Link className='no-underline' to={url}>
                <FaExternalLinkAlt className='group-hover:dark:text-[#6da3b1e6] transition-[color] text-[#6da3b1] ease-in-out duration-300 text-2xl' />
            </Link>
        </div>
        <div className="flex items-center gap-1">
            <RiReactjsFill className="text-[#61DAFB]" />
            <span>{framework}</span>
        </div>
        <div className="w-full">
            <p className="text-lg lg:text-sm font-light m-0 leading-normal
                   overflow-hidden lg:text-ellipsis
                   lg:line-clamp-2 xl:line-clamp-none">
                {description}
            </p>
        </div>

    </section >)
};

export default ProjectDetail
