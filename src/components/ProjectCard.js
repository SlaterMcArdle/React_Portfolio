import { React } from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard(props) {
    return (
        <Card text="light">
            <Card.Img variant="top" src={props.image} alt={props.title}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Link href={props.github} target="blank">Github</Card.Link>
                <Card.Link href={props.live} target="blank">Live Site</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;