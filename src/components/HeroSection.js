import React from 'react';
import './Button.css';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import './AnimatedButton.css';

import 'bootstrap/dist/css/bootstrap.min.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/images/Clip lansare tema.mp4'
      autoPlay loop/>
      {/* <img className="logo-sf" src="/images/logo alb-01.png" alt=""/> */}
      {/* <div className='hero-btns'> */}
        <Link to ="/home" className="btn-mobile">
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > */}
<div class="arrow">
                <span></span>
                <span></span>
                <span></span>
  
</div>
        {/* </Button> */}
         </Link>
           {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>  */}
      {/* </div> */}
    </div>
  );
}

export default HeroSection;
