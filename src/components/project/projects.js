import MacNav from '../NavBar/macNav';
import Avatar from './avatar';
import ProjectDetail from './projectDetail';


const projectData = () => [
    // { name: 'Da-Manager: Pioneering Digital Solutions', url: 'https://da-manager.com' },
    // { name: 'Medillery: Empowering Designers, Enriching Society', url: 'https://medillery.com' },,
    {
        name: 'Tradex',
        url: 'https://trade-x-omega.vercel.app/',
        description: "Developed a cryptocurrency converter with React.js and Node.js.",
        image: require('../../assets/tradexapp.png')
    },
    {
        name: 'TripPal',
        url: 'https://tripbuddy-phi.vercel.app/',
        description: "A journey AI buddy for children with built with next.js.",
        image: require('../../assets/journeybuddy.png')
    },
    {
        name: 'Inventory',
        url: 'https://inventoryapp-5900c.web.app/',
        description: "Built an efficient inventory app with React.js, Redux, Node.js, and MongoDB.",
        image: require('../../assets/inventorySc.png')
    },
    {
        name: 'Bookstore',
        url: 'https://bookstoreapp-389b8.web.app',
        description: 'Performant bookstore app crafted with React.js, Redux, Node.js, MongoDB for seamless book additions.',
        image: require('../../assets/bookstore.png')
    },
    {
        name: 'College',
        url: 'https://school-app-e4abd.web.app',
        description: 'Developed a scalable college portal with React.js, Redux, Node.js, and MongoDB.',
        image: require('../../assets/schoolapp.png')
    },
    {
        name: 'Invoice',
        url: 'https://invoice-app-6a126.web.app',
        description: 'Built an invoice app with React.js, Redux, Node.js, and MYSQL. Responsive design.',
        image: require('../../assets/invoiceapp.png')
    },
    {
        name: 'Battery Dashboard',
        url: 'https://batterydashboard.vercel.app/',
        description: 'The dashboard provides real-time battery status, charge level, and historical data visualization using Recharts and Framer Motion for smooth animations.',
        image: require('../../assets/batterydashboard.png')
    },
    {
        name: 'Cofounderslab',
        url: 'https://cofounderslab.com/',
        description: 'Cofounderslab is the largest startup community on the internet that matches builders with cofounders and advisors.',
        image: require('../../assets/cofounder.png')
    },
    {
        name: 'Quidxai',
        url: 'https://quidxai.netlify.app/',
        description: 'QuidxAi is an innovative AI developed to aid professional and new traders make the best trading and investment decisions.',
        image: require('../../assets/cryptoapp.png')
    },
    {
        name: 'Onecap',
        url: 'https://onecap.africa/',
        description: 'Gamified savings and investment platform',
        image: require('../../assets/onecap.png')
    },
    {
        name: 'Portfolio',
        url: 'https://myportfolio-8bb3f.web.app',
        description: 'A standout portfolio developed with React.js, HTML5, and CSS for an engaging user experience.',
        image: require('../../assets/portfolio.png')
    },
];

const Projects = () => {
    const projects = projectData()

    return (
        <section className={`flex flex-col items-center gap-16 px-2 h-fit`}>
            {projects.map((project, index) => (
                <div className={`projectdescription-container lg:w-[50%] w-[80%] h-fit relative flex lg:flex-row flex-col justify-center items-center ${index % 2 === 0 ? "lg:left-[-2%]" : "lg:right-[-2%]"}`} key={index}>
                    <div className={`p-8 lg:p-14 ${index % 2 === 0 ? "bg-[linear-gradient(45deg,#548a98,#19262c,#627484)]" : "bg-[linear-gradient(45deg,#627484,#19262c,#548a98)]"} rounded-t-xl lg:rounded-xl`}>
                        <MacNav size={8} className='h-4 px-2 py-2' />
                        <Avatar project={project} />
                    </div>
                    <ProjectDetail project={project} index={index} />
                </div>
            ))}
        </section >
    )
}

export default Projects
