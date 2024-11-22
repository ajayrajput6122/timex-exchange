import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "../ApiService/BaseUrl";

const BugReports = () => {
  const { authData } = useContext(AuthContext);
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
  }); 

  const getDashboardData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/api/user_reportBug_history`,
        {},
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      setDashboardData(response.data.data);
    } catch (error) {
      console.error("Error fetching bug history data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  // if (dashboardData.length === 0) {
  //   return (
  //     <div className="text-center text-white mt-5">
  //       <h2>No data available</h2>
  //       <p>Please try again later.</p>
  //     </div>
  //   );
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.url || !formData.description) {
      toast.dismiss();
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(`${base_url}/api/reportbug`, formData, {
        headers: {
          Authorization: authData?.token,
        },
      });
      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        getDashboardData();
        setFormData({ title: "", url: "", description: "" });
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
      toast.error("Submit failed");
      console.error("Submit failed", error);
    }
  };

  return (
    <>
      <h4 className="text-center wc mb-0">Bug Reports</h4>
      <div className="row column-rever_sm">
        <div className="col-lg-6 col-md-6 mt-3">
          <form onSubmit={handleSubmit}>
            <div className="form_t">
              <h5 className="trade_box_title_l wc">Bug Title</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-mobile-screen-button fa-beat"></i>
                </h4>
              </div>
            </div>
            <div className="form_t">
              <h5 className="trade_box_title_l wc">Bug Page URL</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-mobile-screen-button fa-beat"></i>
                </h4>
              </div>
            </div>
            <div className="form_t">
              <h5 className="trade_box_title_l wc">
                Write a short Description
              </h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="input_l w-100 wc"
                  autoComplete="off"
                />
                <h4 className="WC f_g_text alin_c">
                  <i className="fa-solid fa-mobile-screen-button fa-beat"></i>
                </h4>
              </div>
            </div>
            <button className="sub_01 wc" type="submit">
              Submit Report
            </button>
          </form>
        </div>
        <div className="col-lg-6 col-md-6 mt-3">
          <h5 className="trade_box_title_l wc text-center">
            Report bugs and earn up to 1000 crypto as a bug bonus!
          </h5>
          <p className="sec4_box_text text-center">
          Discovering bugs or errors on our platform? We want to hear from you! Your insights are incredibly valuable in ensuring that our platform delivers the best possible performance and user experience.

          </p>
          <p className="sec4_box_text text-center">
          To show our appreciation for your efforts, we’re offering a generous reward of up to 1000 crypto as a bug bounty bonus! If you come across any issues, no matter how small, don’t hesitate to report them. By sharing your findings, you not only help us enhance the platform for all users but also get the chance to earn exciting crypto rewards.
          </p>

          <p className="sec4_box_text text-center">
          Your feedback plays a crucial role in shaping the future of our platform. Together, we can identify and fix any problems, ensuring a seamless experience for everyone. So, keep an eye out for bugs or errors, and let us know right away. Remember, your contribution makes a difference—and gets rewarded too!
          </p>
        </div>
      </div>
      <h4 className="text-center wc titel_h4_my">Bug History</h4>
      <div className="table_over sec4_box">
        <div className="table_scroll">
          <table className="refferal_earns_t">
            {loading && (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <div className="spinner-border text-white" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {dashboardData.length > 0 ? (
              <>
                <tr>
                  <th className="t_t_heading wc b_boot">S No. </th>
                  <th className="t_t_heading wc b_boot"> Title </th>
                  <th className="t_t_heading wc b_boot"> URL </th>
                  <th className="t_t_heading wc b_boot"> Description </th>
                  <th className="t_t_heading wc b_boot"> Status</th>
                  <th className="t_t_heading wc b_boot"> Date & Time</th>
                </tr>
                {dashboardData.map((coin, index) => (
                  <tr key={index}>
                    <td className="t_t_data b_boot wc">{index + 1}</td>
                    <td className="t_t_data b_boot wc">{coin.title}</td>
                    <td className="t_t_data b_boot wc">{coin.url}</td>
                    <td className="t_t_data b_boot wc">{coin.description}</td>
                    <td className="t_t_data b_boot wc">{coin.status}</td>
                    <td className="t_t_data b_boot wc">
                      {new Date(coin.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <div className="text-center text-white mt-5">
                <h2>No data available</h2>
                <p>Please try again later.</p>
              </div>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default BugReports;
