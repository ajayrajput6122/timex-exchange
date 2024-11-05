import React from 'react'
import Depot from '../Img/depgit.png'

const Withdraw = () => {
  return (
    <>
        <section className='sec01_login'>
        <div className='container'>
            <h2 className='title_h2 wc text-center title_h2_mb'>Withdrawal</h2>
            <div className='row'> 
                <div className='col-lg-6'>
                    <img className='Depot' src={Depot} />
                </div>
                <div className='col-lg-6'>
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
                                            <h5 className='trade_box_title_l wc'>Enter Your Amount</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off" />
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Enter Your Wallet Address</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off" />
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Enter OTP</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><span className='otp_btn wc'>OTP</span></h4>
                                            </div>        
                                        </div>

                                        <button className='btn_login wc' type='submit'><i class="fa-solid fa-id-card fa-shake me-2"></i> Submit</button>

                                        <h5 className='text text-center wc mt-4'>Minimum 2 USDT is required in order to initiate the transaction</h5>
                                        <h5 className='text mt-4'>Available Balance:</h5>
                                        <h5 className='text mt-4'>Minimum Withdrawal:</h5>
                                        <h5 className='text mt-4'>Fees:</h5>
                                        <h5 className='text mt-4'>Remaining daily withdrawal amount:</h5>
                                    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Withdraw
