import React from 'react';
import './FooterNotes.scss';
import Logo from '../../assets/Logo.svg';

import Facebook from '../../assets/Facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';
import LinkedIn from '../../assets/LinkedIn.svg';

export default function FooterNotes() {
  return (
    <div className='footerNotes'>
      <section>
        <ul className='footerNotes__header'>
          <li>
            <img src={Logo} />
          </li>
          <li className='title'>Authentic Sushii</li>
        </ul>

        <p>
          This is a sushi place with an incredibly fast service, good food and
          popularity amongst other sushi restarant.{' '}
        </p>

        <h4>Image License Info</h4>

        <div className='footerNotes__sMedia'>
          <img src={Facebook} />
          <img src={Twitter} />
          <img src={Youtube} />
          <img src={LinkedIn} />
        </div>
      </section>

      <section className='workHour'>
        <h2 className='workHour__header'>Opening Times</h2>

        <div className='workHour__weekday'>
          <ul>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>

          <ul>
            <li>1:00pm - 10:00pm</li>
            <li>1:00pm - 10:00pm</li>
            <li>1:00pm - 10:00pm</li>
            <li>1:00pm - 11:00pm</li>
            <li>1:00pm - 11:00pm</li>
            <li>12:00pm - 11:00pm</li>
            <li>12:00pm - 9:00pm</li>
          </ul>
        </div>
      </section>

      <section className='contact'>
        <h2>ContactUs</h2>
        <p>Sushii 1 Churchill Road, London N1 </p>
        <p> +44 020 5678 908</p>
      </section>
    </div>
  );
}
