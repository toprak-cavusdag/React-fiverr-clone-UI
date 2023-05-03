import React from 'react';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
import { cards } from '../../data';
import CatCart from '../../components/catCard/CatCart';
import check from '../../asset/check.png';
import './Home.scss';
const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide centerSlidePercentage={20}>
        {cards.map((card) => {
          return <CatCart item={card} key={card.id} />;
        })}
      </Slide>
      {/* Features 1 */}
      <div className='features'>
        <div className='container'>
          <div className='item'>
            <h1> A hole world of freelance talent at your fingertips</h1>
            <div className='title'>
              <img src={check} alt='check' />
              The best for every Baught
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className='title'>
              <img src={check} alt='check' />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>

            <div className='title'>
              <img src={check} alt='check' />
              Pay when you are happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>

            <div className='title'>
              <img src={check} alt='check' />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>

          <div className='item'>
            <img
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png'
              alt='image'
            />
          </div>
        </div>
      </div>

      {/* Features 2 */}

      <div className='features dark'>
        <div className='container'>
          <div className='item'>
            <h1>
              Fiver <i>Business</i>
            </h1>
            <h1>A solution built for business</h1>

            <p>
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>

            <div className='title'>
              <img src={check} alt='check' />
              Talent matching
            </div>
            <div className='title'>
              <img src={check} alt='check' />
              Dedicated account management
            </div>
            <div className='title'>
              <img src={check} alt='check' />
              Team collaboration tools
            </div>
            <div className='title'>
              <img src={check} alt='check' />
              Business payment solutions
            </div>
            <button>Explore Fiverr Business</button>
          </div>

          <div className='item'>
            <img
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png'
              alt='title'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
