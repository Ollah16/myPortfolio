import { NavLink } from 'react-router-dom'

export const navLinks = [
    { to: "/projects", label: "Projects" },
    { to: "/repos", label: "Repos" },
]
const NavLinks = ({ className }) => {
    const navClass = `leading-normal after:content-[''] dark:after:bg-white after:bg-black after:inline-block after:absolute after:h-1 after:w-0 after:bottom-0 hover:after:w-full after:transition-left after:duration-100 after:ease relative overflow-hidden py-4 inline-block`

    return (
        <div className={className}>
            {navLinks.map((link, index) => (
                <NavLink key={index} to={link.to} className={({ isActive }) => `${isActive ? 'after:w-full after:left-0' : 'after:left-2/4 hover:after:left-0'} ${navClass}`}>{link.label}</NavLink>
            ))}
        </div>
    )
}

export default NavLinks