import { React } from 'react';
import { Jumbotron, Row, Container } from 'react-bootstrap';

function AboutMe() {
    return (
        <Jumbotron id="about-me-section" className="justify-content-around bg-secondary rounded d-flex flex-wrap align-items-center m-3 ">
            <Row>
                <Container className="col-xs-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 d-inline-block align-middle p-5">
                    <div id="about-me-image-container">
                        <img src={require("../images/me.jpg")} className="rounded-circle img-fluid" alt="Slater's smiling face in a three piece suit."></img>
                    </div>
                </Container>
                <Container id="about-me-section" className="col-md-12 col-lg-6 align-middle">
                    <h2>About Me</h2>
                    <div id="about-me-text-container">
                        <p>
                            MERN stack developer leveraging a diverse background to create a seamless, functional user interface. 
                            Trained in physics and working in a wide variety of industries from automation to maritime to retail, I’ve learned how to work with the user to develop a robust, intuitive product. 
                            I assisted in developing a django web app to control multi-channel fluid dispensing. 
                            My team of two and I developed a frontend web application that guides users to the nearest available restroom. 
                            Most recently I led a team of three developing a full stack web app providing a professional matching service for programmers. 
                            I’m looking to utilize my multifaceted skill set to provide users an intuitive and reliable web experience. 
                        </p>
                    </div>
                </Container>
            </Row>
        </Jumbotron>
    )
}

export default AboutMe;
