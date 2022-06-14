import { React } from 'react';
import{ Button, Container, Row, Col } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';

function Contact() {
    return (
        <Container id="container-section" fluid className="align-middle py-3">
            <div id="contact-section" className="col-12 row justify-content-around">
                <h2>Contact</h2>
                <hr/>
                <Row>
                    <Col>
                        <Button variant="secondary" href="https://github.com/WindWalker-92"><img src={require("../images/GitHub-Mark-32px.png")} alt="github logo" wdth="20px" height="20px" style={{paddingRight: 5}}/>Github</Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" href="https://www.linkedin.com/in/slatermcardle/"><img src={require("../images/LI-In-Bug.png")} alt="linkedin logo" width="24px" height="20px" style={{paddingRight: 2}}></img>Linkedin</Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" href="mailto:slater.mcardle@outlook.com"><Envelope width="20px" height="20px" style={{ paddingRight: 5, paddingBottom: 2}}/>Email Me</Button>
                    </Col>
                </Row>
                
            </div>
        </Container>
    )
        
}

export default Contact;