import React,  {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const Pizza = () => {
  const [pizza, setPizza] = useState([]);
  const [show, setShow] = useState('');
  const [details, setDetails] = useState('');

  const handleClose = () => setShow(false);
  const handleCloseDetails = () => setDetails('');

  const checkPizza = () => {
    const perfectPizza = ['veggies', 'meat', 'cheese', 'marinara', 'crust'];
    if(pizza.length !== perfectPizza.length) {
      setShow('fail');
      return;
    }
    for(let i = 0; i < pizza.length; i++) {
      if(pizza[i] !== perfectPizza[i]) {
        setShow('fail');
        return;
      }
    }
    setShow('success');
    setPizza([]);
    }

  return (
    <div>
      <h2 className="text-center" style={{position : 'relative', zIndex: "10"}}>Business Professional Pizza</h2>
      <div className="row">
        <div className='m-4 text-center' style={{position : 'relative', zIndex: "10"}}>
          <h3>Add the ingredients in this order!</h3>
          <ol className='text-left'>
            <li> Add B.S.B.A. in Finance & Accounting</li>
            <li> Add MBA in Finance</li>
            <li> Add Internal Audit Work Experience</li>
            <li> Add Operations Management Experience</li>
            <li> Add Project Management Experience</li>
            <li>Click the button below to taste what you made!</li>
          </ol>
          <button className="btn btn-primary" onClick= {checkPizza}>6. Taste Pizza</button>
          <button className= "btn btn-danger m-4" onClick={()=>setPizza([])}>Reset Pizza</button>
        </div>
        <div className='col-5 m-5 text-center text-bottom' style={{maxHeight: '35vh', position: "fixed", right: '16rem', bottom: '5rem' }}>
          {pizza.map((ingredient, idx) => {
            return (
              <div key={idx}>
                <img className="img-fluid"  style={{zIndex: pizza.length - idx, maxHeight: '24rem', position: "fixed", right: '18rem', bottom: '5rem'}} src={require(`../Images/pizza/${ingredient}.png`)} alt=""/>
              </div>
            )
          })}
          <img className="img-fluid" style={{position: 'fixed', right: '15rem', bottom: '2rem', maxHeight: '30rem', marginTop : "-5rem"}} src= {require("../Images/pizza/plate.png")} alt=""/>
        </div>
      </div>
      <div className="jumbotron p-5">
        <h2 style={{position : 'relative', zIndex: "10"}}>Ingredients:</h2>
        <div className="row">
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/business/bsba.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">1. B.S.B.A - Finance & Accounting </h5>
              <div className='card-text'>
                <h6>University of Arkansas</h6>
                <p>May 2014</p>
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails('bsba')} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setPizza(['crust', ...pizza])} className="btn btn-primary m-1">Add To Pizza</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/business/mba.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">2. MBA - Finance</h5>
              <div className='card-text'>
                <h6>University of Arkansas</h6>
                <p>May 2015</p>
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails('mba')} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setPizza(['marinara', ...pizza])} className="btn btn-primary m-1">Add To Pizza</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/business/audit.png")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">3. Internal Audit Work Experience</h5>
              <div className='card-text'>
                <h6>Exxon Mobil</h6>
                <p>June 2015 - June 2016</p>
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails('audit')} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setPizza(['cheese', ...pizza])} className="btn btn-primary m-1">Add To Pizza</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/business/operations.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">4. Operations Management Experience</h5>
              <div className='card-text'>
                <h6>Dr. Leu's Pathways to Wellness</h6>
                <p>July 2016 - Present</p>
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails('operations')} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setPizza(['meat', ...pizza])} className="btn btn-primary m-1">Add To Pizza</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/business/project.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">5. Project Management Experience</h5>
              <div className='card-text'>
                <h6>Dr. Leu's Pathways to Wellness</h6>
                <p>July 2016 - Present</p>
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails('project')} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setPizza(['veggies', ...pizza])} className="btn btn-primary m-1">Add To Pizza</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show === 'success' ? true : false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congrats!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>You just created a perfect Business Professional Pizza! And like this pizza, Chef/Job Candidate James Leu has all of these ingredients to fill your business professional candidate needs!</h5>
          <form>
            <h6>Interested in hiring me? Use the form below to get in touch!</h6>
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
            <img src={require('../Images/github.png')} style={{ maxWidth: '4rem', maxHeight:'4rem'}} alt="github"/>
          </a>
          <a href="https://www.linkedin.com/in/james-leu-4a59bb85/" target="_blank">
            <img src={require('../Images/linkedIn.png')} style={{ maxWidth: '4rem', maxHeight:'4rem'}} alt="Linked In"/>
          </a>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show === 'fail' ? true : false}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yuck!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <h5>Your creation has displeased Chef Ramsey, please try again...</h5>
            <img className="img-fluid" src={require('../Images/pizza/wrong.jpg')} alt=""/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={details === 'bsba' ? true : false} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>B.S.B.A - Finance & Accounting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>University of Arkansas</h6>
          <p>May 2014</p>
          <ul>
            <li>Awarded Summa Cum Laude</li>
            <li>J.B. Hunt - Internal Audit Internship</li>
            <li>Minors in Economics & Spanish</li>
            <li>Language & Culture Study Abroad - Spain</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={details === 'mba' ? true : false} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>MBA - Finance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>University of Arkansas</h6>
          <p>May 2015</p>
          <ul>
            <li>Awarded Outstanding MBA Student</li>
            <li>Henkel Corporation - Consumer Packaged Goods Internship</li>
            <li>Business & Culture Study Abroad - India</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={details === 'audit' ? true : false} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Internal Audit Work Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Exxon Mobil</h6>
          <p>Internal Auditor</p>
          <p>June 2015 - June 2016</p>
          <ul>
            <li>Participated in audits of the US Downstream - Refining & Supply organization to ensure internal controls processes were functioning effectively</li>
            <li>Led team of peers in audit of multi-million dollar vendor to ensure contract compliance; issued findings report to senior leadership</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={details === 'operations' ? true : false} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Operations Management Work Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Dr. Leu's Pathways to Wellness</h6>
          <p>Business Manager and Co-Owner</p>
          <p>July 2016 - Present</p>
          <ul>
            <li>Managed daily client care and supplement retail operations of over $900k in annual revenue</li>
            <li>Directed all financial, accounting, payroll, legal and technological activities</li>
            <li>Responsible for developing and maintaining strong customer and vendor relationships</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={details === 'project' ? true : false} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Project Management Work Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h6>Dr. Leu's Pathways to Wellness</h6>
          <p>Business Manager and Co-Owner</p>
          <p>July 2016 - Present</p>
          <ul>
            <li>Oversaw transition from brick-and-mortar to virtual operations by leveraging 3rd-party product fulfillment and cloud-based technologies</li>
            <li>Managed development of customized website and e-commerce solution to improve customer acquisition and retention</li>
            <li>Implemented cloud-based Electronic Medical Records system and customer-facing patient portal; shifted operational workflows to match</li>
            <li>Restructured supplement retail operations into separate legal entity to improve tax and ownership structure</li>
            <li>Led efforts to acquire $475k valuation and prepared for subsequent brokerage listing</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        </Modal.Footer>
      </Modal>



      
    </div>

  )
}

export default Pizza;
