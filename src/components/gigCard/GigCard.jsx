import React from 'react';
import './GigCard.scss';
import star from '../../asset/star.png';
import heart from '../../asset/heart.png';
import { Link } from 'react-router-dom';

const GigCard = ({ item }) => {
  return (
    <Link to='/gig/123' className='link'>
      <div className='gigCard'>
        <img src={item.img} alt='' />
        <div className='info'>
          <div className='user'>
            <img src={item.pp} alt='' />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className='star'>
            <img src={star} alt='Star icon' />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className='detail'>
          <img src={heart} alt='Heart icon' />
          <div className='price'>
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
