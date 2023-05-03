import React from 'react';
import './CatCart.scss';
import { Link } from 'react-router-dom';

const CatCart = ({ item }) => {
  console.log(item);
  return (
    <Link to='gigs?cat=design'>
      <div className='catCard'>
        <img src={item.img} alt={item.title} />
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
      </div>
    </Link>
  );
};

export default CatCart;
