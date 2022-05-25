import { React } from 'react';
import{ Button, Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid>
            <div id="contact-section" className="col-12 row justify-content-around">
                <h2>Contact</h2>
                <hr/>
                <Row>
                    <Col>
                        <Button variant="secondary"><img src="/images/GitHub-Mark-32px.png" alt="github logo"></img> <a href="https://github.com/WindWalker-92">Github</a></Button>
                    </Col>
                    <Col>
                        <Button variant="secondary"><img src="/images/LI-In-Bug.png" alt="linkedin logo"></img> <a href="https://www.linkedin.com/in/slatermcardle/">Linkedin</a></Button>
                    </Col>
                    <Col>
                        <Button variant="secondary"><a href="mailto:slater.mcardle@outlook.com">&#9993 Email me</a></Button>
                    </Col>
                </Row>
                
            </div>
        </Container>
    )
        
}

export default Contact;