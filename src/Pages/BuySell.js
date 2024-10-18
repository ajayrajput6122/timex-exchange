import React from 'react'

const BuySell = () => {
  return (
    <>
    <section className='sec01_login'>
        <div className='container'>
            <div className=''>
                <div className='register_f'>
                    <div className='login_box'>
                        <ul class="nav nav-pills login_tab mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link login_btn_t wc w-100 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">  Buy</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link login_btn_t wc w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">  Sell</button>
                            </li>
                        </ul>
                            <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade wc show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className='login_f'>
                                    <form>
                                        <div className='form_t'>
                                            <h5 className='trade_box_title_l wc'>Choose Cryptocurrency</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-envelope fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Email Verification Code</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off" />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-comment fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Password</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='password' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-lock fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Confirm Password </h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='password' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-lock fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Referral Code (Optional)</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-comment fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        {/* <h5 className='trade_box_title_l wc'><a>Forgot Password?</a></h5> */}

                                        <button className='btn_login wc' type='submit'><i class="fa-solid fa-id-card fa-shake me-2"></i> Register</button>
                                        <h5 className='text text-center mt-4'>Already have an account <a className='wc'>Login</a></h5>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade wc" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className='login_f'>
                                    <form>
                                        <div className='form_t'>
                                            <h5 className='trade_box_title_l wc'>Mobile Number</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-envelope fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Phone Verification Code</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off" />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-comment fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Password</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='password' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-lock fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Confirm Password </h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='password' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-lock fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        <div className='form_t mt-4'>
                                            <h5 className='trade_box_title_l wc'>Referral Code (Optional)</h5>
                                            <div className='f_group_l d-flex j_con'>
                                                <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                                                <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-comment fa-beat"></i></h4>
                                            </div>        
                                        </div>
                                        {/* <h5 className='trade_box_title_l wc'><a>Forgot Password?</a></h5> */}

                                        <button className='btn_login wc' type='submit'><i class="fa-solid fa-id-card fa-shake me-2"></i> Register</button>
                                        <h5 className='text text-center mt-4'>Already have an account <a className='wc'>Login</a></h5>
                                    </form>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BuySell