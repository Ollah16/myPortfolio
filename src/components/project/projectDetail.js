import { useThemeContext } from '../../context/themeContext'
import MacNav from '../macNav';

const ProjectDetail = ({ project }) => {

    const { pageTheme } = useThemeContext()
    const { image } = project

    return (
        <section className={`projectdetail-section ${pageTheme}`}>

            <MacNav size={8} className='projectdescriptionbarstyle' />

            <div className='projectdetail-imagecontainer'>
                <img src={image} alt='...' loading='eager' />
            </div>
        </section>
    )
}

export default ProjectDetail
