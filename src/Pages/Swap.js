import React from 'react'
import Stak from '../Img/swap_pg.png'

const Swap = () => {
  return (
    
    <>
      <section className="sec01_login">
            <div className="container">
                <div className="row column-rever_sm">
                    <div className="col-lg-6 col-md-6 alin_c">
                        <div className='d-flex j_con mb-3'>
                            <div>
                                <h5 className="trade_box_title_l wc">Swap</h5>
                            </div>
                            <div>
                                <h5 className="trade_box_title_l wc">Available Token Balance: 0</h5>
                            </div>
                        </div>
                        <div className='login_f login_box'>
                            <form>
                                <div className="form_t">
                                    <h5 className="trade_box_title_l wc">You Pay</h5>
                                    <div className="f_group_l d-flex j_con">
                                        <input type="text" className="input_l w-100 wc" autocomplete="off"/>
                                        <div className="WC f_g_text alin_c">
                                            <select className='swap_sel'>
                                                <option>RBC</option>
                                                <option>Timex</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="trade_box_title_l wc text-center mt-4"><i class="fa-solid fa-repeat fa-beat wc"></i></h5>
                                <div className="form_t">
                                    <h5 className="trade_box_title_l wc">You Get</h5>
                                    <div className="f_group_l d-flex j_con">
                                        <input type="text" className="input_l w-100 wc" autocomplete="off"/>
                                        <div className="WC f_g_text alin_c">
                                            <select className='swap_sel'>
                                                <option>RBC</option>
                                                <option>Timex</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn_login wc" type="submit"> <i className="fa-solid fa-id-card fa-shake me-2"></i> Swap </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-center alin_c">
                        <img className='stak fa-flip' src={Stak} />
                    </div>
                </div>
                
                <div className='mt-3'>
                    <div className='trade_box '>
                    <div className='table_over'>
                                <div className='table_scroll'>
                                    <table className='trade_table_222'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>S No.	</th>
                                            <th className='t_t_heading wc b_boot'> Buy Amount		</th>
                                            <th className='t_t_heading wc b_boot'> Sell Amount	</th>
                                            <th className='t_t_heading wc b_boot'> From	</th>
                                            <th className='t_t_heading wc b_boot'>  To	</th>
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
       </section>
    </>
  )
}

export default Swap
