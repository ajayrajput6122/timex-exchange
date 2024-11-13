import React from 'react'
import Stak from '../Img/rb_2529.png'

const Staking = () => {
  return (
    <>
       <section className="sec01_staking">
            <div className="container">
                <div className="row column-rever_sm">
                    <div className="col-lg-6 col-md-6 alin_c">
                        <div className='d-flex j_con mb-3'>
                            <div>
                                <h5 className="trade_box_title_l wc">Staking in USDT</h5>
                            </div>
                            <div>
                                <h5 className="trade_box_title_l wc">Bal: 240 USDT</h5>
                            </div>
                        </div>
                        <div className='login_f login_box'>
                            <form>
                                <div className="form_t">
                                    <h5 className="trade_box_title_l wc">Amount</h5>
                                    <div className="f_group_l d-flex j_con">
                                        <input type="text" className="input_l w-100 wc" autocomplete="off"/>
                                        <h4 className="WC f_g_text alin_c">
                                        <i class="fa-solid fa-money-bill-1-wave fa-beat wc"></i>
                                        </h4>
                                    </div>
                                </div>
                                <button className="btn_login wc" type="submit"> <i className="fa-solid fa-id-card fa-shake me-2"></i> Stake </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-center alin_c">
                        <img className='stak' src={Stak} />
                    </div>
                   
                </div>

                <div>
                <div className='trade_box trade_box_staking'>
                            <nav className=' pb-2 mb-4'>
                                <div class="nav nav-tabs t-t-bor" id="nav-tab" role="tablist">
                                    <button class="nav-link btn_t02 btn_t03 wc active" id="nav-home-tab_t1" data-bs-toggle="tab" data-bs-target="#nav-home_t1" type="button" role="tab" aria-controls="nav-home_t1" aria-selected="true">Staking History</button>
                                    <button class="nav-link btn_t02 btn_t04 wc" id="nav-profile-tab_t1" data-bs-toggle="tab" data-bs-target="#nav-profile_t1" type="button" role="tab" aria-controls="nav-profile_t1" aria-selected="false">Return History</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show wc active" id="nav-home_t1" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='table_over'>
                                <div className='table_scroll'>
                                    <table className='trade_table_222'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>S No.	</th>
                                            <th className='t_t_heading wc b_boot'> User ID	</th>
                                            <th className='t_t_heading wc b_boot'> Amount</th>
                                            <th className='t_t_heading wc b_boot'> Return Amount	</th>
                                            <th className='t_t_heading wc b_boot'>  Day	</th>
                                            <th className='t_t_heading wc b_boot'> Date & Time</th>
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
                            <div class="tab-pane fade wc" id="nav-profile_t1" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='table_over'>
                                <div className='table_scroll'>
                                    <table className='trade_table_222'>
                                    <tr>
                                            <th className='t_t_heading wc b_boot'>S No.	</th>
                                            <th className='t_t_heading wc b_boot'> User ID	</th>
                                            <th className='t_t_heading wc b_boot'> Amount</th>
                                            <th className='t_t_heading wc b_boot'> Return Amount	</th>
                                            <th className='t_t_heading wc b_boot'>  Day	</th>
                                            <th className='t_t_heading wc b_boot'> Date & Time</th>
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
            </div>
       </section>
    </>
  )
}

export default Staking
