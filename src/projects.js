import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BiX } from "react-icons/bi";
import useMode from './custom-hook/useMode';


const ProjectsComponent = ({ handleDropDown, dropdown }) => {

    const [myProjects, setMyProjects] = useState([
        // { name: 'Da-Manager: Pioneering Digital Solutions', url: 'https://da-manager.com' },
        // { name: 'Medillery: Empowering Designers, Enriching Society', url: 'https://medillery.com' },
        {
            name: 'Bookstore Application',
            url: 'https://bookstoreapp-389b8.web.app',
            description: 'Crafted a bookstore app with React.js, Redux, Node.js, MongoDB, Firebase (frontend), and Vercel (backend) for seamless book additions.',
        },
        {
            name: 'Inventory Application',
            url: 'https://inventoryapp-5900c.web.app/',
            description: "Built an efficient inventory app with React.js, Redux, Node.js, and MongoDB. Frontend deployed on Firebase, backend on Vercel."
        },
        {
            name: 'School Application',
            url: 'https://school-app-e4abd.web.app/',
            description: 'Developed a scalable school portal with React.js, Redux, Node.js, and MongoDB. Frontend on Firebase, backend on Vercel.'
        },
        {
            name: 'Invoice Application',
            url: 'https://invoice-app-6a126.web.app/',
            description: 'Built an invoice app with React.js, Redux, Node.js, and MYSQL. Responsive design. Frontend on Firebase, backend on Vercel.'
        },
        {
            name: 'Todo Application',
            url: 'https://mytodoapp-37742.web.app/',
            description: 'Crafted a user-friendly todo list with React, demonstrating efficient task management. Frontend on Firebase.'
        },
        {
            name: 'Portfolio Application',
            url: 'https://myportfolio-8bb3f.web.app',
            description: 'Built a standout portfolio with React.js, HTML5, and CSS for an engaging user experience.'
        },
        {
            name: 'Exchange Application',
            url: 'https://xchangepage-a9c1b.web.app/',
            description: 'Developed a currency exchange app with real-time rates for various countries and dynamic rate generation functionality, Frontend on Firebase..'
        }

    ]);

    const [mode, handleMode] = useMode()

    return (<Container fluid
        className={mode === 'lightmode' ?
            'homepage-lightmode' : 'homepage-darkmode'}>

        <nav
            className={mode === 'lightmode' ?
                'navbar-lightmode' : 'navbar-darkmode'}>

            <a href="/">Olaoluwa</a>

            <section >
                <div >
                    <span className={dropdown ?
                        mode === 'lightmode' ?
                            'dropdown-lightmode' :
                            'dropdown-darkmode' :
                        'span-links'}>
                        <button
                            className={mode === 'lightmode' ?
                                'canceltogglebtn-lightmode' : 'canceltogglebtn-darkmode'}
                            onClick={() => handleDropDown()}>
                            <BiX size={32} />
                        </button>

                        <a href="/">Home</a>
                        <a href="projects">Projects</a>
                        <a href="/repos">Repositories</a>
                    </span>


                    <button className={mode === 'lightmode' ?
                        'lightmode-btn' : 'darkmode-btn'}
                        onClick={() => handleMode()}

                        data-name={mode === 'lightmode' ?
                            'switch to dark mode' :
                            'switch to light mode'}>

                        {mode === 'lightmode' ?
                            <MdOutlineNightlight size={25} />
                            :
                            <MdLightMode size={25} />
                        }

                    </button>
                </div>

                <div>
                    <button onClick={() => handleDropDown()}
                        className={mode === 'lightmode' ?
                            'togglebtn-lightmode' : 'togglebtn-darkmode'}>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                    </button>
                </div>
            </section>
        </nav >


        <section className={mode === 'lightmode' ?
            'projects-section-lightmode' : 'projects-section-darkmode'}>
            <h2>My projects</h2>
            <p>Highlights from my projects</p>
        </section>

        <section className='description-section'>

            {myProjects.map((project, index) => (
                <div className={mode === 'lightmode' ?
                    'description-lightmode' : 'description-darkmode'} key={index}>

                    <section className={mode === 'lightmode' ?
                        'projects-background-lightmode' : 'projects-background-darkmode'}>

                        <div>
                            <IoRadioButtonOffSharp className='radioone' size={10} />
                            <IoRadioButtonOffSharp className='radiotwo' size={10} />
                            <IoRadioButtonOffSharp className='radiothree' size={10} />
                        </div>

                    </section>

                    <section className={mode === 'lightmode' ?
                        'projects-description-lightmode' : 'projects-description-darkmode'}>

                        <div>
                            <h4>
                                {project.name}
                            </h4>

                            <Link className='text-white' to={project.url}>
                                <FaExternalLinkAlt className='project-link' />
                            </Link>
                        </div>

                        <div>
                            <span><TfiHtml5 /> HTML</span>
                            <span><FaCss3Alt /> CSS</span>
                            <span><TbBrandJavascript /> JS</span>
                        </div>

                        <p>{project.description}</p>

                    </section>

                </div>
            ))}

        </section>

        <section className={mode === 'lightmode' ?
            'footer-lightmodesection' : 'footer-darkmodesection'}>
            <div>
                <FaCode size={19} className={mode === 'lightmode' ?
                    "lightmode-link" : 'darkmode-link me-2'} />
                Web Developer
            </div>

            <div>
                <Link to={'mailto:olaoluwa_oke@outlook.com'}
                    data-name="Email">
                    <MdOutlineMail size={19} className={mode === 'lightmode' ?
                        "lightmode-link" : 'darkmode-link'}
                    />
                </Link>

                <Link to={'https://www.linkedin.com/in/olaoluwa-oke-478a7b298/'}
                    data-name="Linkedln">
                    <FaLinkedin size={19} className={mode === 'lightmode' ?
                        "lightmode-link" : 'darkmode-link'} />
                </Link>

                <Link to={'https://github.com/Ollah16/'}
                    data-name="GitHub">
                    <FaGithubSquare size={19} className={mode === 'lightmode' ?
                        "lightmode-link" : 'darkmode-link'} />
                </Link>
            </div>
        </section >


    </Container >)
}

export default ProjectsComponent