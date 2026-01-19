
const Header = ({ title = null, p = null }) => {

    const placeholder = <div className="h-[60px] w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4" />
    const titleHolder = <h2 className='dark:text-[#548a98] text-black text-6xl font-bold'>{title}</h2>

    return (
        <section className="flex justify-center">
            <div className="text-center gap-4 md:w-2/4 w-3/4 flex flex-col">
                {title ? titleHolder : placeholder}
                <p className="dark:text-[#ede7e7] text-[#232222] font-light text-xl">{p}</p>
            </div>
        </section >)
}

export default Header