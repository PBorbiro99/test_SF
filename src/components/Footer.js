import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/sign-up'>Despre</Link>
            <Link to='/'>Istoric Ediții</Link>
            <Link to='/'>Tema StudentFest 2021</Link>
            <Link to='/'>Întrebări frecvente</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>General</Link>
            <Link to='/'>Coordonator general</Link>
            <Link to='/'>Responsabil OSUT</Link>
            <Link to='/'>Responsabil Fundraising</Link>
            <Link to='/'>Responsabil PR</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Pinterest</Link>
          </div>
        </div>
        {/* <div className='input-areas '>
          <form className="cutie-mail">
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Button buttonStyle='btn--outline'>Abonează-te!</Button> 
          </form>
        </div> */}
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          {/* <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className='logo-osut' src="/images/uvt-01.png"/>
              <img className='logo-osut' src="/images/anosr-01.png"/>
              <img className='logo-osut'src="/images/fitt-01.png"/>
              <img className='logo-osut' src="/images/logo alb-01.png" />
            </Link>
            </div> */}
            
            <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            {/* <Button buttonStyle='btn--outline'>Abonează-te!</Button> */}
          </form>
        </div>


          {/* <small class='website-rights'>StudentFest © 2021</small> */}
          {/* <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-pinterest' />
            </Link>
          </div> */}
        </div>
      </section>
      
      {/* <section class='social-media'>
        <div className="adresa">
          <p>Bd. Vasile Pârvan nr. 4, camera 247, Timișoara, județul Timiș
            +40.256.592.181</p>
            </div>
      </section> */}
      <section className="social-media">
      <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className='logo-osut' src="/images/uvt-01.png"/>
              <img className='logo-osut' src="/images/anosr-01.png"/>
              <img className='logo-osut'src="/images/fitt-01.png"/>
              {/* <img className='logo-osut' src="/images/logo alb-01.png" /> */}
            </Link>
            </div>

      </section>
      
    </div>
  );
}

export default Footer;
