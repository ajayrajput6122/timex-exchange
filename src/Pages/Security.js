import React from 'react'
import Btc from '../Img/btc.png'
import Securityi from '../Img/Security.png'
import Logo from '../Img/logo.png'
const Security = () => {
  return (
    <>
       <section className='sec01_e'>
            <div className='container '>
            <div className='row'>
                <div className='col-lg-6 col-md-5 col-sm-5 alin_c text-center'>
                    <img className='Referrals' src={Securityi} />
                </div>
                <div className='col-lg-6 col-md-7 col-sm-7 alin_c text-center'>
                    <h4 className='sub_title bc'>.. Security ..</h4>
                    <h2 className='title_h2 wc'>Security at Timex Your Crypto’s Safety is Our Top Priority</h2>
                    <p className='text '>At Timex, we take security seriously. Our multi-layered security system includes advanced firewalls and real-time detection of suspicious activities to keep your assets safe.</p>
                    <p className='text '>But we don’t stop there – we continuously test and update our security measures to ensure they remain robust. Our expert team is always on alert to address any potential issues promptly.</p>
                    <p className='text '>For a secure and reliable crypto exchange, choose Time-X. Focus on your crypto journey with peace of mind, knowing we’ve got your back.</p>
                </div>
            </div>
            </div>
        </section>
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <a><img className='logo' src={Logo} /></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Security
