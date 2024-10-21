import React from 'react'

const Forgotpassword = () => {
  return (
    <>
      <section className='sec01_login'>
        <div className='container'>
        <h2 class="title_h2 wc text-center mb-5"> Forgot Password</h2>
        <div className='login_f login_box register_f'>
          
                    <form>
                                      <div className='form_t'>
                                            <h5 className='trade_box_title_l wc'>Email Address</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-envelope fa-beat wc"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Email Verification Code</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><span className='otp_btn wc'>OTP</span></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>New Password</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='password' className='input_l w-100 wc'  autocomplete="off" />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-lock fa-beat wc"></i></h4>
                                            </div>        
                                        </div>
                                        <button className='btn_login wc' type='submit'>Forgot Password </button>
                    </form>
                    </div>
        </div>
      </section>
    </>
  )
}

export default Forgotpassword
