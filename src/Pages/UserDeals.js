import React from 'react'
import Depot from "../Img/UserDeals.png";


const UserDeals = () => {
  return (
    <>
        <section className="sec01_login">
            <div className="container">
                <h2 className="title_h2 wc text-center mb-5">User Deals</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <img className="Depot" src={Depot} alt="Depot" />
                    </div>
                    <div className="col-lg-6">
                        <div className="login_f login_box">
                            <form>
                                <div className="form_t">
                                    <h5 className="trade_box_title_l wc">User Id</h5>
                                    <div className="f_group_l d-flex j_con">
                                        <input type="text" name="" className="input_l w-100 wc" autoComplete="off" />
                                            <h4 className="WC f_g_text alin_c">
                                            <i class="fa-solid fa-users fa-beat wc"></i>
                                            </h4>
                                    </div>
                                </div>
                                <div className="form_t mt-4">
                                    <h5 className="trade_box_title_l wc">Select Coin</h5>
                                    <div className="f_group_l d-flex j_con">
                                        <input type="text" name="" className="input_l w-100 wc" autoComplete="off" />
                                            <h4 className="WC f_g_text alin_c">
                                            <i class="fa-solid fa-coins fa-beat wc"></i>
                                            </h4>
                                    </div>
                                    <h5 className="text mt-4">Main Wallet Balance :</h5>
                                </div>
                                <div className="form_t mt-4">
                                    <h5 className="trade_box_title_l wc">Enter Your Amount</h5>
                                    <div className="f_group_l d-flex j_con">
                                        <input type="tel" name="" className="input_l w-100 wc" autoComplete="off" />
                                            <h4 className="WC f_g_text alin_c">
                                            <i class="fa-solid fa-sack-dollar fa-beat wc"></i>
                                            </h4>
                                    </div>  
                                </div>
                                <button className="btn_login wc" type="submit">Submit</button>
                            </form>
                            <h5 className="text text-center mt-4">Minimum 1 USDT is required in order to initiate the transaction</h5>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                <h2 className='title_h022 wc mb-3'>User Deals History</h2>
                    <div className='trade_box '>
                    <div className='table_over'>
                                <div className='table_scroll'>
                                    <table className='trade_table_222'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>S No.	</th>
                                            <th className='t_t_heading wc b_boot'> Token Name			</th>
                                            <th className='t_t_heading wc b_boot'> Mode		</th>
                                            <th className='t_t_heading wc b_boot'> Amount			</th>
                                            <th className='t_t_heading wc b_boot'>  From		</th>
                                            <th className='t_t_heading wc b_boot'> To</th>
                                            <th className='t_t_heading wc b_boot'> Date & Time</th>
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
                </div>
            </div>
        </section>
    </>
  )
}

export default UserDeals