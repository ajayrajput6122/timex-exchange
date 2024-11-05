import React from 'react'
import Growth from '../Img/btccoin.png'

const Trade = () => {
  return (
    <>
    <section className='sec01_trade'>
        <div className='row'>
            <div className='col-lg-7 p-1'>
                <div className='trade_box '>
                    <div className='d-flex j_con'>
                        <div >
                            <div className='icon-box d-flex'>
                                <div className='icon-box-icon alin_c'>
                                    <img className='box_img_trade' src={Growth} />
                                </div>
                                <div className='icon-box-con alin_c'>
                                    <h5 className='box_trad_title wc'>Bitcoin</h5>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='me-3 alin_c'>
                                <p className='rate_title rc'>6589656</p>
                            </div>
                            <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle t_btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                BTC
                            </button>
                            <ul class="dropdown-menu d_trade " aria-labelledby="dropdownMenuButton1">
                                <li>
                                <div className='d-flex j_con b_boot pb-2 mb-1'>
                                    <h5 className='trade_box_title1 wc'>Coin Name</h5>
                                    <h5 className='trade_box_title1 wc'>Coin Price (USDT)</h5>
                                </div>
                                <div className='d-flex j_con trade_ul b_boot'>
                                <div className='icon-box d-flex'>
                                    <div className='icon-box-icon alin_c'>
                                        <img className='box_img_trade' src={Growth} />
                                    </div>
                                    <div className='icon-box-con alin_c'>
                                        <h5 className='box_trad_title wc'>Bitcoin</h5>
                                    </div>
                                </div>
                                <div className=''>
                                        <p className='rate_title wc'>6589656</p>
                                        <p className='rate_text gc'>-0.555</p>
                                </div>
                            </div>
                            <div className='d-flex j_con trade_ul b_boot'>
                                <div className='icon-box d-flex'>
                                    <div className='icon-box-icon alin_c'>
                                        <img className='box_img_trade' src={Growth} />
                                    </div>
                                    <div className='icon-box-con alin_c'>
                                        <h5 className='box_trad_title wc'>Bitcoin</h5>
                                    </div>
                                </div>
                                <div className=''>
                                        <p className='rate_title wc'>6589656</p>
                                        <p className='rate_text rc'>-0.555</p>
                                </div>
                            </div>
                            <div className='d-flex j_con trade_ul b_boot'>
                                <div className='icon-box d-flex'>
                                    <div className='icon-box-icon alin_c'>
                                        <img className='box_img_trade' src={Growth} />
                                    </div>
                                    <div className='icon-box-con alin_c'>
                                        <h5 className='box_trad_title wc'>Bitcoin</h5>
                                    </div>
                                </div>
                                <div className=''>
                                        <p className='rate_title wc'>6589656</p>
                                        <p className='rate_text gc'>-0.555</p>
                                </div>
                            </div> 
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='trade_box trade_box_chart mt-2'>

                </div>
            </div>
            <div className='col-lg-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 p-1'>
                        <div className='trade_box trade_box1'>
                           <h4 className='text-center trade_box_title b_boot'>Order Book</h4>
                           <div className='d-flex j_con'>
                                <div>
                                    <h5 className='trade_box_title1 wc'>Group By</h5>
                                </div>
                                <div>
                                        <select className='t_from'>
                                            <option>0.00001</option>
                                            <option>0.0001</option>
                                            <option>0.001</option>
                                            <option>0.01</option>
                                        </select>
                                </div>
                           </div>
                           <div className='t_table_main'>
                                <div className='t_table_sec'>
                                    <table className='trade_table_1'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>Price (USDT)</th>
                                            <th className='t_t_heading wc b_boot'>Quantity (BTC)</th>
                                            <th className='t_t_heading wc b_boot'>Total (USDT)</th>
                                        </tr>
                                        <tr>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                        </tr>
                                    </table>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 p-1'>
                        <div className='trade_box '>
                            <nav className='b_boot pb-2 mb'>
                                <div class="nav nav-tabs t_t_btn_g" id="nav-tab" role="tablist">
                                    <button class="nav-link t_t_btn wc active" id="nav-home-tab_t" data-bs-toggle="tab" data-bs-target="#nav-home_t" type="button" role="tab" aria-controls="nav-home_t" aria-selected="true">Buy</button>
                                    <button class="nav-link t_t_btn wc" id="nav-profile-tab_t" data-bs-toggle="tab" data-bs-target="#nav-profile_t" type="button" role="tab" aria-controls="nav-profile_t" aria-selected="false">Sell</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show wc active" id="nav-home_t" role="tabpanel" aria-labelledby="nav-home-tab_t">
                                <div className=''>
                                    <select className='sec_t_t wc'>
                                        <option>Market</option>
                                        <option>Limit</option>
                                    </select>
                               
                                <div className='d-flex j_con mt-3 mb-3'>
                                    <div>
                                        <h5 className='trade_box_title1 wc'>Available Balance:</h5>
                                    </div>
                                    <div>
                                        <h5 className='trade_box_title1 wc'>0 USDT</h5>
                                    </div>
                                </div>
                                <div className='form_t'>
                                    <h5 className='trade_box_title1 wc'>Price</h5>
                                    <div className='f_group d-flex j_con'>
                                        <input type='text' className='t_t_input w-100 wc' value='5885' />
                                        <h4 className='WC f_g_text alin_c'>USDT</h4>
                                    </div>        
                                </div>
                                <div className='form_t'>
                                    <h5 className='trade_box_title1 wc'>Amount</h5>
                                    <div className='f_group d-flex j_con'>
                                        <input type='text' className='t_t_input w-100 wc' value='5885' />
                                        <h4 className='WC f_g_text alin_c'> BTC</h4>
                                    </div>        
                                </div>
                                <div className='form_t'>
                                    <div className='f_group d-flex j_con'>
                                        <input type='text' className='t_t_input w-100 wc' value='5885' />
                                        <h4 className='WC f_g_text alin_c'>Total</h4>
                                    </div>        
                                </div>
                                <div className='d-flex j_con'>
                                    <div className='f_group'>
                                        <h4 className='WC f_g_text alin_c'>25%</h4>
                                    </div>
                                    <div className='f_group'>
                                        <h4 className='WC f_g_text alin_c'>50%</h4>
                                    </div>
                                    <div className='f_group'>
                                        <h4 className='WC f_g_text alin_c'>75%</h4>
                                    </div>
                                    <div className='f_group'>
                                        <h4 className='WC f_g_text alin_c'>100%</h4>
                                    </div>
                                </div>

                                <div className='d-flex j_con'>
                                    <button className='t_f_btn t_f_btn1 wc'>Login</button>
                                    <button className='t_f_btn t_f_btn2 wc'>Register</button>
                                </div>
                                </div>
                            </div>
                            <div class="tab-pane fade wc" id="nav-profile_t" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className=''>
                                    <select className='sec_t_t wc'>
                                        <option>Market</option>
                                        <option>Limit</option>
                                    </select>
                               
                                <div className='d-flex j_con mt-3 mb-3'>
                                    <div>
                                        <h5 className='trade_box_title1 wc'>Available Balance:</h5>
                                    </div>
                                    <div>
                                        <h5 className='trade_box_title1 wc'>0 BTC</h5>
                                    </div>
                                </div>
                                <div className='form_t'>
                                    <h5 className='trade_box_title1 wc'>Price</h5>
                                    <div className='f_group d-flex j_con'>
                                        <input type='text' className='t_t_input w-100 wc' value='5885' />
                                        <h4 className='WC f_g_text alin_c'>USDT</h4>
                                    </div>        
                                </div>
                                <div className='form_t'>
                                    <h5 className='trade_box_title1 wc'>Amount</h5>
                                    <div className='f_group d-flex j_con'>
                                        <input type='text' className='t_t_input w-100 wc' value='5885' />
                                        <h4 className='WC f_g_text alin_c'> BTC</h4>
                                    </div>        
                                </div>
                                <div className='form_t'>
                                    <div className='f_group d-flex j_con'>
                                        <input type='text' className='t_t_input w-100 wc' value='5885' />
                                        <h4 className='WC f_g_text alin_c'>Total</h4>
                                    </div>        
                                </div>
                                <div className='d-flex j_con'>
                                    <div className='f_group'>
                                        <h4 className='WC f_g_text alin_c'>25%</h4>
                                    </div>
                                    <div className='f_group'>
                                        <h4 className='WC f_g_text alin_c'>50%</h4>
                                    </div>
                                    <div className='f_group'>
                                        <h4 className='WC f_g_text alin_c'>75%</h4>
                                    </div>
                                    <div className='f_group'>
                                        <h4 className='WC f_g_text alin_c'>100%</h4>
                                    </div>
                                </div>

                                <div className='d-flex j_con'>
                                    <button className='t_f_btn t_f_btn1 wc'>Login</button>
                                    <button className='t_f_btn t_f_btn2 wc'>Register</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-9 p-1'>
                        <div className='trade_box '>
                            <nav className=' pb-2 mb'>
                                <div class="nav nav-tabs t-t-bor" id="nav-tab" role="tablist">
                                    <button class="nav-link btn_t02 btn_t03 wc active" id="nav-home-tab_t1" data-bs-toggle="tab" data-bs-target="#nav-home_t1" type="button" role="tab" aria-controls="nav-home_t1" aria-selected="true">Open Orders</button>
                                    <button class="nav-link btn_t02 btn_t04 wc" id="nav-profile-tab_t1" data-bs-toggle="tab" data-bs-target="#nav-profile_t1" type="button" role="tab" aria-controls="nav-profile_t1" aria-selected="false">Past Orders</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show wc active" id="nav-home_t1" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='table_over'>
                                <div className='table_scroll'>
                                    <table className='trade_table_222'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>Trading Pair</th>
                                            <th className='t_t_heading wc b_boot'> Date</th>
                                            <th className='t_t_heading wc b_boot'> Type</th>
                                            <th className='t_t_heading wc b_boot'> All</th>
                                            <th className='t_t_heading wc b_boot'>  Price</th>
                                            <th className='t_t_heading wc b_boot'> Amount</th>
                                            <th className='t_t_heading wc b_boot'> Remaining</th>
                                            <th className='t_t_heading wc b_boot'> Filled</th>
                                            <th className='t_t_heading wc b_boot'> Total</th>
                                            <th className='t_t_heading wc b_boot'>  Action </th>
                                        </tr>
                                        <tr>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
                                            <td className='t_t_data b_boot wc'>0</td>
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
                            <div class="tab-pane fade wc" id="nav-profile_t1" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='table_over'>
                                <div className='table_scroll'>
                                    <table className='trade_table_222'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>Trading Pair</th>
                                            <th className='t_t_heading wc b_boot'> Date</th>
                                            <th className='t_t_heading wc b_boot'> All</th>
                                            <th className='t_t_heading wc b_boot'>  Average Filled Price	</th>
                                            <th className='t_t_heading wc b_boot'> Executed</th>
                                            <th className='t_t_heading wc b_boot'> Total</th>
                                            <th className='t_t_heading wc b_boot'> Order Type</th>
                                            <th className='t_t_heading wc b_boot'> Status</th>
                                        </tr>
                                        <tr>
                                            <td className='t_t_data b_boot wc'>0</td>
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
                            </div>
                        </div>
            </div>
            <div className='col-lg-3 p-1'>
                        <div className='trade_box'>
                           <h4 className='text-center trade_box_title b_boot'>Trade History</h4>
                           <div className='t_table_main'>
                                <div className='t_table_sec'>
                                    <table className='trade_table_1'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'><i class="fa-solid fa-user-plus fa-beat me-1"></i>Price (USDT)</th>
                                            <th className='t_t_heading wc b_boot'>Quantity (BTC)</th>
                                            <th className='t_t_heading wc b_boot'>Total (USDT)</th>
                                        </tr>
                                        <tr>
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
    </section>
    </>
  )
}

export default Trade