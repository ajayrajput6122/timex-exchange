import React from 'react'
import BC from '../Img/bc.png'
import BNB from '../Img/bnb.png'
import XRP from '../Img/xrp.png'
import Shiba from '../Img/Shiba.png'
import TRON from '../Img/TRON.png'
import Bitcoin from '../Img/Bitcoin.png'
import ChartR from '../Img/chart_R.png'
import ChartG from '../Img/chart_G.png'

const Dashboard = () => {
  return (
    <>
<section className='sec01_d'>
    <div className='container '> 
        <h2 className='title_h2 wc text-center'>Welcome To Dashboard</h2>
        <p className='text text-center '>Glorious, not only for your eyes.</p>
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-6 mt-3'>
                <div className='sec4_box'>
                  <div className='d-flex d_box b_boot pb-4'>
                    <div className='icon-box d-flex'>
                    <div className='icon-box-icon alin_c'>
                        <img className='box1_img' src={BC} />
                    </div>
                    <div className='icon-box-con'>
                        <h5 className='box_title box_title1 wc'>Bitcoin Cash</h5>
                        <p className='box1_text wc mb-0'> 2342.42730</p>
                    </div>
                    </div>
                    <div className='alin_c'>
                        <p className='box1_text wc mb-0 gc'> 2.296</p>
                    </div>
                   </div>

                   <div className='d-flex d_box mt-4'>
                    <div className='icon-box d-flex'>
                    <div className='icon-box-icon alin_c'>
                        <img className='box1_img' src={BNB} />
                    </div>
                    <div className='icon-box-con'>
                        <h5 className='box_title box_title1 wc'>BNB</h5>
                        <p className='box1_text wc mb-0'> 2342.42730</p>
                    </div>
                    </div>
                    <div className='alin_c'>
                        <p className='box1_text wc mb-0 rc'> 2.296</p>
                    </div>
                   </div>
                </div>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-6 mt-3'>
                <div className='sec4_box'>
                  <div className='d-flex d_box b_boot pb-4'>
                    <div className='icon-box d-flex'>
                    <div className='icon-box-icon alin_c'>
                        <img className='box1_img' src={XRP} />
                    </div>
                    <div className='icon-box-con'>
                        <h5 className='box_title box_title1 wc'>XRP</h5>
                        <p className='box1_text wc mb-0'> 2342.42730</p>
                    </div>
                    </div>
                    <div className='alin_c'>
                        <p className='box1_text wc mb-0 rc'> 2.296</p>
                    </div>
                   </div>

                   <div className='d-flex d_box mt-4'>
                    <div className='icon-box d-flex'>
                    <div className='icon-box-icon alin_c'>
                        <img className='box1_img' src={Shiba} />
                    </div>
                    <div className='icon-box-con'>
                        <h5 className='box_title box_title1 wc'>Shiba Inu</h5>
                        <p className='box1_text wc mb-0'>2342.42730</p>
                    </div>
                    </div>
                    <div className='alin_c'>
                        <p className='box1_text wc mb-0 gc'> 2.296</p>
                    </div>
                   </div>
                </div>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-6 mt-3'>
                <div className='sec4_box'>
                  <div className='d-flex d_box b_boot pb-4'>
                    <div className='icon-box d-flex'>
                    <div className='icon-box-icon alin_c'>
                        <img className='box1_img' src={TRON} />
                    </div>
                    <div className='icon-box-con'>
                        <h5 className='box_title box_title1 wc'>TRON</h5>
                        <p className='box1_text wc mb-0'> 2342.42730</p>
                    </div>
                    </div>
                    <div className='alin_c'>
                        <p className='box1_text wc mb-0 rc'> 2.296</p>
                    </div>
                   </div>

                   <div className='d-flex d_box mt-4'>
                    <div className='icon-box d-flex'>
                    <div className='icon-box-icon alin_c'>
                        <img className='box1_img' src={Bitcoin} />
                    </div>
                    <div className='icon-box-con'>
                        <h5 className='box_title box_title1 wc'>Bitcoin</h5>
                        <p className='box1_text wc mb-0'> 2342.42730</p>
                    </div>
                    </div>
                    <div className='alin_c'>
                        <p className='box1_text wc mb-0 gc'> 2.296</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className='sec02_d'>
    <div className='container '> 
        <div className='table_over sec4_box'>
            <div className='table_scroll'>
                <table className='dashboard_table'>
                    <tr className='table_row'>
                        <th className='table_heading wc b_boot '>Coin Name</th>
                        <th className='table_heading wc b_boot '>Coin Price (USDT)	</th>
                        <th className='table_heading wc b_boot '>1 Hour Price	</th>
                        <th className='table_heading wc b_boot '>7 Hour Price	</th>
                        <th className='table_heading wc b_boot '>24 Hour Price	</th>
                        <th className='table_heading wc b_boot '>Action</th>
                        <th className='table_heading wc b_boot '>Market</th>
                    </tr>
                    <tr>
                        <td className='table_data b_boot'>
                            <div className='d-flex'>
                                <img className='table_img me-2' src={BNB} />
                                <span className='wc table_text'> BNB</span>
                            </div>
                        </td>
                        <td className='table_data b_boot grc'>56805.6993	</td>
                        <td className='table_data b_boot rc'>-0.01506604 	</td>
                        <td className='table_data b_boot rc'>-3.72317621 	</td>
                        <td className='table_data b_boot gc'>3.77389672 	</td>
                        <td className='table_data b_boot'>
                            <a className='table_btn wc' href='#'>Trade</a>
                        </td>
                        <td className='table_data b_boot '>
                            <img className='market_img' src={ChartR}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='table_data b_boot'>
                            <div className='d-flex'>
                                <img className='table_img me-2' src={BNB} />
                                <span className='wc table_text'> BNB</span>
                            </div>
                        </td>
                        <td className='table_data b_boot grc'>56805.6993	</td>
                        <td className='table_data b_boot rc'>-0.01506604 	</td>
                        <td className='table_data b_boot rc'>-3.72317621 	</td>
                        <td className='table_data b_boot gc'>3.77389672 	</td>
                        <td className='table_data b_boot'>
                            <a className='table_btn wc' href='#'>Trade</a>
                        </td>
                        <td className='table_data b_boot '>
                            <img className='market_img' src={ChartR}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='table_data b_boot'>
                            <div className='d-flex'>
                                <img className='table_img me-2' src={BNB} />
                                <span className='wc table_text'> BNB</span>
                            </div>
                        </td>
                        <td className='table_data b_boot grc'>56805.6993	</td>
                        <td className='table_data b_boot rc'>-0.01506604 	</td>
                        <td className='table_data b_boot rc'>-3.72317621 	</td>
                        <td className='table_data b_boot gc'>3.77389672 	</td>
                        <td className='table_data b_boot'>
                            <a className='table_btn wc' href='#'>Trade</a>
                        </td>
                        <td className='table_data b_boot '>
                            <img className='market_img' src={ChartR}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='table_data b_boot'>
                            <div className='d-flex'>
                                <img className='table_img me-2' src={BNB} />
                                <span className='wc table_text'> BNB</span>
                            </div>
                        </td>
                        <td className='table_data b_boot grc'>56805.6993	</td>
                        <td className='table_data b_boot rc'>-0.01506604 	</td>
                        <td className='table_data b_boot rc'>-3.72317621 	</td>
                        <td className='table_data b_boot gc'>3.77389672 	</td>
                        <td className='table_data b_boot'>
                            <a className='table_btn wc' href='#'>Trade</a>
                        </td>
                        <td className='table_data b_boot '>
                            <img className='market_img' src={ChartR}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='table_data b_boot'>
                            <div className='d-flex'>
                                <img className='table_img me-2' src={BNB} />
                                <span className='wc table_text'> BNB</span>
                            </div>
                        </td>
                        <td className='table_data b_boot grc'>56805.6993	</td>
                        <td className='table_data b_boot rc'>-0.01506604 	</td>
                        <td className='table_data b_boot rc'>-3.72317621 	</td>
                        <td className='table_data b_boot gc'>3.77389672 	</td>
                        <td className='table_data b_boot'>
                            <a className='table_btn wc' href='#'>Trade</a>
                        </td>
                        <td className='table_data b_boot '>
                            <img className='market_img' src={ChartR}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='table_data b_boot'>
                            <div className='d-flex'>
                                <img className='table_img me-2' src={BNB} />
                                <span className='wc table_text'> BNB</span>
                            </div>
                        </td>
                        <td className='table_data b_boot grc'>56805.6993	</td>
                        <td className='table_data b_boot rc'>-0.01506604 	</td>
                        <td className='table_data b_boot rc'>-3.72317621 	</td>
                        <td className='table_data b_boot gc'>3.77389672 	</td>
                        <td className='table_data b_boot'>
                            <a className='table_btn wc' href='#'>Trade</a>
                        </td>
                        <td className='table_data b_boot '>
                            <img className='market_img' src={ChartR}/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Dashboard
