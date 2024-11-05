import React from 'react'
import Depot from '../Img/depgit.png'

const Deposit = () => {
  return (
    <>
    <section className='sec01_login'>
        <div className='container'>
            <h2 className='title_h2 wc text-center title_h2_mb'>Deposit Crypto</h2>
            <div className='row'> 
                <div className='col-lg-6 col-md-6 alin_c'>
                    <img className='Depot' src={Depot} />
                </div>
                <div className='col-lg-6 col-md-6 alin_c'>
                    <div className='login_f login_box'>
                    <form>
                                        <div className='form_t'>
                                            <h5 className='trade_box_title_l wc'>Select a Coin</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                                            </div>          
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Select Network</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Select Address</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off" />
                                            </div>        
                                        </div>

                                        <h5 className='text text-center mt-4'>Recipient Account: Main Account</h5>
                                        <h5 className='text text-center mt-4'>Deposit Confirmation:20 block(s)</h5>
                                    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
     
    </>
  )
}

export default Deposit
