import React from 'react';
import './FoodGrid.scss';
import Star from '../../assets/star.svg';
import Img1 from '../../assets/image1.svg';
import Img2 from '../../assets/image2.svg';
import Img3 from '../../assets/image3.svg';
import Img4 from '../../assets/image4.svg';
import Img5 from '../../assets/image5.svg';
import Img6 from '../../assets/image6.svg';

export default function FoodGrid() {
  return (
    <div className='grid'>
      <div className='grid__header'>
        <h4>A little bit about us</h4>
        <h1>Most Popular Dishes </h1>
      </div>

      <section>
        <div className='grid__card'>
          <img src={Img1} className='bkgrImg' />

          <div className='background'>
            <div className='grid__card--header'>
              <h3>Makizushi</h3>
              <h4>$12.89</h4>
            </div>

            <ul className='grid__card--rating'>
              <li>
                <img src={Star} />
              </li>
              <li>4.3</li>
            </ul>
          </div>
        </div>
        <div className='grid__card'>
          <img src={Img2} className='bkgrImg' />

          <div className='background'>
            <div className='grid__card--header'>
              <h3>Sashimi</h3>
              <h4>$15.24</h4>
            </div>

            <ul className='grid__card--rating'>
              <li>
                <img src={Star} />
              </li>
              <li>4.7</li>
            </ul>
          </div>
        </div>
        <div className='grid__card'>
          <img src={Img3} className='bkgrImg' />

          <div className='background'>
            <div className='grid__card--header'>
              <h3>NigiriZuchi</h3>
              <h4>$17.99</h4>
            </div>

            <ul className='grid__card--rating'>
              <li>
                <img src={Star} />
              </li>
              <li>4.9</li>
            </ul>
          </div>
        </div>
        <div className='grid__card'>
          <img src={Img4} className='bkgrImg' />

          <div className='background'>
            <div className='grid__card--header'>
              <h3>Temaki</h3>
              <h4>$4.89/1pc</h4>
            </div>

            <ul className='grid__card--rating'>
              <li>
                <img src={Star} />
              </li>
              <li>3.9</li>
            </ul>
          </div>
        </div>
        <div className='grid__card'>
          <img src={Img5} className='bkgrImg' />

          <div className='background'>
            <div className='grid__card--header'>
              <h3>Gurupumiro</h3>
              <h4>$14.72</h4>
            </div>

            <ul className='grid__card--rating'>
              <li>
                <img src={Star} />
              </li>
              <li>4.6</li>
            </ul>
          </div>
        </div>
        <div className='grid__card'>
          <img src={Img6} className='bkgrImg' />

          <div className='background'>
            <div className='grid__card--header'>
              <h3>Temarisushi</h3>
              <h4>$4.55/1pc</h4>
            </div>

            <ul className='grid__card--rating'>
              <li>
                <img src={Star} />
              </li>
              <li>4.8</li>
            </ul>
          </div>
        </div>
      </section>

      <button>See Our Full Menu</button>
    </div>
  );
}
