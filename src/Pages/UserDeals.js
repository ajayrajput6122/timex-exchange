import React, { useContext, useEffect, useState } from "react";
import Depot from "../Img/ud.png";
import axios from "axios";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";
import Pagination from "../Components/Pagination";

const UserDeals = () => {
  const [userInfo, setUserInfo] = useState();
  const [userHistory, setUserHistory] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinBalanceDetails, setCoinBalanceDetails] = useState();
  const [amount, setAmount] = useState("");
  const [coins, setCoins] = useState([]);
  const [userId, setUserId] = useState("");
  const { authData } = useContext(AuthContext);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 1,
    total: 0,
  });

  const getUser = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/auth/info`,
        {
          uid: userId.toUpperCase(),
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setUserInfo(response.data.data.email);
      } else {
        console.error(response.data.message);
        setUserInfo("");
      }
    } catch (error) {
      console.error("error fetching details", error);
    }
  };

  const GetBallance = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/useraccountbalance`,
        {
          tokenName: selectedCoin?.coinName,
          wallet_type: "main_wallet",
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setCoinBalanceDetails(response.data);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("error fetching details", error);
    }
  };

  const getCoins = async () => {
    try {
      const response = await axios.get(`${base_url}/api/token_list`);
      if (response.data.success) {
        setCoins(response.data.deposit_tokens);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("error fetching coins", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !selectedCoin || !amount) {
      toast.dismiss();
      toast.error("Please fill in the all feilds");
      return;
    }
    try {
      const response = await axios.post(
        `${base_url}/api/userFund_transfer`,
        {
          receicerId: userId.toUpperCase(),
          tokenId: selectedCoin?._id,
          amount: amount,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        getUserdealsHistory();
        setUserId("");
        setAmount("");
        setSelectedCoin(null);
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("failed to submit", error);
    }
  };

  const getUserdealsHistory = async (page = 1, pageSize = 10) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/all_token_deposit_transactions`,
        {
          transactionType: "fund_transfer",
          limit: pageSize,
          skip,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setUserHistory(response.data.data);
        setPagination((prev) => ({
          ...prev,
          total: response.data.total,
          current: page,
          pageSize,
        }));
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("unable to fetch data", error);
    }
  };

  const handlePageChange = (page, pageSize) => {
    getUserdealsHistory(page, pageSize);
  };

  useEffect(() => {
    getUserdealsHistory();
  }, []);

  useEffect(() => {
    getUser();
  }, [userId]);

  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    GetBallance();
  }, [selectedCoin]);
  return (
    <>
      <section className="sec01_login">
        <div className="container">
          <h2 className="title_h2 wc text-center mb-5">User Deals</h2>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img className="Depot1" src={Depot} alt="Depot" />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_f login_box">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form_t">
                    <h5 className="trade_box_title_l wc">User Id</h5>
                    <div className="f_group_l d-flex j_con">
                      <input
                        type="text"
                        name=""
                        className="input_l w-100 wc"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        autoComplete="off"
                      />
                      <h4 className="WC f_g_text alin_c">
                        <i class="fa-solid fa-users fa-beat wc"></i>
                      </h4>
                    </div>
                    <p className="text-white">{userInfo !== "" && userInfo}</p>
                  </div>
                  <div className="form_t mt-4">
                    <h5 className="trade_box_title_l wc">Select Coin</h5>
                    <div className="f_group_l d-flex j_con">
                      <select
                        className="input_l w-100 wc"
                        value={selectedCoin?.coinName || ""}
                        onChange={(e) => {
                          const selectedCoinName = e.target.value;
                          const coin = coins.find(
                            (coin) => coin.coinName === selectedCoinName
                          );
                          setSelectedCoin(coin || null);
                        }}
                      >
                        <option value="">Select Coin</option>
                        {coins && coins.length > 0
                          ? coins.map((coin, index) => (
                              <option value={coin.coinName} key={index}>
                                {coin.coinName}
                              </option>
                            ))
                          : ""}
                      </select>
                      <h4 className="WC f_g_text alin_c">
                        <i class="fa-solid fa-coins fa-beat wc"></i>
                      </h4>
                    </div>
                    <h5 className="text mt-4">
                      Main Wallet Balance : {coinBalanceDetails?.balance}{" "}
                      {coinBalanceDetails?.tokenName}
                    </h5>
                  </div>
                  <div className="form_t mt-4">
                    <h5 className="trade_box_title_l wc">Enter Your Amount</h5>
                    <div className="f_group_l d-flex j_con">
                      <input
                        type="text"
                        value={amount}
                        name=""
                        onChange={(e) => setAmount(e.target.value)}
                        className="input_l w-100 wc"
                        autoComplete="off"
                      />
                      <h4 className="WC f_g_text alin_c">
                        <i class="fa-solid fa-sack-dollar fa-beat wc"></i>
                      </h4>
                    </div>
                  </div>
                  <button className="btn_login wc" type="submit">
                    Submit
                  </button>
                </form>
                <h5 className="text text-center mt-4">
                  Minimum 1 USDT is required in order to initiate the
                  transaction
                </h5>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <h2 className="title_h2  wc mb-3">User Deals History</h2>
            <div className="trade_box ">
              <div className="table_over">
                <div className="table_scroll">
                  <table className="trade_table_222">
                    <tr>
                      <th className="t_t_heading wc b_boot">S No. </th>
                      <th className="t_t_heading wc b_boot"> Token Name </th>
                      <th className="t_t_heading wc b_boot"> Mode </th>
                      <th className="t_t_heading wc b_boot"> Amount </th>
                      <th className="t_t_heading wc b_boot"> From </th>
                      <th className="t_t_heading wc b_boot"> To</th>
                      <th className="t_t_heading wc b_boot"> Date & Time</th>
                    </tr>
                    {userHistory && userHistory.length > 0 ? (
                      userHistory.map((item, index) => (
                        <tr key={index}>
                          <td className="t_t_data b_boot wc">{index + 1}</td>
                          <td className="t_t_data b_boot wc">
                            {item?.tokenName}
                          </td>
                          <td className="t_t_data b_boot wc">{item?.mode}</td>
                          <td
                            className={`t_t_data b_boot wc ${
                              item.amount > 0 ? "gc" : "rc"
                            }`}
                          >
                            {item?.amount}
                          </td>
                          <td className="t_t_data b_boot wc">{item?.from}</td>
                          <td className="t_t_data b_boot wc">{item?.to}</td>
                          <td className="t_t_data b_boot wc">
                            {new Date(item.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="text-center" aria-colspan={10}>
                        No History Found
                      </tr>
                    )}
                  </table>
                </div>
              </div>
              {userHistory && userHistory.length > 0 ? (
                <div className="text-center py-2">
                  <Pagination
                    total={pagination.total}
                    pageSize={pagination.pageSize}
                    current={pagination.current}
                    onChange={handlePageChange}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDeals;
