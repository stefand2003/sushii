import React from 'react';
import './Nav.scss';
import Logo from '../../assets/Logo.svg';

export default function Nav() {
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <img src={Logo} />
        <p>Sushii</p>
      </div>

      <button className='nav__button'>ORDER NOW</button>
    </div>
  );
}
