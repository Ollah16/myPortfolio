import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import TrackPage from './trackPage'
import NavBar from '../components/NavBar'

const Layout = () => {
    return (
        <div className="bg-[#b6b2b2] dark:bg-[#17212b] dark:text-white text-[rgb(33,33,33)] h-full flex flex-col gap-16 overflow-hidden">
            <TrackPage page={"Portfolio"} />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
