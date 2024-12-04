import React from 'react'
import Faqi from '../Img/Down.png'

const Download = () => {
  return (
    <>
      <section className='sec01_e pb-0'>
      <div className='container '>
            <div className='row'>
                <div className='col-lg-6 col-md-5 col-sm-5 text-center'>
                    <img className='Referrals' src={Faqi} />
                </div>
                <div className='col-lg-6 col-md-7 col-sm-7 alin_c text-center '>
                    <h4 className='sub_title bc'>.. Downloads ..</h4>
                    <h2 className='title_h2 wc'>Get the App Now</h2>
                    <p className='text '>Don't miss out on the opportunity to dive into the future of finance with Tomax ! Trade swiftly on the go and access our platform anytime, anywhere. Live without limits." Join us today and experience the freedom and flexibility to trade whenever and wherever inspiration strikes.</p>
                    <button className='btn_timex mb-5'>Download App</button> 
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Download
