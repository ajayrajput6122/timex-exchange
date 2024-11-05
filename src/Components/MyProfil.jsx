import React from 'react'

const MyProfil = () => {
  return (
    <>
      <div className='d-flex j_con'>
                    <div>
                      <h4 className='p_tile wc'>My Profile</h4>
                      <span className='p_span wc'> UID: 858</span>
                    </div>
                    <div>
                      <h4 className='p_tile wc'>KYC Status :-</h4>
                      <span className='p_span wc'> APPROVED</span>
                    </div>
                  </div>
                  
                    <form>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>First Name</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-user-pen fa-beat wc"></i></h4>
                          </div>        
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>Last Name</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-user-pen fa-beat wc"></i></h4>
                          </div>        
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>Email</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-envelope fa-beat wc"></i></h4>
                          </div>        
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6  mt-3'>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>Phone</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='tel' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-mobile-screen-button fa-beat"></i></h4>
                          </div>        
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6  mt-3'>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>Address</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-address-book fa-beat"></i></h4>
                          </div>        
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6  mt-3'>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>PAN Detail</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-credit-card fa-beat"></i></h4>
                          </div>        
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6  mt-3'>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>Adhaar Card Detail</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-address-card fa-beat wc"></i></h4>
                          </div>        
                        </div>
                      </div>
                      
                    </div>
                    <button className='sub_01 wc' type='submit'><i class="fa-solid fa-right-to-bracket fa-shake me-2"></i> Submit</button>
                    </form>
                  
    </>
  )
}

export default MyProfil
