import React, { useContext, useEffect, useState } from "react";
import Stak from "../Img/swap_pg.png";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";
import Pagination from "../Components/Pagination";

const Swap = () => {
  const [data, setdata] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);
  const [tokenData, setTokenData] = useState([]);
  const [payCoin, setPayCoin] = useState("");
  const [getCoin, setGetCoin] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [getAmount, setGetAmount] = useState("");
  const [bal, setBal] = useState("");
  const { authData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const getTokenList = async () => {
    try {
      const response = await axios.get(`${base_url}/api/swap/tokens`);
      if (response.data.success === 1) {
        setDashboardData(response.data.swapTokens);
        setTokenData(response.data.tokenPrices);
      } else {
        console.error("Error fetching token list:", response.data.message);
      }
    } catch (error) {
      console.error("Failed to fetch token list:", error);
    }
  };

  const handlePageChange = (page, pageSize) => {
    fetchData(page, pageSize);
  };

  const getWalletBal = async () => {
    if (!payCoin) {
      setBal("");
      return;
    }
    try {
      const response = await axios.post(
        `${base_url}/api/userwalletbalance`,
        { tokenName: payCoin },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      setBal(response.data.balance);
    } catch (error) {
      console.error("Error fetching wallet balance:", error);
    }
  };

  const fetchData = async (page = 1, pageSize = 10) => {
    setLoading(true);
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/swap_transactions`,
        {
          limit: pageSize,
          skip,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      setdata(response.data.records);
      setPagination((prev) => ({
        ...prev,
        total: response.data.total,
        current: page,
        pageSize,
      }));
    } catch (error) {
      console.error("Error fetching swap history data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateGetAmount = () => {
    const payCoinData = tokenData.find((coin) => coin.coinName === payCoin);
    const getCoinData = tokenData.find((coin) => coin.coinName === getCoin);

    if (payCoinData && getCoinData && payAmount) {
      const payPrice = parseFloat(payCoinData.price);
      const getPrice = parseFloat(getCoinData.price);
      const calculatedAmount = (payAmount * payPrice) / getPrice;
      setGetAmount(calculatedAmount.toFixed(4));
    }
  };

  const handleSwap = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!payCoin || !getCoin || !payAmount || !getAmount) {
        toast.dismiss();
        toast.error("Please select coin and enter amount");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${base_url}/api/swap_coins`,
        {
          from: payCoin,
          to: getCoin,
          quantity: payAmount,
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
        fetchData();
        setPayAmount("");
        setGetAmount("");
        setPayCoin("");
        setGetCoin("");
        setBal("");
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Failed to swap", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSwapCoins = () => {
    const tempCoin = payCoin;
    setPayCoin(getCoin);
    setGetCoin(tempCoin);
    const tempAmount = payAmount;
    setPayAmount(getAmount);
    setGetAmount(tempAmount);
    calculateGetAmount();
  };

  const handlePayAmountChange = (e) => {
    const value = e.target.value;
    setPayAmount(value);

    if (!value) {
      setGetAmount("");
    } else {
      calculateGetAmount();
    }
  };

  const handlePayCoinChange = (e) => {
    const selectedCoin = e.target.value;
    setPayCoin(selectedCoin);
    if (!selectedCoin) {
      setBal("");
    }
  };

  useEffect(() => {
    getTokenList();
  }, []);

  useEffect(() => {
    if (payCoin) getWalletBal();
  }, [payCoin]);

  useEffect(() => {
    calculateGetAmount();
  }, [payAmount, payCoin, getCoin]);

  return (
    <section className="sec01_login">
      <div className="container">
        <div className="row column-rever_sm">
          <div className="col-lg-6 col-md-6 alin_c">
            <div className="d-flex j_con mb-3">
              <div>
                <h5 className="trade_box_title_l wc">Swap</h5>
              </div>
              <div>
                <h5 className="trade_box_title_l wc">
                  Available Token Balance:{" "}
                  {bal ? parseFloat(bal).toFixed(4) : 0}
                </h5>
              </div>
            </div>
            <div className="login_f login_box">
              <form onSubmit={(e) => handleSwap(e)}>
                <div className="form_t">
                  <h5 className="trade_box_title_l wc">You Pay</h5>
                  <div className="f_group_l d-flex j_con">
                    <input
                      type="text"
                      className="input_l w-100 wc"
                      value={payAmount}
                      onChange={handlePayAmountChange}
                      autoComplete="off"
                    />
                    <div className="WC f_g_text alin_c">
                      <select
                        className="swap_sel"
                        onChange={handlePayCoinChange}
                        value={payCoin}
                      >
                        <option value="">Select Coin</option>
                        {dashboardData
                          .filter((coin) => coin.coinName !== getCoin)
                          .map((coin) => (
                            <option key={coin._id} value={coin.coinName}>
                              {coin.coinName}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                <h5
                  className="trade_box_title_l wc text-center mt-4"
                  onClick={handleSwapCoins}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-repeat fa-beat wc"></i>
                </h5>
                <div className="form_t">
                  <h5 className="trade_box_title_l wc">You Get</h5>
                  <div className="f_group_l d-flex j_con">
                    <input
                      type="text"
                      className="input_l w-100 wc"
                      value={getAmount}
                      readOnly
                      autoComplete="off"
                    />
                    <div className="WC f_g_text alin_c">
                      <select
                        className="swap_sel"
                        onChange={(e) => setGetCoin(e.target.value)}
                        value={getCoin}
                      >
                        <option value="">Select Coin</option>
                        {dashboardData
                          .filter((coin) => coin.coinName !== payCoin)
                          .map((coin) => (
                            <option key={coin._id} value={coin.coinName}>
                              {coin.coinName}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  className="btn_login wc"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <i className="fa fa-spinner fa-spin me-2"></i>
                  ) : (
                    <i className="fa-solid fa-id-card fa-shake me-2"></i>
                  )}{" "}
                  Swap
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center alin_c">
            <img className="stak fa-flip" src={Stak} alt="Swap Illustration" />
          </div>
        </div>
        <h2 className="title_h2 wc text-center mt-3">Swap History</h2>
        <div className="table_over sec4_box mt-3">
          <div className="table_over">
            <div className="table_scroll">
              <table className="trade_table_222">
                <tr>
                  <th className="t_t_heading wc b_boot">S No. </th>
                  <th className="t_t_heading wc b_boot">Buy Amount</th>
                  <th className="t_t_heading wc b_boot">Sell Amount </th>
                  {/* <th className="t_t_heading wc b_boot">Return Amount </th> */}
                  <th className="t_t_heading wc b_boot">From </th>
                  <th className="t_t_heading wc b_boot">To </th>
                  <th className="t_t_heading wc b_boot">Date & Time </th>
                </tr>
                {data && data.length > 0 ? (
                  data?.map((item, index) => (
                    <tr key={index}>
                      <td className="t_t_data b_boot wc">
                        {(pagination.current - 1) * pagination.pageSize +
                          index +
                          1}
                      </td>{" "}
                      <td
                        className={`t_t_data b_boot wc ${
                          item.currency_amount > 0 ? "gc" : "rc"
                        }`}
                      >
                        {item.currency_amount}
                      </td>
                      <td
                        className={`t_t_data b_boot wc ${
                          item.amount > 0 ? "gc" : "rc"
                        }`}
                      >
                        {item.amount}
                      </td>
                      <td className="t_t_data b_boot wc">{item.currency}</td>
                      <td className="t_t_data b_boot wc">{item.swaptoken}</td>
                      <td className="t_t_data b_boot wc">
                        {new Date(item.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="wc">
                    <td colSpan="10" className="text-center">
                      <small>No History Found</small>
                    </td>
                  </tr>
                )}
              </table>
            </div>
          </div>
          {data && data.length > 0 ? (
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
    </section>
  );
};

export default Swap;
