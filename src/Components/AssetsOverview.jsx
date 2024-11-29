import React from 'react'
import usdt from '../Img/usdt.png'


const AssetsOverview = () => {
  return (
    <>
     <h2 className='title_h022 wc text-center'>Assets Overview</h2>
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

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                    <div className="p_box_k text-center">
                        <h4 className="wc ao_title">Main Account</h4>
                        <p className="sec4_box_text">USDT 0000</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                    <div className="p_box_k text-center">
                        <h4 className="wc ao_title">Trading Account</h4>
                        <p className="sec4_box_text">USDT 0000</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                    <div className="p_box_k text-center">
                        <h4 className="wc ao_title">Funding Account</h4>
                        <p className="sec4_box_text">USDT 0000</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AssetsOverview