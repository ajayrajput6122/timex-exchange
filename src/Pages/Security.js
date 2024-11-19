import React from "react";
import Btc from "../Img/btc.png";
import Securityi from "../Img/Security_pg.png";
import Logo from "../Img/tomex.png";
const Security = () => {
  return (
    <>
      <section className="sec01_e">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-5 alin_c text-center">
              <img className="Referrals" src={Securityi} />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-7 alin_c text-center">
              <h4 className="sub_title bc">.. Security ..</h4>
              <h2 className="title_h2 wc">
                Security at TomAX Your Crypto’s Safety is Our Top Priority
              </h2>
              <p className="text ">
                At TomAX, we take security seriously. Our multi-layered security
                system includes advanced firewalls and real-time detection of
                suspicious activities to keep your assets safe.
              </p>
              <p className="text ">
                But we don’t stop there – we continuously test and update our
                security measures to ensure they remain robust. Our expert team
                is always on alert to address any potential issues promptly.
              </p>
              <p className="text ">
                For a secure and reliable crypto exchange, choose Time-X. Focus
                on your crypto journey with peace of mind, knowing we’ve got
                your back.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3'>
                        <a><img className='logo' src={Logo} /></a>
                        <p className='text'>Discover the ultimate crypto exchange designed for you. Enjoy cutting-edge innovation, lightning-fast transactions, and unbeatable security.</p>
                        <div className='footer_icon'>
                            <i class="fa-brands fa-square-facebook wc"></i>
                            <i class="fa-brands fa-youtube wc"></i>
                            <i class="fa-brands fa-twitter wc"></i>
                            <i class="fa-brands fa-linkedin-in wc"></i>
                            <i class="fa-brands fa-instagram wc"></i>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-9'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-6 footer_col-02'>
                                <h4 className='footer_title'>The Platform</h4>
                                <ul className='footer_list'>
                                    <li className='footer_list_item'><a harf='/'>Market</a></li>
                                    <li className='footer_list_item'><a harf='/'>Fees</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                <h4 className='footer_title'>Support</h4>
                                <ul className='footer_list'>
                                    <li className='footer_list_item'><a harf='/'>Contact Support</a></li>
                                    <li className='footer_list_item'><a harf='/'>FAQs</a></li>
                                    <li className='footer_list_item'><a harf='/'>Privacy & Policy</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                <h4 className='footer_title'>Resources</h4>
                                <ul className='footer_list'>
                                    <li className='footer_list_item'><a harf='/'>Mobile Application</a></li>
                                    <li className='footer_list_item'><a harf='/'>Bring Your Crew</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                <h4 className='footer_title'>Company</h4>
                                <ul className='footer_list'>
                                    <li className='footer_list_item'><a harf='/'>About Us</a></li>
                                    <li className='footer_list_item'><a harf='/'>Security</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </footer> */}
    </>
  );
};

export default Security;
