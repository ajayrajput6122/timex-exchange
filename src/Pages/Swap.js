import React, { useContext, useEffect, useState } from "react";
import Stak from "../Img/swap_pg.png";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";

const Swap = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [tokenData, setTokenData] = useState([]);
  const [payCoin, setPayCoin] = useState("");
  const [getCoin, setGetCoin] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [getAmount, setGetAmount] = useState("");
  const [bal, setBal] = useState("");
  const { authData } = useContext(AuthContext);

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
      console.error("Failed to swap", error);
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
                  Available Token Balance: {bal?parseFloat(bal).toFixed(4):0}
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
                        {dashboardData.map((coin) => (
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
                        {dashboardData.map((coin) => (
                          <option key={coin._id} value={coin.coinName}>
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
            <img className="stak fa-flip" src={Stak} alt="Swap Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swap;
