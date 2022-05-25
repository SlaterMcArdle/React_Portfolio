import { React } from 'react';
import { CardGroup, Card, Container, Button, Row, Col } from 'react-bootstrap';

function Projects() {
    return (
        <Row sm={1} md={2} xl={3} className="g-4 p-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={require("../images/programeter.png")} alt="Programeter"/>
                    <Card.Body>
                        <Card.Title>Programeter</Card.Title>
                        <a href="#">Github</a>
                        <a href="#">Live Site</a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={require("../images/restroom_hunters.png")} alt="Restroom Hunters"/>
                    <Card.Body>
                        <Card.Title>Restroom Hunters</Card.Title>
                        <a href="#">Github</a>
                        <a href="#">Live Site</a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={require("../images/note_taker.png")} alt="Note Taker"/>
                    <Card.Body>
                        <Card.Title>Note Taker</Card.Title>
                        <a href="#">Github</a>
                        <a href="#">Live Site</a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={require("../images/weather_dashboard.png")} alt="Weather Dashboard"/>
                    <Card.Body>
                        <Card.Title>Weather Dashboard</Card.Title>
                        <a href="#">Github</a>
                        <a href="#">Live Site</a>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={require("../images/workday_scheduler.png")} alt="Work Day Scheduler"/>
                    <Card.Body>
                        <Card.Title>Work Day Scheduler</Card.Title>
                        <a href="#">Github</a>
                        <a href="#">Live Site</a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        // <section id="carouselIndicators" role="tablist" className="carousel slide col-10 p-0" dataInterval="false" dataRide="carousel">
        //         <ol className="carousel-indicators">
        //             <li dataTarget="#carouselIndicators" dataSlideTo="0" className="active"></li>
        //             <li dataTarget="#carouselIndicators" dataSlideTo="1"></li>
        //             <li dataTarget="#carouselIndicators" dataSlideTo="2"></li>
        //             <li dataTarget="#carouselIndicators" dataSlideTo="3"></li>
        //             <li dataTarget="#carouselIndicators" dataSlideTo="4"></li>
        //         </ol>
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <div dataCaption="#caption1">
        //                     <a href="https://glacial-garden-96019.herokuapp.com/">
        //                         <img className="d-block w-100" src="./assets/images/programeter.png" alt="First slide"></img>
        //                     </a>
        //                 </div>
        //                 <div className="carousel-caption text-light align-middle">
        //                     <h2 className="align-middle">
        //                         <span className="align-middle">Programeter</span>
        //                         <a href="https://github.com/Programeter/Programeter">
        //                             <img width="70rem" src="../images/GitHub_Logo_White.png" alt="Github Logo"></img>
        //                         </a>
        //                     </h2>
        //                 </div> 
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100" src="../images/restroom_hunters.png" alt="Second slide"></img>
        //                 <div className="carousel-caption d-none d-md-block text-light">
        //                     <h5>Restroom Hunters</h5>
        //                     <p>Public restroom locator</p>
        //                 </div> 
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100" src="../images/note-taker.png" alt="Third slide"></img>
        //                 <div className="carousel-caption d-none d-md-block text-light">
        //                     <h5>Note Taker</h5>
        //                     <p>Note taking web app using NodeJS and ExpressJS backend</p>
        //                 </div> 
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100" src="../images/weather_checker.png" alt="Fourth slide"></img>
        //                 <div className="carousel-caption d-none d-md-block text-light">
        //                     <h5>Weather Dashboard</h5>
        //                     <p>Get current and forecasted weather by city</p>
        //                 </div> 
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100" src="../images/workday_scheduler.png" alt="Fifth slide"></img>
        //                 <div className="carousel-caption d-none d-md-block text-light">
        //                     <h5>Work Day Scheduler</h5>
        //                     <p>View and update your daily task list</p>
        //                 </div> 
        //             </div>
        //         </div>
        //         <a className="left carousel-control" href="#carouselIndicators" role="button" dataSlide="prev">
        //             <span className="glyphicon glyphicon-chevron-left"></span>
        //           </a>
        //           <a className="right carousel-control" href="#carouselIndicators" role="button" dataSlide="next">
        //             <span className="glyphicon glyphicon-chevron-right"></span>
        //           </a>
        //     </section>
    )
}

export default Projects;