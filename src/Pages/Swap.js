import React, { useContext, useEffect, useState } from "react";
import Stak from "../Img/swap_pg.png";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";

const Swap = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [payCoin, setPayCoin] = useState("");
  const [getCoin, setGetCoin] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [getAmount, setGetAmount] = useState("");
  const [bal, setBal] = useState("");
  const { authData } = useContext(AuthContext);

  const getDashboardData = async () => {
    try {
      const response = await axios.get(`${base_url}/api/swap_tokens`);
      if (response.data.success) {
        setDashboardData(response.data.swap_tokens);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
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

  const handleSwap = async (e) => {
    e.preventDefault();
    try {
      if (!payCoin || !getCoin || !payAmount || !getAmount) {
        toast.dismiss();
        toast.error("Please select coin and enter amount");
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
        setPayAmount("");
        setGetAmount("");
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("failed to swap", error);
    }
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

  const calculateGetAmount = () => {
    const payCoinData = dashboardData.find((coin) => coin.coinName === payCoin);
    const getCoinData = dashboardData.find((coin) => coin.coinName === getCoin);

    if (payCoinData && getCoinData && payAmount) {
      const payPrice = payCoinData.price;
      const getPrice = getCoinData.price;
      const calculatedAmount = (payAmount * payPrice) / getPrice;
      if (calculatedAmount % 1 === 0) {
        setGetAmount(calculatedAmount.toFixed(0));
      } else {
        setGetAmount(calculatedAmount.toFixed(4));
      }
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

  useEffect(() => {
    if (payCoin) getWalletBal();
  }, [payCoin]);

  useEffect(() => {
    calculateGetAmount();
  }, [payAmount, payCoin, getCoin]);

  const handlePayCoinChange = (e) => {
    const selectedCoin = e.target.value;
    setPayCoin(selectedCoin);
    if (!selectedCoin) {
      setBal(""); 
    } 
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <>
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
                    Available Token Balance: {parseFloat(bal).toFixed(4)}
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
                          <option value={""}>Select Coin</option>
                          {dashboardData.map((coin, index) => (
                            <option key={index} value={coin.coinName}>
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
                    type="button"
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
                          <option value={""}>Select Coin</option>
                          {dashboardData.map((coin, index) => (
                            <option key={index} value={coin.coinName}>
                              {coin.coinName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <button className="btn_login wc" type="submit">
                    <i className="fa-solid fa-id-card fa-shake me-2"></i> Swap
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center alin_c">
              <img
                className="stak fa-flip"
                src={Stak}
                alt="Swap Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Swap;
