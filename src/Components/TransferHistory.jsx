import React from 'react'
import usdt from '../Img/usdt.png'

const TransferHistory = () => {
  return (
    <>
 
            <h2 className='title_h2 wc text-center'>Transfer History</h2>
            <div className='d-flex j_con mb-3'>
                <div className='alin_c'>
                    <h5 className="trade_box_title_l wc"> <img className='usdt' src={usdt} /> 595.0688355921807 USDT</h5>
                </div>
                <div>
                    <form>
                        <div className='f_group_l d-flex j_con'>
                            <div className='WC f_g_text alin_c'>
                                <i class="fa-solid fa-magnifying-glass fa-beat-fade wc"></i> 
                            </div>
                            <input className='search_input ms-2' type='search' placeholder="Search" />
                        </div>
                    </form>
                </div>
            </div>

            <div className='mt-3'>
                    <div className='trade_box '>
                    <div className='table_over'>
                                <div className='table_scroll'>
                                    <table className='trade_table_222'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>S No.	</th>
                                            <th className='t_t_heading wc b_boot'> Token Name			</th>
                                            <th className='t_t_heading wc b_boot'>  Amount		</th>
                                            <th className='t_t_heading wc b_boot'> From		</th>
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
       
    </>
  )
}

export default TransferHistory
