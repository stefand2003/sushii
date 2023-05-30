import React from 'react';
import './Subscribe.scss';
import Banner from '../../assets/banner.svg';

export default function Subscribe() {
  return (
    <div className='subscribe'>
      <img src={Banner} className='subscribe__banner' />

      <div className='subscribe__info'>
        <h1>Subscribe to our newsletter</h1>
        <p>
          Just by a click away, you can get the hottest news about any discounts
          or promotions we do so we can make your journey with us not only
          delicious but delicious on a reasonable price.
        </p>

        <div className='subscribe__email'>
          <input type='text' placeholder='Email address' />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}
