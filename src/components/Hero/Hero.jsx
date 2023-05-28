import React from 'react';
import './Hero.scss';
import Facebook from '../../assets/Facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import HeroImg from '../../assets/SushiHero.svg';

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero__detail'>
        <h1>Authentic Japanese Sushi</h1>
        <p>
          We sell real Japanese Sushi cooked by chefs with over 30+ years of
          experience
        </p>
        <button> MAKE AN ORDER</button>

        <div className='hero__detail--smedia'>
          <img src={Facebook} />
          <img src={Twitter} />
          <img src={Youtube} />
          <img src={LinkedIn} />
        </div>
      </div>

      <div className='hero__image'>
        <img src={HeroImg} />
      </div>
    </div>
  );
}
