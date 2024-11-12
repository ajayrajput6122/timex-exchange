import React from 'react'

const Kycverification02 = () => {
  return (
    <>
      <h4 className="text-center wc mb-4"> <span>02</span> Address Information</h4>
      <div className="border_box_p mt-4">
        <form>
        <div className="row">
            <div className="col-lg-6">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Pin Code</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-map-pin fa-beat wc"></i>
                  </h4>
                </div>
              </div>
              <div className="form_t mt-3">
                <h5 className="trade_box_title_l wc">City</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-regular fa-building fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">State</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-city fa-beat wc"></i>
                  </h4>
                </div>
              </div>
              <div className="form_t mt-3">
                <h5 className="trade_box_title_l wc">Address</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-address-book fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="form_btn_prof">
            <button type="submit" className="btn_login wc">Submit</button>
        </div>
        </form>
      </div>
    </>
  )
}

export default Kycverification02
