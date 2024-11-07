import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { base_url } from "../ApiService/BaseUrl";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contextapi/Auth";

const MyProfil = () => {
  const { authData } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    documentNumber: "",
    pan_number: "",
    _id: "",
    kycStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.phone ||
      !formData.pan_number ||
      !formData.address ||
      !formData.documentNumber ||
      !formData.firstname ||
      !formData.lastname
    ) {
      toast.dismiss();
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        `${base_url}/api/auth/verify_signin`,
        formData
      );
      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        // saveAuthData({
        //   token: response.data.user.accessToken,
        //   user: response.data.user,
        // });
        // navigate("/dashboard");
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Updatation failed");
      console.error("Updatation failed", error);
    }
  };

  const fetchProfileDetails = async () => {
    try {
      const response = await axios.get(`${base_url}/api/v1/userProfile`, {
        headers: {
          Authorization: authData?.token,
        },
      });
      if (response.data.success) {
        const userDetail = response.data.user;
        setFormData({
          _id: userDetail._id,
          kycStatus: userDetail.kycStatus,
          firstname: userDetail.firstname,
          lastname: userDetail.lastname,
          email: userDetail.email,
          phone: userDetail.phone,
          address: userDetail.address,
          pan_number: userDetail.pan_number,
          documentNumber: userDetail.documentNumber,
        });
        // saveAuthData({
        //   token: response.data.user.accessToken,
        //   user: response.data.user,
        // });
      } else {
      }
    } catch (error) {
      console.error("Details Not Found", error);
    }
  };

  useEffect(() => {
    fetchProfileDetails();
  }, []);
  return (
    <>
      <div className="d-flex j_con">
        <div>
          <h4 className="p_tile wc">My Profile</h4>
          <span className="p_span wc"> UID: {formData._id.slice(0,4)}</span>
        </div>
        <div>
          <h4 className="p_tile wc">KYC Status :-</h4>
          <span className="p_span wc">{formData.kycStatus}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
            <div className="form_t">
              <h5 className="trade_box_title_l wc">First Name</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  <i class="fa-solid fa-user-pen fa-beat wc"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
            <div className="form_t">
              <h5 className="trade_box_title_l wc">Last Name</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-user-pen fa-beat wc"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
            <div className="form_t">
              <h5 className="trade_box_title_l wc">Email</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                  disabled
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-envelope fa-beat wc"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6  mt-3">
            <div className="form_t">
              <h5 className="trade_box_title_l wc">Phone</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                  disabled
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-mobile-screen-button fa-beat"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6  mt-3">
            <div className="form_t">
              <h5 className="trade_box_title_l wc">Address</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                  disabled
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-address-book fa-beat"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6  mt-3">
            <div className="form_t">
              <h5 className="trade_box_title_l wc">PAN Detail</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="pan_number"
                  value={formData.pan_number}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                  disabled
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-credit-card fa-beat"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6  mt-3">
            <div className="form_t">
              <h5 className="trade_box_title_l wc">Adhaar Card Detail</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="documentNumber"
                  value={formData.documentNumber}
                  onChange={handleChange}
                  disabled
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-address-card fa-beat wc"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <button className="sub_01 wc" type="submit">
          {/* <i class="fa-solid fa-right-to-bracket fa-shake me-2"></i>  */}
          Submit
        </button>
      </form>
    </>
  );
};

export default MyProfil;
