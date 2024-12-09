import React from 'react';
import logo from '../images/HoA/logo.png';
import SubscribeButton from './SubscribeButton';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to receive exclusive offers
        </p>
        <p className='footer-subscription-text'>You can unsubscribe at any time.</p>
        <div className='input-areas'>
          <form className='input-area'>
            <SubscribeButton className='subbtn' />
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <a href='/signup'>Get Started</a>
            <a href='/about'>Our Story</a>
            <a href='/about'>Our Vision</a>
            <a href='/about'>Our Mission</a>
            <a href='/'>Terms of Service</a>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='/contact'>Contact Us</a>
            <a href='/'>Support</a>
            <a href='/'>Sponsorships</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Shop</h2>
            <a href='/card'>Visit our shop</a>
            <a href='/cart'>Cart</a>
            <a href='/'>New deals</a>
            <a href='/'>Feedback</a>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/'>Instagram</a>
            <a href='https://www.facebook.com/'>Facebook</a>
            <a href='https://www.youtube.com/'>Youtube</a>
            <a href='https://twitter.com/'>Twitter</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo-wrap'>
            <small className='website-rights'>
              <img src={logo} alt='Logo' className='footer-logo' />
              House of Athletes © 2025
            </small>
          </div>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
