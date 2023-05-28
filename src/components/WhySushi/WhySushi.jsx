import React from 'react';
import './WhySushi.scss';
import Kimbap from '../../assets/kimbap.svg';

export default function WhySushi() {
  return (
    <div className='whySushi'>
      <img src={Kimbap} />

      <div className='whySushi__display'>
        <h4>Healthy & Tasty</h4>
        <h1>Sushi is an important part of a balanced diet</h1>
        <p>
          We sell real Japanese Sushi cooked by chefs with over 30+ years of
          experience. Japanese Sushi cooked by chefs with years of experience.
        </p>
        <button> MAKE AN ORDER</button>
      </div>
    </div>
  );
}
