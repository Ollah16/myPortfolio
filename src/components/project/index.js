import MacNav from '../NavBar/macNav';
import ProjectDetail from './detail';
import Avatar from './avatar';
import tradexImage from '../../assets/tradexapp.png';
import tripPal from '../../assets/journeybuddy.png';
import inventoryImage from '../../assets/inventorySc.png';
import bookstoreImage from '../../assets/bookstore.png';
import collegeImage from '../../assets/schoolapp.png';
import invoiceImage from '../../assets/invoiceapp.png';
import oneCapImage from '../../assets/onecap.png';
import batteryDashboardImage from '../../assets/batterydashboard.png';
import cofounderImage from '../../assets/cofounder.png';
import cryptoImage from '../../assets/cryptoapp.png';

const PROJECTS = [
    {
        name: 'Tradex',
        url: 'https://trade-x-omega.vercel.app/',
        description:
            'A responsive cryptocurrency conversion platform built with React and Node.js, focusing on real-time data handling, intuitive UI flows, and performance optimisation for fast market lookups.',
        image: tradexImage,
        framework: 'ReactJS',
    },
    {
        name: 'TripPal',
        url: 'https://tripbuddy-phi.vercel.app/',
        description:
            'An AI-powered travel companion for children, built with Next.js. Designed accessible, engaging interfaces with server-side rendering for improved performance and SEO.',
        image: tripPal,
        framework: 'NextJS',
    },
    {
        name: 'Inventory Management System',
        url: 'https://inventoryapp-5900c.web.app/',
        description:
            'A scalable inventory management application using React, Redux, Node.js, and MongoDB, enabling efficient stock tracking, state-driven UI updates, and reliable data persistence.',
        image: inventoryImage,
        framework: 'ReactJS',
    },
    {
        name: 'Bookstore Platform',
        url: 'https://bookstoreapp-389b8.web.app',
        description:
            'A performant bookstore application built with React and Redux, featuring seamless product management, efficient state handling, and a responsive, user-friendly shopping experience.',
        image: bookstoreImage,
        framework: 'ReactJS',
    },
    {
        name: 'College Portal',
        url: 'https://school-app-e4abd.web.app',
        description:
            'A scalable college management portal developed with React, Redux, Node.js, and MongoDB, supporting student data management, modular UI components, and role-based workflows.',
        image: collegeImage,
        framework: 'ReactJS',
    },
    {
        name: 'Invoice Management App',
        url: 'https://invoice-app-6a126.web.app',
        description:
            'A responsive invoice management solution built with React, Redux, Node.js, and MySQL, enabling streamlined billing workflows and consistent cross-device user experiences.',
        image: invoiceImage,
        framework: 'ReactJS',
    },
    {
        name: 'Battery Analytics Dashboard',
        url: 'https://batterydashboard.vercel.app/',
        description:
            'A real-time analytics dashboard displaying battery status and historical trends, built with React, Recharts, and Framer Motion to deliver clear data visualisation and smooth interactions.',
        image: batteryDashboardImage,
        framework: 'ReactJS',
    },
    {
        name: 'CofoundersLab',
        url: 'https://cofounderslab.com/',
        description:
            'Contributed to a large-scale startup community platform, focusing on frontend feature development, UI consistency, and maintainable component architecture for a global user base.',
        image: cofounderImage,
        framework: 'ReactJS',
    },
    {
        name: 'QuidxAI',
        url: 'https://quidxai.netlify.app/',
        description:
            'An AI-driven trading assistance platform with a clean, data-focused UI, designed to help users interpret insights efficiently and make informed investment decisions.',
        image: cryptoImage,
        framework: 'ReactJS',
    },
    {
        name: 'OneCap',
        url: 'https://onecap.africa/',
        description:
            'A gamified savings and investment platform delivering engaging, user-centric financial experiences through intuitive design and responsive frontend architecture.',
        image: oneCapImage,
        framework: 'ReactJS',
    },
];

const Projects = () => {

    return (
        <section className={`flex flex-col items-center gap-16 px-2 h-fit`}
            aria-label="frontend projects"
        >
            {PROJECTS.map((project, index) => {
                const isEven = index % 2 === 0;
                const containerPosition = isEven ? "lg:left-[-2%]" : "lg:right-[-2%]";
                const gradient = isEven
                    ? "bg-[linear-gradient(45deg,#548a98,#19262c,#627484)]"
                    : "bg-[linear-gradient(45deg,#627484,#19262c,#548a98)]";

                return (
                    <article className={`lg:w-[50%] w-[80%] h-fit relative flex lg:flex-row flex-col justify-center items-center ${containerPosition}`} key={project.name}>
                        <div className={`p-8 lg:p-14 ${gradient} rounded-t-xl lg:rounded-xl`}>
                            <MacNav size={8} className='h-4 px-2 py-2' />
                            <Avatar project={project} />
                        </div>
                        <ProjectDetail project={project} index={index} />
                    </article>
                )
            })}
        </section >
    )
}

export default Projects
