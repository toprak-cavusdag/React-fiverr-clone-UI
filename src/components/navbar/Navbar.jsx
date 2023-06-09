import React, { useEffect, useState } from 'react';
import profile from '../../asset/react-1-logo-black-and-white.png';
import profile1 from '../../asset/react-1-logo-png-transparent.png';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(0);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: 'Toprak Çavuşdağ',
    isSaller: true,
  };

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='logo'>
          <Link to='/' className='link'>
            <span className='text'>Fiverr</span>
            <span className='dot'>.</span>
          </Link>
        </div>

        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSaller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}

          {currentUser && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img
                src={active || pathname !== '/' ? profile : profile1}
                alt='profile'
                className='profile-pic'
              />
              <span>{currentUser?.userName}</span>
              {open && (
                <div className='options'>
                  {/* Saller */}
                  {currentUser?.isSaller && (
                    <>
                      <Link className='link' to='myGigs'>
                        Gigs
                      </Link>
                      <Link className='link' to='add'>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className='link' to='orders'>
                    Orders
                  </Link>
                  <Link className='link' to='messages'>
                    Messages
                  </Link>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className='menu'>
            <Link className='link menuLink' to='/'>
              Graphics & Design
            </Link>
            <Link className='link menuLink' to='/'>
              Video & Animation
            </Link>
            <Link className='link menuLink' to='/'>
              Writing & Translation
            </Link>
            <Link className='link menuLink' to='/'>
              AI Services
            </Link>
            <Link className='link menuLink' to='/'>
              Digital Marketing
            </Link>
            <Link className='link menuLink' to='/'>
              Music & Audio
            </Link>
            <Link className='link menuLink' to='/'>
              Programming & Tech
            </Link>
            <Link className='link menuLink' to='/'>
              Business
            </Link>
            <Link className='link menuLink' to='/'>
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
