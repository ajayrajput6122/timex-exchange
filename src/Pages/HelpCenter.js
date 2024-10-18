import React from 'react'
import Securityi from '../Img/help.png'
const HelpCenter = () => {
  return (
    <>
        <section className='sec01_e'>
            <div className='container '>
            <div className='row'>
                <div className='col-lg-6 text-center'>
                    <img className='Referrals' src={Securityi} />
                </div>
                <div className='col-lg-6 alin_c text-center'>
                    <h4 className='sub_title bc'>.. Help Center ..</h4>
                    <h2 className='title_h2 wc'>Contact with us</h2>

                    <p className='text '>Need help with Timex ? Visit our Support Center to get in touch with our dedicated support team, available 24/7. For other inquiries, connect with us below.</p>
                    <div className='d-flex j_con b_boot'>
                        <p className='text wc'> <span className='wc'> Press Inquiries</span></p>
                        <p className='text '> <span className='gc'> info@timex.io</span></p>
                    </div>
                    <div className='d-flex j_con b_boot'>
                        <p className='text wc'> <span className='wc'>Compliance Inquiries</span></p>
                        <p className='text '> <span className='gc'> compliance@timex.io</span></p>
                    </div>
                    <div className='d-flex j_con'>
                        <p className='text wc'> <span className='wc'> Support Inquiries</span></p>
                        <p className='text '> <span className='gc'> support.@timex.io</span></p>
                    </div>
    
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default HelpCenter