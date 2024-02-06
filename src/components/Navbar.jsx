import React from 'react';
import logo from '../assets/images/logo.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <div className='left-items'>
          <strong>Find talent</strong>
          <strong>Inspiration</strong>
          <strong>Learn Design</strong>
          <strong>Jobs</strong>
          <strong>Go Pro</strong>
        </div>
      </div>
      <div className='middle'><img src={logo} alt="Logo" /></div>
      <div className='right'>
        <input placeholder='Search'/>
        <button style={{ color: 'black', backgroundColor: 'transparent', fontSize: '16px' }}>Login</button>
        <button className='btn'>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
