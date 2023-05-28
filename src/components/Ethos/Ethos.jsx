import React from 'react';
import './Ethos.scss';
import Quality from '../../assets/quality.svg';
import Healthy from '../../assets/healthy.svg';
import Fast from '../../assets/fast.svg';

export default function Ethos() {
  return (
    <div className='ethos'>
      <div className='ethos__header'>
        <h4>A little bit about us</h4>
        <h1>Our Ethos and Service </h1>
      </div>

      <div className='ethos__pack'>
        <div className='ethos__card'>
          <img src={Quality} />
          <h4>Quality</h4>
          <p>
            Sushi was handled with care and precision with one of the world
            class chef
          </p>
        </div>

        <div className='ethos__card'>
          <img src={Healthy} />
          <h4>Healthy</h4>
          <p>
            Our ingredients were carefully selected by our top quality world
            inspectors
          </p>
        </div>

        <div className='ethos__card'>
          <img src={Fast} />
          <h4>Fast Service</h4>
          <p>
            You will not have to wait more than 5 minutes to be provided with
            the meal of your dreams
          </p>
        </div>
      </div>
    </div>
  );
}
