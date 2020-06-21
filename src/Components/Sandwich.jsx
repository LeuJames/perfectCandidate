import React,  {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const Sandwich = () => {
  const [sandwich, setSandwich] = useState([]);
  const [show, setShow] = useState('');

  const handleClose = () => setShow('');

  const checkSandwich = () => {
    const perfectSandwich = ['topBread', 'tomato', 'cheese', 'meat', 'lettuce', 'bottomBread'];
    if(sandwich.length != perfectSandwich.length) {
      setShow('fail');
      return;
    }
    for(let i = 0; i < sandwich.length; i++) {
      if(sandwich[i] != perfectSandwich[i]) {
        setShow('fail');
        return;
      }
    }
    setShow('success');
    setSandwich([]);
    }

  return (
    <div>
      <h2 className="text-center" style={{position : 'relative', zIndex: "10"}}>Full Stack Developer Sandwich</h2>
      <div className="row">
        <div className='m-4 text-center' style={{position : 'relative', zIndex: "10"}}>
          <h3>Add the ingredients in this order!</h3>
          <ol className='text-left'>
            <li> Add web fundamentals</li>
            <li> Add programming languages</li>
            <li> Add back-end frameworks</li>
            <li> Add database</li>
            <li> Add front-end frameworks</li>
            <li> Add version control & deployment</li>
            <li>Click the button below to taste what you made!</li>
          </ol>
          <button className="btn btn-primary" onClick= {checkSandwich}>7. Taste Sandwich</button>
          <button className= "btn btn-danger m-4" onClick={()=>setSandwich([])}>Reset Sandwich</button>
        </div>
        <div className='col-5 m-5 text-center text-bottom' style={{maxHeight: '35rem', maxWidth:'35rem', position: "fixed", right: '10rem', bottom: '5rem' }}>
          {sandwich.map((ingredient, idx) => {
            return (
              <div key={idx}>
                <img className="img-fluid"  style={{position: 'relative', maxHeight: '25rem', maxWidth:'25rem',zIndex: sandwich.length - idx, marginBottom: "-15rem", marginTop: "-15rem"}} src={require(`../Images/sandwich/${ingredient}.png`)} alt=""/>
              </div>
            )
          })}
          <img className="img-fluid mt-n4"src= {require("../Images/sandwich/plate.png")} alt=""/>
        </div>
      </div>
      <div className="jumbotron p-5">
        <h2 style={{position : 'relative', zIndex: "10"}}>Ingredients:</h2>
        <div className="row">
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/developer/webFund.png")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">1. Web Fundamentals</h5>
              <ul className='card-text'>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES5</li>
                <li>JQuery</li>
              </ul>
              <div className="card-footer text-center">
                <button onClick = { () => setSandwich(['bottomBread', ...sandwich])} className="btn btn-primary">Add To Sandwich</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/developer/languages.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">2. Programming Languages</h5>
              <ul className='card-text'>
                <li>Python 3</li>
                <li>Javascript ES5</li>
                <li>JavaScript ES6</li>
                <li>C#</li>
              </ul>
              <div className="card-footer text-center">
                <button onClick = { () => setSandwich(['lettuce', ...sandwich])} className="btn btn-primary">Add To Sandwich</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/developer/backEnd.png")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">3. Back-End Frameworks</h5>
              <ul className='card-text'>
                <li>Django</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>Flask</li>
              </ul>
              <div className="card-footer text-center">
                <button onClick = { () => setSandwich(['meat', ...sandwich])} className="btn btn-primary">Add To Sandwich</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/developer/database.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">4. Database</h5>
              <ul className='card-text'>
                <li>MySQL</li>
                <li>MongoDB/Mongoose</li>
                <li>SQLite</li>
              </ul>
              <div className="card-footer text-center">
                <button onClick = { () => setSandwich(['cheese', ...sandwich])} className="btn btn-primary">Add To Sandwich</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/developer/frontEnd.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">5. Front-End Frameworks</h5>
              <ul className='card-text'>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
              <div className="card-footer text-center">
                <button onClick = { () => setSandwich(['tomato', ...sandwich])} className="btn btn-primary">Add To Sandwich</button>
              </div>
            </div>
          </div>
          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/developer/versionControl.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">6. Version Control & Deployment</h5>
              <ul className='card-text'>
                <li>Git</li>
                <li>GitHub</li>
                <li>Amazon Web Services (AWS)</li>
              </ul>
              <div className="card-footer text-center">
                <button onClick = { () => setSandwich(['topBread', ...sandwich])} className="btn btn-primary">Add To Sandwich</button>
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
          <h5>You just created a perfect Full Stack Developer Sandwich! And like this sandwich, Chef/Job Candidate James Leu has all of these ingredients to fill your full stack developer candidate needs!</h5>
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
            <img className="img-fluid" src={require('../Images/sandwich/wrong.jpg')} alt=""/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>

  )
}

export default Sandwich;
