import React, { useState, useEffect } from "react";
import email2 from "../Img/email2.png";
import Mobile from "../Img/email-marketing.png";
import Loginbg from "../Img/qr_code_img_bg.png";
import Qr from "../Img/qr.png";
import axios from "axios";
import { base_url } from "../ApiService/BaseUrl";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contextapi/Auth";

const Register = () => {
  let location = useLocation();
  const params = new URLSearchParams(location.search);
  const sponsorId = params.get("sponsorId");
  const { saveAuthData } = useContext(AuthContext);
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    sponser_id: sponsorId ? sponsorId : "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
    // referralCode: "",
    register_type: "email",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOtpClick = async () => {
    if (!formData.email) {
      toast.dismiss();
      toast.error("Please enter an email address");
      return;
    }

    try {
      const response = await axios.post(`${base_url}/api/auth/registerOtp`, {
        email: formData.email,
        register_type: "email",
      });
      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        setTimer(120);
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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  

   
    if (
      !formData.email ||
      !formData.otp ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.dismiss();
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.dismiss();
      toast.error("Invalid email format. Please enter a valid email.");
      setLoading(false);
      return;
    }
  
    if (!passwordRegex.test(formData.password)) {
      toast.dismiss();
      toast.error(
        "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
      );
      setLoading(false);
      return;
    }
    if (!passwordRegex.test(formData.confirmPassword)) {
      toast.dismiss();
      toast.error(
        "Confirm Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
      );
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.dismiss();
      toast.error("Password don't match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${base_url}/api/auth/signup`,
        formData
      );
      if (response.data.success) {
        navigate("/dashboard");
        toast.dismiss();
        toast.success(response.data.message);
        saveAuthData({
          token: response.data.user.accessToken,
          user: response.data.user,
        });
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || "Registeration failed");
      console.error("Registeration failed", error);
    } finally {
      setLoading(false);
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
          <h2 class="title_h2 wc text-center title_h2_mb"> Register</h2>
          <div className="">
            <div className="register_f">
              <div className="login_box">
                <button
                  class="nav-link login_btn_t wc w-100 active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  {" "}
                  <img className="tab_img" src={email2} /> Email
                </button>
                <ul
                  class="nav nav-pills login_tab mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  {/* <li class="nav-item" role="presentation">
                    <button
                      class="nav-link login_btn_t wc w-100 active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      {" "}
                      <img className="tab_img" src={email2} /> Email
                    </button>
                  </li> */}
                  {/* <li class="nav-item" role="presentation">
                    <button
                      class="nav-link login_btn_t wc w-100"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      {" "}
                      <img className="tab_img1" src={Mobile} /> Phone
                    </button>
                  </li> */}
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade wc show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="login_f">
                      <form onSubmit={handleRegisterSubmit}>
                        {/* {sponsorId ? (
                          <div className="form_t">
                            <h5 className="trade_box_title_l wc">
                              Sponsor Id
                            </h5>
                            <div className="f_group_l d-flex j_con">
                              <input
                                type="text"
                                name="sponser_id"
                                value={sponsorId}
                                onChange={handleChange}
                                className="input_l w-100 wc"
                                autoComplete="off"
                              />
                              <h4 className="WC f_g_text alin_c">
                                <i class="fa-solid fa-user fa-beat"></i>
                              </h4>
                            </div>
                          </div>
                        ) : (
                          ""
                        )} */}
                        <div className="form_t">
                          <h5 className="trade_box_title_l wc">
                            Email Address
                          </h5>
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
                              <i class="fa-solid fa-envelope fa-beat"></i>
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
                                )}:${timer % 60 < 10 ? "0" : ""}${
                                  timer % 60
                                }`}</span>
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
                        {/* <div className="form_t mt-4">
                          <h5 className="trade_box_title_l wc">
                            Email Verification Code
                          </h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type="text"
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              <i class="fa-solid fa-comment fa-beat"></i>
                            </h4>
                          </div>
                        </div> */}
                        <div className="form_t mt-4">
                          <h5 className="trade_box_title_l wc">Password</h5>
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
                                  className="fa-solid fa-lock fa-beat"
                                  onClick={handleShowPassword}
                                ></i>
                              ) : (
                                <i
                                  className="fa-solid fa-unlock fa-beat"
                                  onClick={handleShowPassword}
                                ></i>
                              )}
                            </h4>
                          </div>
                        </div>
                        <div className="form_t mt-4">
                          <h5 className="trade_box_title_l wc">
                            Confirm Password{" "}
                          </h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type={!showConfirmPassword ? "password" : "text"}
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              {!showConfirmPassword ? (
                                <i
                                  className="fa-solid fa-lock fa-beat"
                                  onClick={handleShowConfirmPassword}
                                ></i>
                              ) : (
                                <i
                                  className="fa-solid fa-unlock fa-beat"
                                  onClick={handleShowConfirmPassword}
                                ></i>
                              )}
                            </h4>
                          </div>
                        </div>
                        <div className="form_t">
                          <h5 className="trade_box_title_l wc">
                            Sponsor Id (Optional)
                          </h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type="text"
                              name="sponser_id"
                              value={sponsorId}
                              onChange={handleChange}
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              <i class="fa-solid fa-user fa-beat"></i>
                            </h4>
                          </div>
                        </div>
                        {/* <div className="form_t mt-4">
                          <h5 className="trade_box_title_l wc">
                            Referral Code (Optional)
                          </h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type="text"
                              name="referralCode"
                              value={formData.referralCode}
                              onChange={handleChange}
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              <i class="fa-solid fa-comment fa-beat"></i>
                            </h4>
                          </div>
                        </div> */}
                        {/* <h5 className='trade_box_title_l wc'><a>Forgot Password?</a></h5> */}

                        <button
                          className="btn_login wc"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <i className="fa fa-spinner fa-spin me-2"></i>
                          ) : (
                            <i class="fa-solid fa-id-card fa-shake me-2"></i>
                          )}{" "}
                          Register
                        </button>
                        <h5 className="text text-center mt-4">
                          Already have an account?{" "}
                          <Link to={"/login"} className="wc">
                            Login
                          </Link>
                        </h5>
                      </form>
                    </div>
                  </div>
                  {/* <div
                    class="tab-pane fade wc"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="login_f">
                      <form>
                        <div className="form_t">
                          <h5 className="trade_box_title_l wc">
                            Mobile Number
                          </h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type="email"
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              <i class="fa-solid fa-envelope fa-beat"></i>
                            </h4>
                          </div>
                        </div>
                        <div className="form_t mt-4">
                          <h5 className="trade_box_title_l wc">
                            Phone Verification Code
                          </h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type="text"
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              <i class="fa-solid fa-comment fa-beat"></i>
                            </h4>
                          </div>
                        </div>
                        <div className="form_t mt-4">
                          <h5 className="trade_box_title_l wc">Password</h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type="password"
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              <i class="fa-solid fa-lock fa-beat"></i>
                            </h4>
                          </div>
                        </div>
                        <div className="form_t mt-4">
                          <h5 className="trade_box_title_l wc">
                            Confirm Password{" "}
                          </h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type="password"
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              <i class="fa-solid fa-lock fa-beat"></i>
                            </h4>
                          </div>
                        </div>
                        {/* <div className="form_t mt-4">
                          <h5 className="trade_box_title_l wc">
                            Referral Code (Optional)
                          </h5>
                          <div className="f_group_l d-flex j_con">
                            <input
                              type="text"
                              className="input_l w-100 wc"
                              autoComplete="off"
                            />
                            <h4 className="WC f_g_text alin_c">
                              <i class="fa-solid fa-comment fa-beat"></i>
                            </h4>
                          </div>
                        </div> */}
                  {/* <h5 className='trade_box_title_l wc'><a>Forgot Password?</a></h5> */}

                  {/* <button className="btn_login wc" type="submit">
                          <i class="fa-solid fa-id-card fa-shake me-2"></i>{" "}
                          Register
                        </button>
                        <h5 className="text text-center mt-4">
                          Already have an account <a className="wc">Login</a>
                        </h5>
                      </form>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
