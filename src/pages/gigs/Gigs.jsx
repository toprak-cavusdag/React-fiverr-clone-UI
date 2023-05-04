import React, { useState } from 'react';
import './Gigs.scss';
import { gigs } from '../../data';
import bottomArrow from '../../asset/down.png';
import GigCard from '../../components/gigCard/GigCard';
const Gigs = () => {
  const [isActive, setIsActive] = useState(false);
  const [sort, setSort] = useState('sales');

  const reSort = (type) => {
    setSort(type);
    setIsActive(false);
  };

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
            <div onClick={() => setIsActive(!isActive)}>
              <span className='shortType'>
                {sort === 'sales' ? 'Best Seller' : 'Newest'}
              </span>
              <img src={bottomArrow} alt='bottom arrow icon' />
            </div>
            {isActive && (
              <div className='rightMenu'>
                <span onClick={() => reSort('Newest')}>Newest</span>
                <span onClick={() => reSort('sales')}>Best Seller</span>
              </div>
            )}
          </div>
        </div>
        <div className='cards'>
          {gigs.map((item) => {
            return <GigCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
