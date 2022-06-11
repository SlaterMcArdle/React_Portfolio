import { React } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/projects.css'

function Projects() {
    return (
        <Row id="project-section" xs={1} md={2} xl={3} className="g-4 p-3">
            <Col>
                <Card text="light">
                    <Card.Img variant="top" src={require("../images/encanto-flowers.png")} alt="Encanto Flower Delivery"/>
                    <Card.Body>
                        <Card.Title>Encanto Flower Delivery</Card.Title>
                        <Row xs={1} sm={2}>
                            <Col>
                                <Button className="portfolio-btn" href="https://github.com/encantoflowers/encanto-flowers" target="blank" size="lg">Github</Button>
                            </Col>
                            <Col>
                                <Button className="portfolio-btn" href="https://encanto-flowers.herokuapp.com/" target="blank" size="lg">Live Site</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card text="light">
                    <Card.Img variant="top" src={require("../images/programeter.png")} alt="Programeter"/>
                    <Card.Body>
                        <Card.Title>Programeter</Card.Title>
                        <Row xs={1} sm={2}>
                            <Col>
                                <Button className="portfolio-btn" href="https://github.com/Programeter/Programeter" target="blank" size="lg">Github</Button>
                            </Col>
                            <Col>
                                <Button className="portfolio-btn" href="https://glacial-garden-96019.herokuapp.com/login" target="blank" size="lg">Live Site</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card text="light">
                    <Card.Img variant="top" src={require("../images/restroom_hunters.png")} alt="Restroom Hunters"/>
                    <Card.Body>
                        <Card.Title>Restroom Hunters</Card.Title>
                        <Row xs={1} sm={2}>
                            <Col>
                                <Button className="portfolio-btn" href="https://github.com/therestroomhunters/public-restroom-search" target="blank" size="lg">Github</Button>
                            </Col>
                            <Col>
                                <Button className="portfolio-btn" href="https://therestroomhunters.github.io/public-restroom-search/" target="blank" size="lg">Live Site</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card text="light">
                    <Card.Img variant="top" src={require("../images/note_taker.png")} alt="Note Taker"/>
                    <Card.Body>
                        <Card.Title>Note Taker</Card.Title>
                        <Row xs={1} sm={2}>
                            <Col>
                                <Button className="portfolio-btn" href="https://github.com/SlaterMcArdle/Note_Taker" target="blank" size="lg">Github</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card text="light">
                    <Card.Img variant="top" src={require("../images/weather_dashboard.png")} alt="Weather Dashboard"/>
                    <Card.Body>
                        <Card.Title>Weather Dashboard</Card.Title>
                        <Row xs={1} sm={2}>
                            <Col>
                                <Button className="portfolio-btn" href="https://github.com/SlaterMcArdle/Weather_Dashboard" target="blank" size="lg">Github</Button>
                            </Col>
                            <Col>
                                <Button className="portfolio-btn" href="https://slatermcardle.github.io/Weather_Dashboard/" target="blank" size="lg">Live Site</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card text="light">
                    <Card.Img variant="top" src={require("../images/workday_scheduler.png")} alt="Work Day Scheduler"/>
                    <Card.Body>
                        <Card.Title>Work Day Scheduler</Card.Title>
                        <Row xs={1} sm={2}>
                            <Col>
                                <Button className="portfolio-btn" href="https://github.com/SlaterMcArdle/Work_Day_Scheduler" target="blank" size="lg">Github</Button>
                            </Col>
                            <Col>
                                <Button className="portfolio-btn" href="https://slatermcardle.github.io/Work_Day_Scheduler/" target="blank" size="lg">Live Site</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Projects;