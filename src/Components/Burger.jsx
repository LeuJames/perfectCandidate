import React,  {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const Burger = () => {
  const [burger, setBurger] = useState([]);
  const [show, setShow] = useState('');
  const [details, setDetails] = useState(0);

  const handleClose = () => setShow('');
  const handleCloseDetails = () => setDetails(0);

  const checkBurger = () => {
    const perfectBurger = ['topBun', 'tomato', 'pickles', 'onion','cheese', 'meat', 'bacon', 'lettuce', 'bottomBun'];
    if(burger.length != perfectBurger.length) {
      setShow('fail');
      return;
    }
    for(let i = 0; i < burger.length; i++) {
      if(burger[i] != perfectBurger[i]) {
        setShow('fail');
        return;
      }
    }
    setShow('success');
    setBurger([]);
    }

  return (
    <div>
      <h2 className="text-center" style={{position : 'relative', zIndex: "10"}}>Soft Skills Burger</h2>
      <div className='row'>
        <div className='m-4 text-center' style={{position : 'relative', zIndex: "10"}}>
          <h3>Add the ingredients in this order!</h3>
          <ol className='text-left'>
            <li> Add Entrepeneurial Spirit</li>
            <li> Add Leadership</li>
            <li> Add Multi-Disciplinarian</li>
            <li> Add Life-Long Learner</li>
            <li> Add Diligent Worker</li>
            <li> Add Emotional Intelligence</li>
            <li> Add Effective Communicator</li>
            <li> Add Team Player</li>
            <li> Add Unwavering Integrity</li>
            <li>Click the button below to taste what you made!</li>
          </ol>
          <button className="btn btn-primary" onClick= {checkBurger}>10. Taste Burger</button>
          <button className= "btn btn-danger m-4" onClick={()=>setBurger([])}>Reset Burger</button>
        </div>
        <div className='m-5 text-center text-bottom' style={{maxHeight: '35rem', maxWidth:'35rem', position: "fixed", right: '10vw', bottom: '5vh' }}>
          {burger.map((ingredient, idx) => {
            return (
              <div key={idx}>
                <img className="img-fluid"  style={{maxWidth:'25rem', position: 'relative', zIndex: burger.length - idx, marginBottom: "-10rem", marginTop: "-5rem"}} src={require(`../Images/burger/${ingredient}.png`)} alt=""/>
              </div>
            )
          })}
          <img className="img-fluid mt-n5"src= {require("../Images/burger/plate.png")} alt=""/>
        </div>
      </div>
      <div className="jumbotron p-5">
        <h2 style={{position : 'relative', zIndex: "10"}}>Ingredients:</h2>
        <div className="row">

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/entrepeneur.png")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">1. Entrepeneurial Spirit</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['bottomBun', ...burger])} className="btn btn-primary">Add To Burger</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/leadership.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">2. Leadership</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['lettuce', ...burger])} className="btn btn-primary">Add To Burger</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/multiDiscipline.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">3. Multi-Disciplinarian</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['bacon', ...burger])} className="btn btn-primary">Add To Burger</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/learner.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">4. Life-Long Learner</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['meat', ...burger])} className="btn btn-primary">Add To Burger</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/dilligence.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">5. Diligent Worker</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['cheese', ...burger])} className="btn btn-primary">Add To Burger</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/emotionalIntelligence.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">6. Emotional Intelligence</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['onion', ...burger])} className="btn btn-primary">Add To Burger</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/communicator.png")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">7. Effective Communicator</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['pickles', ...burger])} className="btn btn-primary">Add To Burger</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/teamPlayer.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">8. Team Player</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['tomato', ...burger])} className="btn btn-primary">Add To Burger</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src={require("../Images/softSkills/integrity.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">9. Unwavering Integrity</h5>
              <div className='card-text'>
                
              </div>
              <div className="card-footer text-center">
                <button onClick = { () => setDetails(1)} className="btn btn-secondary m-1">Details</button>
                <button onClick = { () => setBurger(['topBun', ...burger])} className="btn btn-primary">Add To Burger</button>
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
          <h5>You just created a perfect Soft Skills Burger! And like this burger, Chef/Job Candidate James Leu has all of these ingredients to fill your candidate needs!</h5>
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
            <img className="img-fluid" src={require('../Images/burger/wrong.jpg')} alt=""/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={details === 1 ? true : false} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Example Soft Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Soft Skill Details</h6>
          <p>Details info 1</p>
          <p>Details info 2</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>

  )
}

export default Burger;
