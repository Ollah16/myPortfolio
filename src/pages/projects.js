
import Projects from '../components/project/projects';
import Header from '../components/header';
import TrackPage from '../analytics/trackPage';


const ProjectsPage = () => {
    const h2 = `My projects`
    const p = `Highlights from my projects`

    return (
        <div className="flex flex-col gap-10 h-fit">
            <TrackPage page={"Projects"} />
            <Header h2={h2} p={p} />
            <Projects />
        </div>)
}

export default ProjectsPage