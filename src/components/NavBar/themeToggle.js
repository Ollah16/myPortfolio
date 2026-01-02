import { MdLightMode, MdOutlineNightlight } from "react-icons/md"
import { useThemeContext } from "../../context/themeContext"

const ThemeToggle = () => {
    const { toggleTheme, currTheme } = useThemeContext()
    const themeIcon = currTheme === 'light' ? <MdOutlineNightlight size={25} /> : <MdLightMode size={25} />

    return (
        <div>
            <button className={`p-2`}
                onClick={() => toggleTheme()}>
                {themeIcon}
            </button>
        </div>
    )
}

export default ThemeToggle