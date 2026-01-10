import { Link } from 'react-router-dom';

const REPOSITORIES = [
    {
        title: "Bookstore Platform - Frontend",
        link: "https://github.com/Ollah16/bookstore",
    },
    {
        title: "Bookstore Platform - Backend",
        link: "https://github.com/Ollah16/bookStoreBackEnd",
    },
    {
        title: "Inventory Management System - Frontend",
        link: "https://github.com/Ollah16/app_inventory",
    },
    {
        title: "Inventory Management System - Backend",
        link: "https://github.com/Ollah16/inventoryBE",
    },
    {
        title: "Invoice Management System - Frontend",
        link: "https://github.com/Ollah16/invoice-app",
    },
    {
        title: "Invoice Management System - Backend",
        link: "https://github.com/Ollah16/invoiceBackEnd",
    },
    {
        title: "AI Travel Companion (TripPal)",
        link: "https://github.com/Ollah16/tripbuddy",
    },
    {
        title: "Battery Monitoring Dashboard",
        link: "https://github.com/Ollah16/batterydashboard",
    },
    {
        title: "Tradex - Crypto Trading Interface",
        link: "https://github.com/Ollah16/tradeX",
    },
    {
        title: "Tradex - Trading API & Services",
        link: "https://github.com/Ollah16/tradeXserver",
    },
    {
        title: "Academic Portal - Frontend",
        link: "https://github.com/Ollah16/react-school-portal",
    },
    {
        title: "Academic Portal - Backend Services",
        link: "https://github.com/Ollah16/reactSchoolAppBackEnd",
    },
    {
        title: "Personal Portfolio Website",
        link: "https://github.com/Ollah16/myportfolio",
    },
];

const Repository = () => {

    return (
        <section className={'repo-section flex md:flex-row flex-col justify-center flex-wrap md:gap-8 gap-4 p-2'}>

            {REPOSITORIES.map((data) => (
                <Link to={data.link} key={data.title} className={`font-bold w-full text-xl block dark:hover:shadow-[0px_1px_3px_-1px_rgb(245,245,249)] hover:shadow-[0px_1px_3px_-1px_rgb(24,24,24)] hover:translate-y-[-5px] dark:bg-[#030f1c] bg-white border-[#2c2b2b99] text-black dark:border-[#ffffff33] border dark:text-white md:w-[40%] rounded-lg p-8 transition-all ease-in-out duration-300 no-underline text-center`}>
                    {data.title}
                </Link>
            ))}

        </section>
    )
}

export default Repository
