
const Header = ({ h2 = null, p = null }) => {

    return (<section className="flex justify-center">
        <div className="text-center gap-4 md:w-2/4 w-3/4 flex flex-col">
            <h2 className='dark:text-[#548a98] text-black text-6xl font-bold'>{h2}</h2>
            <p className="dark:text-[#ede7e7] text-[#232222] font-light text-xl">{p}</p>
        </div>
    </section >)
}

export default Header