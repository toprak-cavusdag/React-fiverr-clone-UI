import React from 'react';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
import { cards } from '../../data';
import CatCart from '../../components/catCard/CatCart';

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide centerSlidePercentage={20}>
        {cards.map((card) => {
          return <CatCart item={card} key={card.id} />;
        })}
      </Slide>
    </div>
  );
};

export default Home;
