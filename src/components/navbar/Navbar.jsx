import React, { useEffect, useState } from 'react';
import './Navbar.scss';
// import { Link } from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(0);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='logo'>
          {/* <Link to='/'> */}
          <span className='text'>Fiverr</span>
          <span className='dot'>.</span>
          {/* </Link> */}
        </div>

        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className='menu'>
            <span>Test1</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
