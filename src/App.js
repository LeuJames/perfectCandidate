import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import { Navbar, Nav, NavDropdown, Modal, Button } from 'react-bootstrap';
import Main from './Components/Main'
import Sandwich from './Components/Sandwich';
import Pizza from './Components/Pizza';
import Burger from './Components/Burger';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className="container-lg">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=>setShow(true)} >Contact</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href={process.env.PUBLIC_URL + "/sandwich"}>Web Developer Sandwich</NavDropdown.Item>
              <NavDropdown.Item href={process.env.PUBLIC_URL + "/pizza"}>Business Professional Pizza</NavDropdown.Item>
              <NavDropdown.Item href={process.env.PUBLIC_URL + "/burger"}>Soft Skills Burger</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={process.env.PUBLIC_URL + "/"}>All Recipes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <div className="jumbotron" style={{position : 'relative', zIndex: "10"}}>
        <h1 className="display-4">The Perfect Candidate Cookbook</h1>
        <h3 className="lead">Celebrity Chef / Job Candidate: <span style={{fontStyle: "italic"}}>James Leu</span></h3>
        <hr className="my-4"/>
        <h4>Are you a hiring manager or recruiter looking for the perfect candidate? We have just the recipes for you!</h4>
      </div>
      <Router>
        <Main path={process.env.PUBLIC_URL + '/'}/>
        <Sandwich path={process.env.PUBLIC_URL + '/sandwich'}/>
        <Pizza path={process.env.PUBLIC_URL + '/pizza'}/>
        <Burger path={process.env.PUBLIC_URL + '/burger'}/>
      </Router>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Interested in hiring me? Use the form below to get in touch!</h5>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter Email"/>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
          </div>
          <button className="btn btn-primary align-center" type="submit">Submit</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <a href="https://github.com/LeuJames" target="_blank">
          <img src={require('./Images/github.png')} style={{ maxWidth: '3rem', maxHeight:'3rem'}} alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/james-leu-4a59bb85/" target="_blank">
          <img src={require('./Images/linkedIn.png')} style={{ maxWidth: '3rem', maxHeight:'3rem'}} alt="Linked In"/>
        </a>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>

    </div>
  );
}

export default App;
