import axios from "axios";
import React, { useEffect, useState } from "react";
import Kycverification01 from "./Kycverification01";
import Kycverification2 from "./Kycverification02";
import Kycverification3 from "./Kycverification03";
import Kycverification4 from "./Kycverification04";
import Kycverification5 from "./Kycverification05";

const Kycverification = () => {
  const [country, setCountry] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const getCountry = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      if (response.data) {
        setCountry(response.data);
      }
    } catch (error) {
      console.error("Country Data failed", error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div>
      <h4 className="text-center wc mb-4">KYC Verification</h4>
      {/* <form>
        <div className="border_box_p">
          <h4 className="p_tile gold_c">Region or KYC Type *</h4>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Select country</h5>
                <div className="f_group_l d-flex j_con">
                  <select
                    className="input_l w-100 wc"
                    name="country"
                    onChange={handleChange}
                  >
                    {country?.map((country) => (
                      <option value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-earth-americas fa-beat-fade wc"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6  mt-3">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">KYC Type</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-user-shield fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_box_p mt-4">
          <h4 className="p_tile gold_c">Personal Information *</h4>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">
                  Upload Your Image(Selfie)
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
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">First Name</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-user-pen fa-beat wc"></i>
                  </h4>
                </div>
              </div>
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Last Name</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-user-pen fa-beat wc"></i>
                  </h4>
                </div>
              </div>
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Date of birth</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="date"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-calendar-week fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <div className="form_t mt-3">
                <h5 className="trade_box_title_l wc">Gender</h5>
                <input className="radio_i" name="gender" type="radio" />
                <label className="02lable mx-2"> Male</label>
                <input className="radio_i" name="gender" type="radio" />
                <label className="02lable ms-2"> Female</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Mobile Number</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="tel"
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-mobile-retro fa-beat"></i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_box_p mt-4">
          <h4 className="p_tile gold_c mb-3">Address Information</h4>
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
        </div>
        <div className="border_box_p mt-4">
          <h4 className="p_tile gold_c mb-3">
            Document Verification (Pan Card) *
          </h4>
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
        </div>

        <div className="border_box_p mt-4">
          <h4 className="p_tile gold_c mb-3">Other Document Verification *</h4>
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
        </div>

        <div className="form_btn_prof">
          <button type="submit" className="btn_login wc">
            Submit for verification
          </button>
        </div>
      </form> */}
      <Kycverification01 />
      {/* <Kycverification2/> */}
      <Kycverification3/>
      <Kycverification4/>
      <Kycverification5/>
    </div>
  );
};

export default Kycverification;
