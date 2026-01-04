import React from 'react'
import { Link } from 'react-router-dom';

const repoData = [
    {
        title: 'Bookstore Application',
        link: 'https://github.com/arowoloalao4/bookstore'
    },
    {
        title: 'AI Journey Application',
        link: 'https://github.com/arowoloalao4/tripbuddy'
    },
    {
        title: 'Inventory Application',
        link: 'https://github.com/arowoloalao4/inventoryApp'
    },
    {
        title: 'Battery Dashboard',
        link: 'https://github.com/arowoloalao4/batterydashboard'
    },
    {
        title: 'Invoice Application',
        link: 'https://github.com/arowoloalao4/invoiceapp'
    },
    {
        title: 'College Application',
        link: 'https://github.com/arowoloalao4/schooldashboard'
    },
    {
        title: 'Portfolio Application',
        link: 'https://github.com/arowoloalao4/portfolio'
    },
    {
        title: 'School Server',
        link: 'https://github.com/arowoloalao4/schooldashboardBE'
    },
    {
        title: 'Inventory Server',
        link: 'https://github.com/arowoloalao4/inventoryAppBE'
    },
    {
        title: 'Bookstore Server',
        link: 'https://github.com/arowoloalao4/bookstoreBE'
    },
    {
        title: 'Invoice Server',
        link: 'https://github.com/arowoloalao4/invoiceBE'
    },
    {
        title: 'Tradex Application',
        link: 'https://github.com/arowoloalao4/tradex'
    },
    {
        title: 'Tradex Server',
        link: 'https://github.com/arowoloalao4/tradexserver'
    }

];

const Repository = () => {

    return (
        <section className={'repo-section flex md:flex-row flex-col justify-center flex-wrap md:gap-8 gap-4 p-2'}>

            {repoData.map((data, index) => (
                <Link to={data.link} key={index} className={`font-bold w-full text-xl block dark:hover:shadow-[0px_1px_3px_-1px_rgb(245,245,249)] hover:shadow-[0px_1px_3px_-1px_rgb(24,24,24)] hover:translate-y-[-5px] dark:bg-[#030f1c] bg-white border-[#2c2b2b99] text-black dark:border-[#ffffff33] border dark:text-white md:w-[40%] rounded-lg p-8 transition-all ease-in-out duration-300 no-underline text-center`}>
                    {data.title}
                </Link>
            ))}

        </section>
    )
}

export default Repository
