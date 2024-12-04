import React, { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";
import { Link, useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const { logout } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
    user_type: "email",
  });

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
  const handleOtpClick = async () => {
    if (!formData.email) {
      toast.dismiss();
      toast.error("Please enter an email address");
      return;
    }

    try {
      const response = await axios.post(
        `${base_url}/api/auth/forgotpasswordotp`,
        {
          email: formData.email,
          user_type: formData.user_type,
        }
      );
      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        setTimer(180);
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send OTP");
      console.error("Failed to request OTP", error);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.otp ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.dismiss();
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.dismiss();
      toast.error("Password Don't Match");
      return;
    }
    try {
      const response = await axios.post(
        `${base_url}/api/auth/forgotpassword`,
        formData
      );
      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        logout();
        navigate("/login");
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Forgot Password failed");
      console.error("Forgot Password failed", error);
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <>
      <section className="sec01_login">
        <div className="container">
          <h2 class="title_h2 wc text-center title_h2_mb"> Forgot Password</h2>
          <div className="login_f login_box register_f">
            <form onSubmit={handleForgotPassword}>
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Email Address</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i class="fa-solid fa-envelope fa-beat wc"></i>
                  </h4>
                </div>
              </div>
              <div className="form_t mt-4">
                <h5 className="trade_box_title_l wc">
                  Email Verification Code
                </h5>
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
                      <span className="otp_btn wc">{`${Math.floor(
                        timer / 60
                      )}:${timer % 60 < 10 ? "0" : ""}${timer % 60}`}</span>
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
              <div className="form_t mt-4">
                <h5 className="trade_box_title_l wc">New Password</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type={!showPassword ? "password" : "text"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    {!showPassword ? (
                      <i
                        className="fa-solid text-white fa-lock fa-beat"
                        onClick={handleShow}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid text-white fa-unlock fa-beat"
                        onClick={handleShow}
                      ></i>
                    )}
                  </h4>
                </div>
              </div>
              <div className="form_t mt-4">
                <h5 className="trade_box_title_l wc">Confirm Password</h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type={!showPassword ? "password" : "text"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="input_l w-100 wc"
                    autoComplete="off"
                  />
                  <h4 className="WC f_g_text alin_c">
                    {!showConfirmPassword ? (
                      <i
                        className="fa-solid text-white fa-lock fa-beat"
                        onClick={handleShowConfirmPassword}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid text-white fa-unlock fa-beat"
                        onClick={handleShowConfirmPassword}
                      ></i>
                    )}
                  </h4>
                </div>
              </div>
              <button className="btn_login wc" type="submit">
                Forgot Password{" "}
              </button>
              <h5 className="text text-center mt-4">
                Have an account?{" "}
                <Link className="wc" to={"/login"}>
                  Log In here
                </Link>
              </h5>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forgotpassword;
