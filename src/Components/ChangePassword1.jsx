import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";

const ChangePassword1 = () => {
  const { authData } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [timer, setTimer] = useState(0);
  const [formData, setFormData] = useState({
    current_pass: "",
    new_pass: "",
    confirm_pass: "",
  });
  const handleShowCurr = () => {
    setCurrentPassword(!currentPassword);
  };
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  //   if (!formData.email) {
  //     toast.dismiss();
  //     toast.error("Please enter an email address");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       `${base_url}/api/auth/forgotpasswordotp`,
  //       {
  //         email: formData.email,
  //         user_type: formData.user_type,
  //       }
  //     );
  //     if (response.data.success) {
  //       toast.dismiss();
  //       toast.success(response.data.message);
  //       setTimer(120);
  //     } else {
  //       toast.dismiss();
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     toast.dismiss();
  //     toast.error("Failed to send OTP");
  //     console.error("Failed to request OTP", error);
  //   }
  // };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (
      !formData.current_pass ||
      !formData.new_pass ||
      !formData.confirm_pass
    ) {
      toast.dismiss();
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.new_pass !== formData.confirm_pass) {
      toast.dismiss();
      toast.error("Password Don't Match");
      return;
    }

    if (!passwordRegex.test(formData.current_pass)) {
      toast.dismiss();
      toast.error(
        "Current Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
      );
      return;
    }
    if (!passwordRegex.test(formData.new_pass)) {
      toast.dismiss();
      toast.error(
        "New Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
      );
      return;
    }
    if (!passwordRegex.test(formData.confirm_pass)) {
      toast.dismiss();
      toast.error(
        "Confirm Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
      );
      return;
    }

    try {
      const response = await axios.post(
        `${base_url}/api/auth/resetpassword`,
        formData,
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        setFormData({ current_pass: "", new_pass: "", confirm_pass: "" });
        // logout();
        // navigate("/login");
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || "Forgot Password failed");
      console.error("Forgot Password failed", error);
    }
  };
  return (
    <>
      <h4 className="text-center wc">Change Password</h4>
      <form onSubmit={handleForgotPassword}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <div className="form_t mt-4">
              <h5 className="trade_box_title_l wc">Current Password</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type={!currentPassword ? "password" : "text"}
                  name="current_pass"
                  value={formData.current_pass}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  {!currentPassword ? (
                    <i
                      className="fa-solid text-white fa-lock fa-beat wc"
                      onClick={handleShowCurr}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid text-white fa-unlock fa-beat wc"
                      onClick={handleShowCurr}
                    ></i>
                  )}
                </h4>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-6 col-sm-6 ">
            <div className="form_t mt-4">
              <h5 className="trade_box_title_l wc">Email Verification Code</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  {timer > 0 ? (
                    <span className="otp_btn wc">{`${Math.floor(timer / 60)}:${
                      timer % 60 < 10 ? "0" : ""
                    }${timer % 60}`}</span>
                  ) : (
                    <span
                      className="otp_btn wc"
                      type="button"
                      onClick={handleOtpClick}
                    >
                      OTP
                    </span>
                  )}
                </h4>
              </div>
            </div>
          </div> */}
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <div className="form_t mt-4">
              <h5 className="trade_box_title_l wc">New Password</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type={!showPassword ? "password" : "text"}
                  name="new_pass"
                  value={formData.new_pass}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  {!showPassword ? (
                    <i
                      className="fa-solid text-white fa-lock fa-beat wc"
                      onClick={handleShow}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid text-white fa-unlock fa-beat wc"
                      onClick={handleShow}
                    ></i>
                  )}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <div className="form_t mt-4">
              <h5 className="trade_box_title_l wc">Confirm Password</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type={!showConfirmPassword ? "password" : "text"}
                  name="confirm_pass"
                  value={formData.confirm_pass}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  {!showConfirmPassword ? (
                    <i
                      className="fa-solid text-white fa-lock fa-beat wc"
                      onClick={handleShowConfirmPassword}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid text-white fa-unlock fa-beat wc"
                      onClick={handleShowConfirmPassword}
                    ></i>
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <button className="sub_01 wc" type="submit">
          Change Password
        </button>
      </form>
    </>
  );
};

export default ChangePassword1;
