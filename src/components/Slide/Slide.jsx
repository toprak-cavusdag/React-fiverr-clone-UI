import React from 'react';
import './Slide.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slide = ({ children, centerSlidePercentage }) => {
  return (
    <div className='slide'>
      <div className='container'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
          centerMode={true}
          showStatus={false}
          centerSlidePercentage={centerSlidePercentage}
          selectedItem={1}
          showIndicators={false}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;
