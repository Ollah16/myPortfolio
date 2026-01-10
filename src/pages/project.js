
import Projects from '../components/project';
import Header from '../components/header';
import TrackPage from '../analytics/trackPage';


const ProjectPage = () => {
    const h2 = `Project Highlights`

    return (
        <div className="flex flex-col gap-10 h-fit">
            <TrackPage page={"Projects"} />
            <Header h2={h2} />
            <Projects />
        </div>)
}

export default ProjectPage