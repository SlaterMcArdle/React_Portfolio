import { React } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import '../styles/projects.css'
import projects from '../resources/projects';

function Projects() {
    return (
        // <Container className="project-container">
            <Row id="project-section" xs={1} md={2} xl={3} className="g-5 p-3">
                {projects.map((project) => {
                    return (<Col>
                        <ProjectCard 
                            image={project.image}
                            title={project.title}
                            github={project.github}
                            live={project.live}/>
                    </Col>)
                })}
            </Row>
        // </Container>
        
    )
}

export default Projects;