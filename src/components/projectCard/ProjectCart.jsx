import React from 'react';
import './ProjectCart.scss';

function ProjectCard({ card }) {
  return (
    <div className='projectCard'>
      <img src={card.img} alt='img' />
      <div className='info'>
        <img src={card.pp} alt='img' />
        <div className='texts'>
          <h2>{card.cat}</h2>
          <span>{card.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
