import React from 'react'

const Kycverification03 = () => {
  return (
    <>
      <h4 className="text-center wc mb-4"> <span>03</span> Document Verification (Pan Card)</h4>
      <div className="">
        <form>
            <div className="border_box_p mt-4 ">
            <div className="row">
            <div className="col-lg-6">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Pan Card Number</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-id-card fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">
                  Confirm Pan Card Number
                </h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-id-card fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form_t">
                <h5 className="trade_box_title_l wc mt-3">
                  Upload Your Image (Pan Card)
                </h5>
                <div className="file_box mt-3">
                  <input
                    type="file"
                    className="input_l_file w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c"></h4>
                  <div className="text-center file_box_a">
                    <i class="fa-solid fa-cloud-arrow-up fa-bounce"></i>
                    <h4 className="text-center wc mb-2">Choose a File</h4>
                    <h4 className="p_tile gold_c">
                      Drag or choose your file to upload
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="form_btn_prof">
                <button type="submit" className="btn_login wc">Submit</button>
                </div>
            </div>
        </form>
      </div>
    </>
  )
}

export default Kycverification03
