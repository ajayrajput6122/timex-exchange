import React from 'react'

const Kycverification04 = () => {
  return (
    <>
     <h4 className="text-center wc mb-4"> <span>04</span> Other Document Verification </h4>
     <div className="border_box_p mt-4">
        <form>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Select Document Type</h5>
                <div className="f_group_l d-flex j_con">
                  <select className="input_l w-100 wc">
                    <option value="Aadhar card">Aadhar card </option>
                    <option value="Driving License">Driving License</option>
                    <option value="Driving License">Other</option>
                  </select>
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-id-card fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Aadhar Number</h5>
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
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <div className="form_t">
                <h5 className="trade_box_title_l wc mt-3">Front Image</h5>
                <div className="file_box mt-3">
                  <input
                    type="file"
                    className="input_l_file w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c"></h4>
                  <div className="text-center file_box_a">
                    <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
                    <h4 className="text-center wc mb-2">Choose a File</h4>
                    <h4 className="p_tile gold_c">
                      Drag or choose your file to upload
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <div className="form_t">
                <h5 className="trade_box_title_l wc mt-3">Back Image</h5>
                <div className="file_box mt-3">
                  <input
                    type="file"
                    className="input_l_file w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c"></h4>
                  <div className="text-center file_box_a">
                    <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
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
             
        </form>
     </div>
    </>
  )
}

export default Kycverification04