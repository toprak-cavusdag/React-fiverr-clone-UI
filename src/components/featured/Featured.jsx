import React from 'react';
import man from '../../asset/man.png';
import searchIcon from '../../asset/search.png';
import './Featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className='search'>
            <div className='searchInput'>
              <img src={searchIcon} alt='search icon' />
              <input type='text' placeholder='Try "building mobile app" ' />
            </div>
            <button>Search</button>
          </div>
          <div className='populer'>
            <span>Popular: </span>
            <button className='buttonCat'>Web design</button>
            <button className='buttonCat'>Wordpress</button>
            <button className='buttonCat'>Logo Design</button>
            <button className='buttonCat'>AI Services</button>
          </div>
        </div>
        <div className='right'>
          <img src={man} alt='man image' />
        </div>
      </div>
    </div>
  );
};

export default Featured;
