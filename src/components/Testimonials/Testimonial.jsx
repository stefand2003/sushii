import React from 'react';
import './Testimonial.scss';
import ProfilePic from '../../assets/profilePic.svg';
import Img6 from '../../assets/image6.svg';

export default function Testimonial() {
  return (
    <div className='testimonial'>
      <div className='testimonial__header'>
        <h4>Testimonials</h4>
        <h1>Our Customers Say:</h1>
      </div>

      <section className='testimonial__card'>
        <div className='testimonial__card--comment'>
          <p>
            " I really enjoyed the fast service. Food was handled and served
            with care. This restaurant is on my top 3 go to places for Sushi.
            Can never go wrong! "
          </p>

          <div className='userInfo'>
            <img src={ProfilePic} />
            <ul>
              <li>Username</li>
              <li>City&Location</li>
            </ul>
          </div>
        </div>
        <img src={Img6} className='testimonial__card--photo' />
      </section>
    </div>
  );
}
