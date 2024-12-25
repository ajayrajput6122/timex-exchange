import React from 'react'
import Referrals from '../Img/about_us.png'
import Staking from '../Img/businessman-with-gold-coin.png'
import Coin from '../Img/coin_t.png'

import { Link, useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const handleInviteClick = () => {
        navigate('/About', { state: { activeTab: 'settings' } });
      };
  return (
    <>
     <section className='sec01_e'>
      <div className='container '>
            <div className='row'>
                <div className='col-lg-6 col-md-5 col-sm-5 text-center alin_c'>
                    <img className='Referrals' src={Referrals} />
                </div>
                <div className='col-lg-6 col-md-7 col-sm-7 alin_c'>
                    {/* <h4 className='sub_title bc'>.. Earn with Referrals ..</h4> */}
                    <h2 className='title_h2 wc'>About Us</h2>
                    <p className='text '>Welcome to Tomax Exchange, your trusted platform for seamless cryptocurrency trading. At Tomax, we empower users with a secure, user-friendly, and efficient environment for trading digital assets. Whether you’re a seasoned trader or just starting, Tomax provides the tools and features needed to succeed in the ever-evolving world of cryptocurrencies.</p>
                </div>
            </div>
        </div>
      </section>
      <section className='sec03_h'>
      <div className='container '>
            <div className='row column-rever_p'>
            <div className='col-lg-6 col-md-7 col-sm-7 alin_c'>
                    {/* <h4 className='sub_title bc'>.. Earn with Staking ..</h4> */}
                    <h2 className='title_h2 wc'>Why Choose Tomax?</h2>
                    <p className='text '>Comprehensive Trading Options: Trade multiple cryptocurrencies effortlessly.
Cutting-Edge Security: Advanced encryption and protocols to protect your assets.
User-Focused Design: An intuitive interface tailored for traders at all levels.
Global Accessibility: Anytime, anywhere trading through web and mobile platforms.
At Tomax Exchange, trading is not just a task—it’s a seamless and rewarding experience. Join us in shaping the future of digital asset trading.</p>
                </div>
                <div className='col-lg-6 col-md-5 col-sm-5 text-center alin_c'>
                    <img className='Staking' src={Coin} />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About