import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
// import ScriptTag from 'react-script-tag';
import './Navbar.css';
 


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);


  return (
    <>
    
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="logo-haos" src="/images/logo alb-01.png"/>
            <img className="logo-osut" src="/images/Logo OSUT alb.png" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                ACASĂ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sectiuni'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SECTIUNI
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/echipa'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ECHIPA
              </Link>
            </li>

            <li>
              <Link
                to='https://form.123formbuilder.com/5771736/test-1'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                ÎNSCRIERE ARTIȘTI
              </Link>
            </li>
          </ul>
          <Link
          to='https://form.123formbuilder.com/5771736/test-1'
          className='nav-item btn-inscriere'
          onClick={closeMobileMenu}
          >
          {button && <Button buttonStyle='btn--outline'>ÎNSCRIERE ARTIȘTI</Button>}
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
