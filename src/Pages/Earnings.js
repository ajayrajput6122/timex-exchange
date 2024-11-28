import React from 'react'
import Kyc from '../Img/KYC.png'
import Referrals from '../Img/Referrals.png'
import Rewards from '../Img/Rewards.png'
import Staking from '../Img/businessman-with-gold-coin.png'
import Support from '../Img/support.png'
import Network from '../Img/network.png'
import Reward from '../Img/reward.png'
import { Link, useNavigate } from 'react-router-dom'
const Earnings = () => {

    const navigate = useNavigate();

    const handleInviteClick = () => {
      navigate('/myprofile', { state: { activeTab: 'settings' } });
    };
    
    const handleKycClick = () => {
      navigate('/myprofile', { state: { activeTab: 'profile' } });
    };
    const handleBugClick = () => {
      navigate('/myprofile', { state: { activeTab: 'settings2' } });
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
                    <p className='text '>Invite your friends to join Time-X and instantly receive 25,000 Shiba Inu credited to your account. Use these tokens to explore the platform, access exclusive features, and grow your crypto portfolio. Plus, you'll unlock even more rewards and perks that make Time-X the go-to destination for crypto enthusiasts.</p>
                    <button className='btn_timex' onClick={handleInviteClick}>Invite Friends</button>                
                </div>
            </div>
        </div>
      </section>
      <section className='sec03_h'>
      <div className='container '>
            <div className='row column-rever_p'>
            <div className='col-lg-6 col-md-7 col-sm-7 alin_c'>
                    <h4 className='sub_title bc'>.. Earn with KYC Completion ..</h4>
                    <h2 className='title_h2 wc'>Complete your KYC verification and receive 1 ETH as a token of our appreciation</h2>
                    <p className='text '>It's our way of thanking you for trusting us with your verification. But that’s just the beginning—successfully completing KYC unlocks access to enhanced security features, safeguarding your assets and elevating your overall trading experience.</p>
                    <button className='btn_timex' onClick={handleKycClick}>Complete KYC</button>                
                </div>
                <div className='col-lg-6 col-md-5 col-sm-5 text-center alin_c'>
                    <img className='Kyc' src={Kyc} />
                </div>
            </div>
        </div>
      </section>
      <section className='sec01_e'>
      <div className='container '>
            <div className='row'>
                <div className='col-lg-6 col-md-5 col-sm-5 text-center alin_c'>
                    <img className='Rewards' src={Rewards} />
                </div>
                <div className='col-lg-6 col-md-7 col-sm-7 alin_c'>
                    <h4 className='sub_title bc'>.. Help Us Improve and Earn Crypto Rewards ..</h4>
                    <h2 className='title_h2 wc'>Spot a bug? Report it and earn up to 1,000 crypto as a reward</h2>
                    <p className='text '>If you come across any issues or errors on our platform, let us know and we’ll thank you with a generous bug bounty. Your feedback is crucial in helping us enhance the platform's performance and user experience. Don’t miss out—your contribution not only helps us improve but also earns you crypto rewards!</p>
                    <button className='btn_timex' onClick={handleBugClick}>Report a Bug</button>                
                </div>
            </div>
        </div>
      </section>
      <section className='sec03_h'>
      <div className='container '>
            <div className='row column-rever_p'>
            <div className='col-lg-6 col-md-7 col-sm-7 alin_c'>
                    <h4 className='sub_title bc'>.. Earn with Staking ..</h4>
                    <h2 className='title_h2 wc'>Stack USDT and Earn 0.36% Daily on Time-X Exchange</h2>
                    <p className='text '>Invest in stability by staking your USDT on Time-X Exchange and earn 0.36% daily for 18 months! Your assets are protected by our cutting-edge security measures, and our transparent platform makes it easy to track your earnings. With a proven track record of reliability, Time-X offers a secure and consistent way to grow your wealth. Take advantage of this opportunity to enjoy passive income while keeping your investments safe. Start staking USDT on Time-X today—terms and conditions apply.</p>
                    <Link to='/staking' className='btn_timex d-inline-block'>Stake Now</Link>                
                </div>
                <div className='col-lg-6 col-md-5 col-sm-5 text-center alin_c'>
                    <img className='Staking' src={Staking} />
                </div>
            </div>
        </div>
      </section>

      <section className='sec04_h'>
        <div className='container text-center'>
                    {/* <h4 className='sub_title bc'>.. Benefits ..</h4> */}
                    <h2 className='title_h2 wc'>How to Invite</h2>
                    {/* <p className='text '>Don't settle for average; level up your crypto game one step at a time. You'll be boasting about us in no time!</p> */}
                   
                    <div className='row '>
                        <div className='col-lg-4 col-md-4 col-sm-4 mt-3'>
                            <div className='sec4_box'>
                                <img className='sece_box_img' src={Network} />
                                <h4 className='sec4_box_title wc'>Share Your Code and Link</h4>
                                <p className='sec4_box_text'>You can invite your friends to use TomAX products with just one referral code.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 mt-3'>
                            <div className='sec4_box'>
                                <img className='sece_box_img' src={Support} />
                                <h4 className='sec4_box_title wc'>Connect with Your Friends</h4>
                                <p className='sec4_box_text'>Your friends will be associated with you after they Sign Up.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 mt-3'>
                            <div className='sec4_box'>
                                <img className='sece_box_img' src={Reward} />
                                <h4 className='sec4_box_title wc'>Get Multiple Rewards</h4>
                                <p className='sec4_box_text'>Automatically get Trading Commissions through TomAX Card Rewards.</p>
                            </div>
                        </div>
                    </div>
        </div>
</section>
    </>
  )
}

export default Earnings
