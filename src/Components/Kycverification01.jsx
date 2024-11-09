import axios from 'axios'
import React, { useEffect, useState } from "react";

const Kycverification01 = () => {
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
    <>
      <h4 className="text-center wc mb-4">01 Personal Information </h4>
      <div className="">
        <form>
        <div className="border_box_p mt-4 ">
        <div className="row">
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
            <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
              
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
              <div className="form_t mt-3">
                <h5 className="trade_box_title_l wc">Gender</h5>
                <input className="radio_i" name="gender" type="radio" />
                <label className="02lable mx-2"> Male</label>
                <input className="radio_i" name="gender" type="radio" />
                <label className="02lable ms-2"> Female</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              
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

export default Kycverification01
