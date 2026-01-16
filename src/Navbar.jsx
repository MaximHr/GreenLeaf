import React from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = ({bc}) => {
  return (
    <div className='Navbar' style={bc == 'white' ? {backgroundColor: 'white'} : {}}>
      <Link to='/' className="logo-container">
        <img src={logo} alt="Logo of GreenLeaf" />
        <h2>GreenLeaf</h2>
      </Link>
      <div className="nav-links">
        <Link to='/how-it-works'>How It Works</Link>
        <Link to='/signin' id="signin-link">Sign In</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar;