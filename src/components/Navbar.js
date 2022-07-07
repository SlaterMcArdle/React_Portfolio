import { React } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/navbar.css'

function SlaterNav() {
    
    return (
        <Navbar className="portfolio-navbar" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Slater McArdle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about-me-section">About Me</Nav.Link>
                        <Nav.Link href="#project-section">Projects</Nav.Link>
                        <Nav.Link href="#contact-section">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className="navbar navbar-expand-lg navbar-lg-dark bg-dark">
        //     <a className="navbar-brand" href="#">Slater McArdle</a>
        //     <button className="navbar-toggle" type="button" dataToggle="collapse" dataTarget="#narvarText" ariaControls="navbarText" ariaExpanded="false" ariaLabel = "Toggle Navigation">
        //         <span className="navbar-toggles-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarText">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">About Me <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Projects</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Contact</a>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}

export default SlaterNav;