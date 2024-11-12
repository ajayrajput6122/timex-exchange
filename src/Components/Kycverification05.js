import React from 'react'

const Kycverification05 = () => {
  return (
    <>
    <h4 className="text-center wc mb-4"> <span>04</span> Selfie </h4>
    <div className="border_box_p mt-4">
        <form>
              <div className="form_t">
                <h5 className="trade_box_title_l wc">
                  Upload Your Image (Selfie)
                </h5>
                <div className="file_box">
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
              <div className="form_btn_prof">
                <button type="submit" className="btn_login wc">Submit</button>
                </div>
        </form>
    </div>
    </>
  )
}

export default Kycverification05