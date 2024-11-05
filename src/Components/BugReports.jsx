import React from 'react'

const BugReports = () => {
  return (
    <>
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
    </>
  )
}

export default BugReports
