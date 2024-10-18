import React from 'react'
import { useState } from 'react'
import Logo from '../Img/logo.png'
import Baner from '../Img/baner_i.png'
import Signup from '../Img/sign-up.png'
import Growth from '../Img/growth.png'
import Funding from '../Img/funding.png'
import Verified from '../Img/verified.png'
import Investments from '../Img/Investments.png'
import Trading from '../Img/Trading.png'
import Assets from '../Img/Assets.png'
import Maximization from '../Img/Maximization.png'
// import Downloads from '../Img/Downloads1'
import App from '../Img/Downloads1.png'
import Store from '../Img/aapstore.png'
import ChartR from '../Img/chart-red.png'
import ChartG from '../Img/chart-green.png'
import Sun from '../Img/sun.png'
import Moon from '../Img/moon.png'
import Ellipse from '../Img/Ellipse.png'
import Sparkle from '../Img/sparkle.png'
import Btc from '../Img/btc.png'
import Investment from '../Img/investment.png'
import Stock from '../Img/stock.png'
import Encrypted from '../Img/encrypted.png'
import Profits from '../Img/profits.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };
  return (
    <>


    <section className='sec01_h'>
    <div className='container'>
      <img className='ellipse' src={Ellipse} />
      <div className='banner_w text-center'>
        <h1 className='baner_title wc'>Discover Seamless Exchanges for Your Digital Coins <span className='bc timex'>Timex</span></h1>
        <p className='text'>Experience top-notch trading with Bitnetto, the leading crypto exchange. Start trading with us today and take your investment journey to the next level!</p>
        <p className='banner_text1 wc'>Join the Crypto Revolution - Turn Your Dreams into Reality Today!</p>
        <button className='btn_timex'>Potential Rewards </button>
      </div>
    </div>
  </section>
  <section className='sec02_h'>
      <div className='started'>
          <div className='start_box start_box1'>
              <div className='icon-box d-flex'>
                  <div className='icon-box-icon alin_c'>
                    <img className='box_img' src={Signup} />
                  </div>
                  <div className='icon-box-con'>
                      <h5 className='box_title box_title1 wc'>Sign Up</h5>
                      <p className='boxt_text mb-0'>Keep Your Wallet Safe and Join the Crypto Community Today!</p>
                  </div>
              </div>
          </div>
          <div className='start_box start_box2'>
              <div className='icon-box d-flex'>
                  <div className='icon-box-icon alin_c'>
                    <img className='box_img' src={Verified} />
                  </div>
                  <div className='icon-box-con'>
                      <h5 className='box_title box_title1 wc'>Verify</h5>
                      <p className='boxt_text mb-0'>Secure Your Wallet and Join Our Community Today!</p>
                  </div>
              </div>
          </div>
          <div className='start_box start_box3'>
              <div className='icon-box d-flex'>
                  <div className='icon-box-icon alin_c'>
                    <img className='box_img' src={Funding} />
                  </div>
                  <div className='icon-box-con'>
                      <h5 className='box_title box_title1 wc'>Fund</h5>
                      <p className='boxt_text mb-0'>We place a high priority on safeguarding your assets and funds.</p>
                  </div>
              </div>
          </div>
          <div className='start_box start_box4'>
              <div className='icon-box d-flex'>
                  <div className='icon-box-icon alin_c'>
                    <img className='box_img' src={Growth} />
                  </div>
                  <div className='icon-box-con'>
                      <h5 className='box_title box_title1 wc'>Trade</h5>
                      <p className='boxt_text mb-0'>Keep Your Wallet Safe and Join the Crypto Community Today!</p>
                  </div>
              </div>
          </div>

          <img className='Sparkle' src={Sparkle} />
      </div>
  </section>
  <section className='sec04_h'>
        <div className='container '>
            <div className='row'>
                <div className='col-lg-6 text-center'>
                    {/* <img className='btc' src={Btc} /> */}
                    <div className='row'>
                        <div className='col-6'>
                            <div className='sec4_box'>
                                <img className='sec4_box_img' src={Investment} />
                                <h4 className='sec4_box_title wc'>Shield Your   </h4>
                                <p className='sec4_box_text'>Trust Our Secure Crypto Measures for Peaceful, Profitable Trading. Robust Asset Protection Guaranteed.</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='sec4_box'>
                                <img className='sec4_box_img' src={Stock} />
                                <h4 className='sec4_box_title wc'>Real-Time Crypto Trading</h4>
                                <p className='sec4_box_text'>Capture Opportunities: Swiftly Trade Cryptocurrencies on Our Platform, Where Time is of Essence.</p>
                            </div>
                        </div>
                        <div className='col-6 mt-3'>
                            <div className='sec4_box'>
                                <img className='sec4_box_img' src={Encrypted} />
                                <h4 className='sec4_box_title wc'>Shielded Assets</h4>
                                <p className='sec4_box_text'>Trust in Our Crypto Exchange: Your Assets and Transactions Remain Secure, Safeguarded from Unwanted Access.</p>
                            </div>
                        </div>
                        <div className='col-6 mt-3'>
                            <div className='sec4_box'>
                                <img className='sec4_box_img' src={Profits} />
                                <h4 className='sec4_box_title wc'>Profit Maximization   </h4>
                                <p className='sec4_box_text'>Optimize Your Gains: Benefit from Our Competitive Transaction Fees, Reinvest in Your Crypto Portfolios</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col_2 alin_c'>
                    <h4 className='sub_title bc'>.. Benefits ..</h4>
                    <h2 className='title_h2 wc'>Explore Incredible Exchange Features!</h2>
                    <p className='text '>Don't settle for average; level up your crypto game one step at a time. You'll be boasting about us in no time!</p>
                                   
                </div>
                
            </div>
        </div>
</section>
  <section className='sec03_h'>
        <div className='container '>
            <div className='row'>
                <div className='col-lg-6 alin_c'>
                    <h4 className='sub_title bc'>.. Downloads ..</h4>
                    <h2 className='title_h2 wc'>Get the App Now</h2>
                    <p className='text '>Don't miss out on the opportunity to dive into the future of finance with Timex ! Trade swiftly on the go and access our platform anytime, anywhere. Live without limits." Join us today and experience the freedom and flexibility to trade whenever and wherever inspiration strikes.</p>
                    <button className='btn_timex'>Downloads App  </button>                
                </div>
                <div className='col-lg-6 text-center'>
                    <img className='btc' src={Btc} />
                </div>
            </div>
        </div>
</section>



<section className='sec04_h'>
        <div className='container text-center'>
                    <h4 className='sub_title bc'>.. Benefits ..</h4>
                    <h2 className='title_h2 wc'>Explore Incredible Exchange Features!</h2>
                    <p className='text '>Don't settle for average; level up your crypto game one step at a time. You'll be boasting about us in no time!</p>
                   
                    <div className='row mt-5'>
                        <div className='col-lg-3'>
                            <div className='sec4_box'>
                                <img className='sec4_box_img' src={Investment} />
                                <h4 className='sec4_box_title wc'>Shield Your   </h4>
                                <p className='sec4_box_text'>Trust Our Secure Crypto Measures for Peaceful, Profitable Trading. Robust Asset Protection Guaranteed.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='sec4_box'>
                                <img className='sec4_box_img' src={Stock} />
                                <h4 className='sec4_box_title wc'>Real-Time Crypto Trading</h4>
                                <p className='sec4_box_text'>Capture Opportunities: Swiftly Trade Cryptocurrencies on Our Platform, Where Time is of Essence.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='sec4_box'>
                                <img className='sec4_box_img' src={Encrypted} />
                                <h4 className='sec4_box_title wc'>Shielded Assets</h4>
                                <p className='sec4_box_text'>Trust in Our Crypto Exchange: Your Assets and Transactions Remain Secure, Safeguarded from Unwanted Access.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='sec4_box'>
                                <img className='sec4_box_img' src={Profits} />
                                <h4 className='sec4_box_title wc'>Profit Maximization   </h4>
                                <p className='sec4_box_text'>Optimize Your Gains: Benefit from Our Competitive Transaction Fees, Reinvest in Your Crypto Portfolios</p>
                            </div>
                        </div>
                    </div>
        </div>
</section>
    </>
  )
}

export default Home