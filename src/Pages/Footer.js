import React from 'react'
import Logo from '../Img/logo.png'

const Footer = () => {
  return (
    <>
       <footer>
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
                            <div className='col-lg-3 col-md-3 col-sm-6'>
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
        </footer>
    </>
  )
}

export default Footer
