
import Projects from '../components/project';
import Header from '../components/header';
import TrackPage from './trackPage';


const ProjectPage = () => {
    const title = `Project Highlights`

    return (
        <div className="flex flex-col gap-10 h-fit">
            <TrackPage page={"Projects"} />
            <Header title={title} />
            <Projects />
        </div>)
}

export default ProjectPage