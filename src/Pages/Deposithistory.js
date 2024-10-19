import React from 'react'

const Deposithistory = () => {
  return (
    <>
      <section className='sec01_login'>
        <div className='container'>
        <h2 className='title_h2 wc text-center mb-5'>Deposit History</h2>
        <div className='t_table_main login_box'>
                                <div className='t_table_sec'>
                                    <table className='trade_table_2'>
                                        <tr>
                                            <th className='t_t_heading wc b_boot'>S No.	</th>
                                            <th className='t_t_heading wc b_boot'> ID</th>
                                            <th className='t_t_heading wc b_boot'> Token Name	</th>
                                            <th className='t_t_heading wc b_boot'> Amount</th>
                                            <th className='t_t_heading wc b_boot'>  Transaction Type	</th>
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
      </section>
    </>
  )
}

export default Deposithistory
