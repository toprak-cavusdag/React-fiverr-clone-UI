import React from 'react';
import './Gigs.scss';
import bottomArrow from '../../asset/down.png';
const Gigs = () => {
  return (
    <div className='gigs'>
      <div className='container'>
        <span className='breadcrumbs'>
          FIVERR &#x2192; GRAPHICS & DESİGN &#x2192;
        </span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr is AI artists
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
