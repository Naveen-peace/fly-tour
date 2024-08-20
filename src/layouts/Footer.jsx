import React from 'react'
import { Icon } from '@iconify/react'
import FooterLogo from '../assets/icon/FooterLogo'
import ButtonComponent from '../components/ButtonComponent.jsx'

function Footer() {
  return (
    <section className='footer'>
      <div className="container">
        <div className="footer-head">
          <div className="footer-1">
            <div className="footer-2">
              <FooterLogo />
              <p>Travel helps companies manage payments easily.</p>
              <div className="footer-logs">
                <a href=""><Icon icon="akar-icons:linkedin-v2-fill" width="20" height="20" /></a>
                <a href=""><Icon icon="bi:messenger" width="20" height="20" /></a>
                <a href=""><Icon icon="mdi:twitter" width="20" height="20" /></a>
                <a href=""><Icon icon="icon-park-outline:cross-ring-two" width="20" height="20" /></a>
              </div>
            </div>
            <div className="footer-3">
              <h5>Company</h5>
              <p>About Us</p>
              <p>Careers</p>
              <p>Blog</p>
              <p style={{margin:'0'}}>Pricing</p>
            </div>
            <div className="footer-3">
              <h5>Destinations</h5>
              <p>Maldives</p>
              <p>Los Angelas</p>
              <p>Las Vegas</p>
              <p style={{margin:'0'}}>Torronto</p>
            </div>
            <div className="footer-4">
              <h5>Join Our Newsletter</h5>
              <div className="footer-4-1">
                <input type="email" placeholder='Your email address' name="" id="" />
                <ButtonComponent customClass="romantic-btn" label="Subscribe" width={"149px"} height={"52px"} />
              </div>
              <p>*  Will send you weekly updates for your better
                tour packages.</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <h4 className='footer-last'>Copyright @ Xpro 2022. All Rights Reserved.</h4>
      </div>
    </section>
  )
}

export default Footer