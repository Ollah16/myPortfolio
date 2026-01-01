import React from 'react'
import { Container } from 'react-bootstrap'
import Projects from '../components/project/projects';
import Header from '../components/header';
import TrackPage from '../analytics/trackPage';


const ProjectsPage = () => {
    const h2 = `My projects`
    const p = `Highlights from my projects`

    return (
        <>
            <TrackPage page={"Projects"} />
            <Container fluid>
                <Header h2={h2} p={p} />
                <Projects />
            </Container >
        </>)
}

export default ProjectsPage