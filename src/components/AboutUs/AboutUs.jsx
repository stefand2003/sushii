import React from 'react';
import './AboutUs.scss';
import Hours from '../../assets/hours.svg';
import Location from '../../assets/location.svg';
import Call from '../../assets/call.svg';

export default function AboutUs() {
  return (
    <div className='about'>
      <div className='about__card'>
        <img src={Hours} />
        <h4>10:00am - 9:00pm</h4>
        <p>Open Hours</p>
      </div>

      <div className='about__card--middle'>
        <img src={Location} />
        <h4>1 Churchill Road, London N1</h4>
        <p>Find us</p>
      </div>

      <div className='about__card--end'>
        <img src={Call} />
        <h4>+44 020 5678 908</h4>
        <p>Call us</p>
      </div>
    </div>
  );
}
