import React from 'react'

const ChangePassword1 = () => {
  return (
    <>
      <h4 className='text-center wc'>Change Password</h4>
                  <form>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 '>
                        <div className='form_t mt-4'>
                                              <h5 className='trade_box_title_l wc'>Email Address</h5>
                                              <div className='f_group_l d-flex j_con'>
                                                  <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                                                  <h4 className='WC f_g_text alin_c'><span className='otp_btn wc'>OTP</span></h4>
                                              </div>        
                                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 '>
                        <div className='form_t mt-4'>
                                              <h5 className='trade_box_title_l wc'>Email Verification Code</h5>
                                              <div className='f_group_l d-flex j_con'>
                                                  <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                                                  <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-envelope fa-beat wc"></i></h4>

                                              </div>        
                                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 '>
                        <div className='form_t mt-4'>
                                              <h5 className='trade_box_title_l wc'>New Password</h5>
                                              <div className='f_group_l d-flex j_con'>
                                                  <input type='password' className='input_l w-100 wc'  autocomplete="off" />
                                                  <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-lock fa-beat wc"></i></h4>
                                              </div>        
                                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 '>
                        <div className='form_t mt-4'>
                                              <h5 className='trade_box_title_l wc'>Confirm Password</h5>
                                              <div className='f_group_l d-flex j_con'>
                                                  <input type='password' className='input_l w-100 wc'  autocomplete="off" />
                                                  <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-lock fa-beat wc"></i></h4>
                                              </div>        
                                          </div>
                        </div>
                    </div>
                    <button className='sub_01 wc' type='submit'>Change Password</button>
                  </form>
    </>
  )
}

export default ChangePassword1
