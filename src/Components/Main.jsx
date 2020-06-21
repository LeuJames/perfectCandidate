import React from 'react';
import {Link, navigate} from '@reach/router';
// import {Carousel} from 'react-bootstrap';

const Main = () => {
  return (
    <div>
        <h2 className="text-center">Choose a Job Candidate Recipe:</h2>
        <div className="row  justify-content-center">

          <div className="card m-4" style={{width: "15rem"}}>
            <img src= {require("../Images/sandwich/completeSandwich.png")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Full Stack Developer Sandwich</h5>
              <div className='card-text'>
                <p>Looking for a full stack developer? Check out this recipe for a Full Stack Developer Sandwich!</p>
              </div>
              <div className='card-footer'>
                <button onClick = { () => navigate(process.env.PUBLIC_URL + '/sandwich')} className="btn btn-primary m-4">See Recipe</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src= {require("../Images/pizza/completePizza.png")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Business Professional Pizza</h5>
              <div className='card-text'>
                <p>Looking for a business professional? Check out this recipe for a Business Professional Pizza!</p>
              </div>
              <div className='card-footer'>
                <button onClick = { () => navigate(process.env.PUBLIC_URL + '/pizza')} className="btn btn-primary m-4">See Recipe</button>
              </div>
            </div>
          </div>

          <div className="card m-4" style={{width: "15rem"}}>
            <img src= {require("../Images/burger/completeBurger.png")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Soft Skills Burger</h5>
              <div className='card-text'>
                <p>Looking for a candidate with the right set of soft skills? Check out this recipe for a Soft Skills Burger!</p>
              </div>
              <div className='card-footer'>
                <button onClick = { () => navigate(process.env.PUBLIC_URL + '/burger')} className="btn btn-primary m-4">See Recipe</button>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Main;
