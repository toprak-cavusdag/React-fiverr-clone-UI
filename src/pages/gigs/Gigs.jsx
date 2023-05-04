import React from 'react';
import './Gigs.scsss';
import bottomArrow from '../../asset/down.png';
const Gigs = () => {
  return (
    <div>
      <div className='container'>
        <span className='breadcrumbs'>FIVERR > GRAPHICS & DESİGN ></span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input type='number' placeholder='min' min='5' />
            <input type='number' placeholder='max' />
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='shortBy'>ShortBy</span>
            <span className='shortType'>Best Selling</span>
            <img src={bottomArrow} alt='bottom arrow icon' />
            <div className='rightMenu'>
              <span>Newest</span>
              <span>Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
