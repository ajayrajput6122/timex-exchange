import React from 'react'

const ReferralEarn = () => {
  return (
    <>
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
    </>
  )
}

export default ReferralEarn
