import React, { useContext, useEffect, useState } from "react";
import Stak from "../Img/rb_2529.png";
import toast from "react-hot-toast";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";

const Staking = () => {
  const { authData } = useContext(AuthContext);
  const [dashboardData, setDashboardData] = useState([]);
  const [returnData, setReturnData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [formData, setFormData] = useState({
    amount: "",
    balance: "",
    tokenName: "",
    tokenId: "62c9a988187e31ce104cd317",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStake = async (e) => {
    e.preventDefault();

    if (!formData.amount) {
      toast.dismiss();
      toast.error("Please fill Amount");
      return;
    }

    try {
      const response = await axios.post(
        `${base_url}/api/stake_token`,
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
        setFormData((prev) => ({ ...prev, amount: "" }));
        getDashboardData();
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

  const getWalletBal = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/userwalletbalance`,
        { tokenName: "USDT" },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      setFormData((prev) => ({
        ...prev,
        balance: response.data.balance,
        tokenName: response.data.tokenName,
      }));
    } catch (error) {
      console.error("Error fetching stake history data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getDashboardData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/api/stake_info`,
        {},
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      setDashboardData(response.data.data);
    } catch (error) {
      console.error("Error fetching stake history data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getReturnData = async () => {
    setLoading2(true);
    try {
      const response = await axios.post(
        `${base_url}/api/stake_return_history`,
        {},
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setReturnData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching stake history data:", error);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    getDashboardData();
    getWalletBal();
    getReturnData();
  }, []);

  return (
    <>
      <section className="sec01_login">
        <div className="container">
          <div className="row column-rever_sm">
            <div className="col-lg-6 col-md-6 alin_c">
              <div className="d-flex j_con mb-3">
                <div>
                  <h5 className="trade_box_title_l wc">Staking in USDT</h5>
                </div>
                <div>
                  <h5 className="trade_box_title_l wc">
                    Bal: {formData?.balance} {formData?.tokenName}
                  </h5>
                </div>
              </div>
              <div className="login_f login_box">
                <form onSubmit={handleStake}>
                  <div className="form_t">
                    <h5 className="trade_box_title_l wc">Amount</h5>
                    <div className="f_group_l d-flex j_con">
                      <input
                        type="text"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="input_l w-100 wc"
                        autocomplete="off"
                      />
                      <h4 className="WC f_g_text alin_c">
                        <i class="fa-solid fa-money-bill-1-wave fa-beat wc"></i>
                      </h4>
                    </div>
                  </div>
                  <button className="btn_login wc" type="submit">
                    {" "}
                    <i className="fa-solid fa-id-card fa-shake me-2"></i> Stake{" "}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center alin_c">
              <img className="stak" src={Stak} />
            </div>
          </div>

          <div>
            <div className="trade_box ">
              <nav className=" pb-2 mb-4">
                <div class="nav nav-tabs t_t_btn_g t_t_btn_g02" id="nav-tab" role="tablist">
                  <button
                    class="nav-link btn_t02 t_t_btn02 wc mt-0 active"
                    id="nav-home-tab_t1"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home_t1"
                    type="button"
                    role="tab"
                    aria-controls="nav-home_t1"
                    aria-selected="true"
                  >
                    Staking History
                  </button>
                  <button
                    class="nav-link btn_t02 t_t_btn02 mt-0 wc"
                    id="nav-profile-tab_t1"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile_t1"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile_t1"
                    aria-selected="false"
                  >
                    Return History
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show wc active"
                  id="nav-home_t1"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="table_over">
                    <div className="table_scroll">
                      <table className="trade_table_222">
                        {loading && (
                          <div
                            className="d-flex justify-content-center align-items-center"
                            // style={{ height: "100vh" }}
                          >
                            <div
                              className="spinner-border text-white"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        )}
                        {dashboardData.length > 0 ? (
                          <>
                            <tr>
                              <th className="t_t_heading wc b_boot">S No. </th>
                              <th className="t_t_heading wc b_boot">
                                {" "}
                                User ID{" "}
                              </th>
                              <th className="t_t_heading wc b_boot">
                                {" "}
                                Amount{" "}
                              </th>
                              <th className="t_t_heading wc b_boot">
                                {" "}
                                Return Amount{" "}
                              </th>
                              <th className="t_t_heading wc b_boot"> Days</th>
                              <th className="t_t_heading wc b_boot">
                                {" "}
                                Date & Time
                              </th>
                            </tr>
                            {dashboardData.map((coin, index) => (
                              <tr key={index}>
                                <td className="t_t_data b_boot wc">
                                  {index + 1}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {coin._id}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {coin.amount}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {coin.returnRate}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {coin.days}
                                </td>
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
                </div>
                <div
                  class="tab-pane fade wc"
                  id="nav-profile_t1"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="table_over">
                    <div className="table_scroll">
                      <table className="trade_table_222">
                        {loading2 && (
                          <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ height: "100vh" }}
                          >
                            <div
                              className="spinner-border text-white"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        )}
                        {returnData.length > 0 ? (
                          <>
                            <tr>
                              <th className="t_t_heading wc b_boot">S No. </th>
                              <th className="t_t_heading wc b_boot">
                                {" "}
                                User ID{" "}
                              </th>
                              <th className="t_t_heading wc b_boot">
                                {" "}
                                Amount{" "}
                              </th>
                              <th className="t_t_heading wc b_boot">
                                {" "}
                                Return Amount{" "}
                              </th>
                              <th className="t_t_heading wc b_boot"> Days</th>
                              <th className="t_t_heading wc b_boot">
                                {" "}
                                Date & Time
                              </th>
                            </tr>
                            {returnData.map((coin, index) => (
                              <tr key={index}>
                                <td className="t_t_data b_boot wc">
                                  {index + 1}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {coin._id}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {coin.amount}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {coin.returnRate}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {coin.day}
                                </td>
                                <td className="t_t_data b_boot wc">
                                  {new Date(coin.createdAt).toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <div className="text-center wc mt-5">
                            <h2>No data available</h2>
                            <p>Please try again later.</p>
                          </div>
                        )}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Staking;
