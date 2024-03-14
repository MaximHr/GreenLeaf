import React from 'react';
import heroimg from '../src/assets/hero-app.png';
import cardimg from '../src/assets/card-white.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
       <div className="info">
        <h1 className='title'>Spend with impact</h1>
        <h2>Earn 4.75% yield on deposits and carbon removal rewards on your everyday card purchases. Free carbon accounting included.</h2>
        <div className="btn-container">
          <Link to='/signup' className="btn">Open a Free Account</Link>
          <Link to='/contact' className="btn btn-outlined">Contact Us</Link>
        </div>
      </div>
      <div className="images">
        <p className="alert">- 365 kg CO2e</p>
        <p className="alert">- 538 kg CO2e</p>
        <img className='tableimg' src={heroimg} alt="table" />
        <div className="green">
          <img className='visa' src={cardimg} alt="visa card" />
        </div>
      </div>
    </div>
  )
}

export default Hero;