import React from 'react'
import Kycverification from '../Components/Kycverification'


const Myprofile = () => {
  return (
    <>
      <section className='sec01_login'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
            <div class="tabs_d-flex align-items-start">
              <div class="nav nav_tab_sid flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link p_tabs_btn active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> My Profile</button>
                <button class="nav-link p_tabs_btn" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">KYC Verification</button>
                <button class="nav-link p_tabs_btn" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</button>
                <button class="nav-link p_tabs_btn" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Referral & Earn</button>
                <button class="nav-link p_tabs_btn" id="v-pills-settings-tab1" data-bs-toggle="pill" data-bs-target="#v-pills-settings1" type="button" role="tab" aria-controls="v-pills-settings1" aria-selected="false">Referral Bonus</button>
                <button class="nav-link p_tabs_btn" id="v-pills-settings-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-settings2" type="button" role="tab" aria-controls="v-pills-settings2" aria-selected="false">Bug Reports</button>
              </div>
              <div class="tab-content tab-content1" id="v-pills-tabContent">
                <div class="tab-pane fade wc show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
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
                  
                </div>

                <div class="tab-pane fade wc" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <Kycverification/>
                </div>

                <div class="tab-pane fade wc" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
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
                </div>

                <div class="tab-pane fade wc" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <h4 className='text-center wc mb-3'>Refferal & Earns</h4>
                <form>
                    <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 '>
                        <div className='form_t mt-4'>
                        <h5 className='trade_box_title_l wc'>Referral Code</h5>
                          <div className='f_group_l d-flex j_con'>
                              <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                              <h4 className='WC f_g_text alin_c'><span className='otp_btn wc'>Copy</span></h4>
                          </div>        
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 '>
                        <div className='form_t mt-4'>
                        <h5 className='trade_box_title_l wc'>Share Link</h5>
                          <div className='f_group_l d-flex j_con'>
                              <input type='email' className='input_l w-100 wc'  autocomplete="off"  />
                              <h4 className='WC f_g_text alin_c'><span className='otp_btn wc'>Copy</span></h4>
                          </div>        
                        </div>
                    </div>

                    </div>
                </form>

                <h4 className='text-center wc titel_h4_my'>Referral Members</h4>

                <div className='table_over sec4_box'>
                    <div className='table_scroll'>
                                    <table className='refferal_earns_t'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>S No.	</th>
                                            <th className='t_t_heading wc b_boot'> ID</th>
                                            <th className='t_t_heading wc b_boot'>  Name	</th>
                                            <th className='t_t_heading wc b_boot'> KYC Status	</th>
                                            <th className='t_t_heading wc b_boot'>  Date & Time</th>
                                        </tr>
                                        <tr>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                        </tr>
                                    </table>
                                    </div>
                                </div>
                </div>

                <div class="tab-pane fade wc" id="v-pills-settings1" role="tabpanel" aria-labelledby="v-pills-settings-tab1">
                  <h4 className='text-center wc mb-3'>Invite Bonus</h4>
                  <div className='row'>
                      <div className='col-lg-3 col-md-6 col-sm-6 mt-3'>
                        <div className='p_box_k'>
                            <h4 className='sec4_box_title wc mt-0'>Invite Bonus</h4>
                            <p className='sec4_box_text'>0</p>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-6 mt-3'>
                        <div className='p_box_k'>
                            <h4 className='sec4_box_title wc mt-0'>Invited Users</h4>
                            <p className='sec4_box_text'>0</p>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-6 mt-3'>
                        <div className='p_box_k'>
                            <h4 className='sec4_box_title wc mt-0'>KYC Bonus</h4>
                            <p className='sec4_box_text'>0</p>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-6 mt-3'>
                        <div className='p_box_k'>
                            <h4 className='sec4_box_title wc mt-0'>Approved Users</h4>
                            <p className='sec4_box_text'>0</p>
                        </div>
                      </div>
                  </div>

                  <h4 className='text-center wc titel_h4_my'>Referral History</h4>

                  <div className='table_over sec4_box'>
                        <div className='table_scroll'>
                                    <table className='refferal_earns_t'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>S No.	</th>
                                            <th className='t_t_heading wc b_boot'> ID</th>
                                            <th className='t_t_heading wc b_boot'>  Name	</th>
                                            <th className='t_t_heading wc b_boot'> Currency	</th>
                                            <th className='t_t_heading wc b_boot'>  Amount</th>
                                            <th className='t_t_heading wc b_boot'>  Type</th>
                                            <th className='t_t_heading wc b_boot'>  Date & Time</th>
                                        </tr>
                                        <tr>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                        </tr>
                                    </table>
                                </div>
                                </div>
                </div>

                <div class="tab-pane fade wc" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
                <h4 className='text-center wc mb-0'>Bug Reports</h4>
                <div className='row column-rever_sm'>
                    <div className='col-lg-6 col-md-6 mt-3'>
                      <form>
                      <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>Bug Title</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-mobile-screen-button fa-beat"></i></h4>
                          </div>        
                        </div>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>Bug Page URL</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-mobile-screen-button fa-beat"></i></h4>
                          </div>        
                        </div>
                        <div className='form_t'>
                          <h5 className='trade_box_title_l wc'>Write a short Description</h5>
                          <div className='f_group_l d-flex j_con'>
                            <input type='text' className='input_l w-100 wc'  autocomplete="off"  />
                            <h4 className='WC f_g_text alin_c'><i class="fa-solid fa-mobile-screen-button fa-beat"></i></h4>
                          </div>        
                        </div>
                        <button className='sub_01 wc' type='submit'>Submit Report</button>

                      </form>
                    </div>
                    <div className='col-lg-6 col-md-6 mt-3'>
                      <h5 className='trade_box_title_l wc text-center'>Report bugs and earn up to 1000 crypto as a bug bonus!</h5>
                      <p className='sec4_box_text text-center'>If you encounter any bugs or errors on our platform, let us know, and we'll reward you generously with up to 1000 crypto as a bug bonus!</p>
                      <p className='sec4_box_text text-center'>Your feedback is invaluable in helping us enhance our platform's performance and user experience. Don't hesitate to report any issues you come across—your contribution not only helps us improve but also earns you crypto rewards.</p>

                    </div>
                </div>
                <h4 className='text-center wc titel_h4_my'>Bug History</h4>
                <div className='table_over sec4_box'>
                  <div className='table_scroll'>
                      <table className='refferal_earns_t'>
                          <tr>
                              <th className='t_t_heading wc b_boot'>S No.	</th>
                              <th className='t_t_heading wc b_boot'> Title	</th>
                              <th className='t_t_heading wc b_boot'>  URL	</th>
                              <th className='t_t_heading wc b_boot'> Description		</th>
                              <th className='t_t_heading wc b_boot'>  Status</th>
                              <th className='t_t_heading wc b_boot'>  Date & Time</th>  
                          </tr>
                          <tr>
                              <td className='t_t_data b_boot wc'>0</td>
                              <td className='t_t_data b_boot wc'>0</td>
                              <td className='t_t_data b_boot wc'>0</td>
                              <td className='t_t_data b_boot wc'>0</td>
                              <td className='t_t_data b_boot wc'>0</td>
                              <td className='t_t_data b_boot wc'>0</td>
                          </tr>
                      </table>
                  </div>
                </div>
                </div>

              </div>
            </div>
            </div>
            <div className='col-lg-8'>

            </div>
          </div>  
        </div>
      </section>
    </>
  )
}

export default Myprofile
