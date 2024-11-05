import React from 'react'

const ReferralBonus = () => {
  return (
    <>
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
    </>
  )
}

export default ReferralBonus
