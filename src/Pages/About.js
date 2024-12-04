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
                    <h4 className='sub_title bc'>.. Earn with Referrals ..</h4>
                    <h2 className='title_h2 wc'>Invite a Friend and Claim 25,000 Shiba Inu! </h2>
                    <p className='text '>Invite your friends to join Tomax and instantly receive 25,000 Shiba Inu credited to your account. Use these tokens to explore the platform, access exclusive features, and grow your crypto portfolio. Plus, you'll unlock even more rewards and perks that make Tomax the go-to destination for crypto enthusiasts.</p>
                </div>
            </div>
        </div>
      </section>
      <section className='sec03_h'>
      <div className='container '>
            <div className='row column-rever_p'>
            <div className='col-lg-6 col-md-7 col-sm-7 alin_c'>
                    <h4 className='sub_title bc'>.. Earn with Staking ..</h4>
                    <h2 className='title_h2 wc'>Stack USDT and Earn 0.36% Daily on Tomax Exchange</h2>
                    <p className='text '>Invest in stability by staking your USDT on Tomax Exchange and earn 0.36% daily for 18 months! Your assets are protected by our cutting-edge security measures, and our transparent platform makes it easy to track your earnings. With a proven track record of reliability, Tomax offers a secure and consistent way to grow your wealth. Take advantage of this opportunity to enjoy passive income while keeping your investments safe. Start staking USDT on Tomax today—terms and conditions apply.</p>
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