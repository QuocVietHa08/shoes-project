import React from 'react';
import './Footer.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__item'>
          <h5>Customer Care</h5>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Returns & Exchanges</li>
            <li>Shipping and Handling</li>
            <li>Damaged or Defected Items</li>
            <li>Cancelling or Changing an Order</li>
            <li>Term of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer__item'>
          <h5>Inside K.U.N Website</h5>
          <ul>
            <li>About me</li>
            <li>Contact with me</li>
            <li>Like this page</li>
          </ul>
        </div>
        <div className='footer__item'>
          <h5>My Account</h5>
          <ul>
            <li>Sign In/Register</li>
            <li>My order</li>
            <li>My checkout</li>
          </ul>
        </div>
        <div className='footer__item'>
          <h5>Top Search</h5>
          <ul>
            <li>Air force 1</li>
            <li>Jordan 2</li>
            <li>Curry 7</li>
            <li>Utraboost</li>
            <li>Adidas</li>
          </ul>
        </div>
        <div className='footer__item'>
          <h5>Contact me with email</h5>
          <input type='text' placeholder='Email address' />
          <button>Subcribe</button>
          <div className='footer__social'>
            <div className='facebook'>
              <FacebookIcon />
            </div>
            <div className='twitter'>
              <TwitterIcon />
            </div>
            <div className='linked'>
              <LinkedInIcon />
            </div>
            <div className='youtube'>
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
