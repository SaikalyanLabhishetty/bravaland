import React from 'react';
import './Email.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Email = () => {
    return (
      <>
        <div className='title'>
            <h2><b>get on the list</b></h2>
            <hr className='hr1'></hr>
        </div>
        <p className='contactPara'><b>your ticket to exclusive discounts, premium raffles, and premier access to our product & event launches, reserved exclusively for our VIPs</b></p>
        <div className="form-container">
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="email"
          />
          <button type="submit" className="btn btn-dark">i'm in</button>
        </div>
      </form>
    </div>
      </>
    );
  };
  
  export default Email;