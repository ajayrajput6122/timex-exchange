import React, { useContext, useEffect, useState, useRef } from "react";
import Growth from "../Img/btccoin.png";
import axios from "axios";
import { base_url } from "../ApiService/BaseUrl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";
import Pagination from "../Components/Pagination";

const Trade = () => {
  const { authData } = useContext(AuthContext);
  const [balance, setBallance] = useState("");
  const [sellBalance, setSellBallance] = useState("");
  const [buyamount, setBuymount] = useState("");
  const [sellamount, setSellamount] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
  });
  const [coin, setCoin] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState([]);
  const [pairCurrency, setPairCurrency] = useState([]);
  const [openOrder, setOpenOrder] = useState([]);
  const [pendingOrder, setPendingOrder] = useState([]);
  const [completeOrder, setCompleteOrder] = useState([]);
  const [recentTrade, setRecentTrade] = useState([]);
  const [latestPrice, setLatestPrice] = useState("");
  const [sellLimit, setSellLimit] = useState("MARKET");
  const [buyLimit, setBuyLimit] = useState("MARKET");
  const [latestTotal, setLatestTotal] = useState("");
  const [latestAmount, setLatestAmount] = useState("");
  const [tradeData, setTradeData] = useState([]);
  const [openTrades, setopenTrades] = useState([]);
  const [pastTrades, setPastTrades] = useState([]);
  const [groupBy, setGroupby] = useState("4");
  const navigate = useNavigate();
  const location = useLocation();
  const buyTotal = useRef();
  const sellTotal = useRef();

  const openTrade = async () => {
    try {
      const response = await axios.post(`${base_url}/api/mainMarket`);
      if (response.data.success) {
        setopenTrades(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pastTrade = async () => {
    try {
      const response = await axios.post(`${base_url}/api/mainMarket`);
      if (response.data.success) {
        setPastTrades(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const FetchMarketData = async () => {
    try {
      const response = await axios.post(`${base_url}/api/mainMarket`);
      if (response.data.success) {
        setCoin(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async (e) => {
    e.preventDefault();
    try {
      if (buyLimit === "LIMIT") {
        if (!latestPrice || !buyamount) {
          toast.dismiss();
          toast.error("Please fill all feilds");
          return;
        }
      }
      if (buyLimit === "MARKET") {
        if (!buyamount) {
          toast.dismiss();
          toast.error("Please fill Amount");
          return;
        }
      }

      const response = await axios.post(
        `${base_url}/api/place_trading_order`,
        {
          mode: "BUY",
          orderType: buyLimit,
          tokenQuantity: buyamount,
          tokenId: selectedCoin?._id,
          pairCurrency: pairCurrency?._id,
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
        setBuymount("");
        GetBallance();
        getOpenOrder();
        getOpenOrder();
        getPendingOrder();
        getCompletedOrder();
        getRecentTrade();
        buyTotal.current.value.reset();
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSell = async (e) => {
    e.preventDefault();
    try {
      if (sellLimit === "LIMIT") {
        if (!latestPrice || !sellamount) {
          toast.dismiss();
          toast.error("Please fill all feilds");
          return;
        }
      }
      if (sellLimit === "MARKET") {
        if (!sellamount) {
          toast.dismiss();
          toast.error("Please fill Amount");
          return;
        }
      }

      const response = await axios.post(
        `${base_url}/api/place_trading_order`,
        {
          mode: "SELL",
          orderType: sellLimit,
          tokenQuantity: sellamount,
          tokenId: selectedCoin?._id,
          pairCurrency: pairCurrency?._id,
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
        GetSellBallance();
        setSellamount("");
        getOpenOrder();
        getPendingOrder();
        getCompletedOrder();
        getRecentTrade();
        // getOrder();
        sellTotal.current.value.reset();
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const GetBallance = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/useraccountbalance`,
        {
          tokenName: "USDT",
          wallet_type: "trading_wallet",
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setBallance(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const GetSellBallance = async () => {
    try {
      if (!selectedCoin?.symbol) {
        console.error("Token name is not set for selectedCoin.");
        return;
      }
      const response = await axios.post(
        `${base_url}/api/useraccountbalance`,
        {
          tokenName: selectedCoin?.symbol,
          wallet_type: "trading_wallet",
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setSellBallance(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const GetpairCurrency = async () => {
    try {
      const response = await axios.get(
        `${base_url}/api/pairCurrency`,
        {},
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setPairCurrency(response.data.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getOpenOrder = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/trading_orders`,
        {
          status: "PARTIALFILLED",
          tokenId: selectedCoin?._id,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setOpenOrder(response.data.orders);
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("unable to fetch data", error);
    }
  };

  const handlePageChange = (page, pageSize) => {
    getCompletedOrder(page, pageSize);
  };

  const getPendingOrder = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/trading_orders`,
        {
          status: "PENDING",
          tokenId: selectedCoin?._id,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setPendingOrder(response.data.orders);
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("unable to fetch data", error);
    }
  };
  const getCompletedOrder = async (page = 1, pageSize = 10) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/trading_orders`,
        {
          status: "COMPLETED",
          tokenId: selectedCoin?._id,
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
        setCompleteOrder(response.data.orders);
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

  const getRecentTrade = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/recent_trades`,
        {
          tokenId: selectedCoin?._id,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setRecentTrade(response.data.Data);
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("unable to fetch data", error);
    }
  };

  useEffect(() => {
    if (selectedCoin?.symbol) {
      getOpenOrder();
      getPendingOrder();
      getCompletedOrder();
      getRecentTrade();
    }
  }, [selectedCoin]);

  useEffect(() => {
    if (selectedCoin?.symbol) {
      GetSellBallance();
    }
  }, [selectedCoin]);

  useEffect(() => {
    FetchMarketData();
  }, []);

  useEffect(() => {
    GetBallance();
  }, []);

  useEffect(() => {
    GetpairCurrency();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const symbol = queryParams.get("symbol");
    const defaultCoin =
      coin.find(
        (c) => c.symbol === symbol || c.symbol === symbol?.replace("USDT", "")
      ) || coin[0];
    // const defaultCoin = coin.find((c) => c.symbol === symbol) || coin[0];
    setSelectedCoin(defaultCoin);
  }, [location.search, coin]);

  const handleCoinChange = (newCoin) => {
    setSelectedCoin(newCoin);
    navigate(
      `?symbol=${
        newCoin.symbol.includes("USDT")
          ? newCoin.symbol
          : `${newCoin.symbol}USDT`
      }`
    );
    // navigate(`?symbol=${newCoin.symbol}`);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      new window.TradingView.widget({
        container_id: "tradingview_chart",
        width: "100%",
        height: "320px",
        symbol: `BINANCE:${selectedCoin?.symbol}`,
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        save_image: false,
        studies: [],
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [selectedCoin]);

  useEffect(() => {
    if (!selectedCoin?.symbol) return;

    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${selectedCoin.symbol.toLowerCase()}usdt@trade`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      const newTrade = {
        price: parseFloat(data.p).toFixed(2),
        quantity: parseFloat(data.q).toFixed(groupBy),
        total: (parseFloat(data.p) * parseFloat(data.q)).toFixed(2),
      };

      setTradeData((prev) => {
        if (prev.length === 0 || prev[0].price !== newTrade.price) {
          return [newTrade, ...prev];
        }
        return prev;
      });

      setLatestPrice(newTrade.price);
      setLatestAmount(newTrade.quantity);
      setLatestTotal(newTrade.total);
    };

    return () => ws.close();
  }, [selectedCoin?.symbol]);

  const handleClickAmount = (percentage) => {
    const amountByPer = (balance.balance * percentage) / 100;
    setBuymount(amountByPer.toFixed(4));
  };
  const handleClickSellAmount = (percentage) => {
    const amountByPer = (sellBalance.balance * percentage) / 100;
    setSellamount(amountByPer.toFixed(4));
  };

  return (
    <>
      <section className="sec01_trade">
        <div className="row">
          <div className="col-lg-7 p-1">
            <div className="trade_box ">
              <div className="d-flex j_con">
                <div>
                  <div className="icon-box d-flex">
                    <div className="icon-box-icon alin_c">
                      <img
                        className="box_img_trade"
                        src={selectedCoin?.image}
                      />
                    </div>
                    <div className="icon-box-con alin_c">
                      <h5 className="box_trad_title wc">
                        {selectedCoin?.name}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-3 alin_c">
                    {/* <p className="rate_title rc">6589656</p> */}
                    <p className="rate_title rc">
                      <span className="text-success">{latestPrice}</span>
                    </p>
                  </div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle t_btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {selectedCoin?.symbol}
                    </button>
                    <ul
                      class="dropdown-menu d_trade "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <div className="d-flex j_con b_boot pb-2 mb-1">
                          <h5 className="trade_box_title1 wc">Coin Name</h5>
                          <h5 className="trade_box_title1 wc">
                            Coin Price (USDT)
                          </h5>
                        </div>
                        {coin && coin.length > 0
                          ? coin.map((coin, index) => (
                              <div
                                key={index}
                                onClick={() => handleCoinChange(coin)}
                                style={{ cursor: "pointer" }}
                                className="d-flex j_con trade_ul b_boot"
                              >
                                <div className="icon-box d-flex">
                                  <div className="icon-box-icon alin_c">
                                    <img
                                      className="box_img_trade"
                                      src={coin.image}
                                    />
                                  </div>
                                  <div className="icon-box-con alin_c">
                                    <h5 className="box_trad_title wc">
                                      {coin.name}
                                    </h5>
                                  </div>
                                </div>
                                <div className="">
                                  <p className="rate_title wc">
                                    {coin.price.toFixed(4)}
                                  </p>
                                  <p className="rate_text gc">
                                    {coin.percent_change_24h}
                                  </p>
                                </div>
                              </div>
                            ))
                          : ""}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="trade_box trade_box_chart mt-2"
              id="tradingview_chart"
            ></div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 p-1">
                <div className="trade_box trade_box1 o_d">
                  <h4 className="text-center trade_box_title b_boot">
                    Order Book
                  </h4>
                  <div className="d-flex j_con">
                    <div>
                      <h5 className="trade_box_title1 wc">Group By</h5>
                    </div>
                    <div>
                      <select
                        className="t_from"
                        value={groupBy}
                        onChange={(e) => setGroupby(e.target.value)}
                      >
                        <option value={"4"}>0.00001</option>
                        <option value={"3"}>0.0001</option>
                        <option value={"2"}>0.001</option>
                        <option value={"1"}>0.01</option>
                      </select>
                    </div>
                  </div>
                  <div className="t_table_main t_table_main_rr">
                    <div className="t_table_sec">
                      <table className="trade_table_1">
                        <tr>
                          <th className="t_t_heading wc b_boot">
                            Price (USDT)
                          </th>
                          <th className="t_t_heading wc b_boot">
                            Quantity ({selectedCoin?.symbol})
                          </th>
                          <th className="t_t_heading wc b_boot">
                            Total (USDT)
                          </th>
                        </tr>
                        {tradeData.map((trade, index) => (
                          <tr className="overflow-y-auto" key={index}>
                            <td className="t_t_data b_boot wc">
                              {trade.price}
                            </td>
                            <td className="t_t_data b_boot wc">
                              {trade.quantity}
                            </td>
                            <td className="t_t_data b_boot wc">
                              {trade.total}
                            </td>
                          </tr>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 p-1">
                <div className="trade_box ">
                  <nav className="b_boot pb-2 mb">
                    <div
                      class="nav nav-tabs t_t_btn_g"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        class="nav-link t_t_btn wc active"
                        id="nav-home-tab_t"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home_t"
                        type="button"
                        role="tab"
                        aria-controls="nav-home_t"
                        aria-selected="true"
                      >
                        Buy
                      </button>
                      <button
                        class="nav-link t_t_btn wc"
                        id="nav-profile-tab_t"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile_t"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile_t"
                        aria-selected="false"
                      >
                        Sell
                      </button>
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                    <div
                      class="tab-pane fade show wc active"
                      id="nav-home_t"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab_t"
                    >
                      <div className="">
                        <form onSubmit={(e) => handleBuy(e)}>
                          <select
                            className="sec_t_t wc"
                            onChange={(e) => setBuyLimit(e.target.value)}
                          >
                            <option value={"MARKET"}>Market</option>
                            <option value={"LIMIT"}>Limit</option>
                          </select>

                          <div className="d-flex j_con mt-3 mb-3">
                            <div>
                              <h5 className="trade_box_title1 wc">
                                Available Balance:
                              </h5>
                            </div>
                            <div>
                              <h5 className="trade_box_title1 wc">
                                {balance.balance
                                  ? balance.balance.toFixed(4)
                                  : ""}{" "}
                                USDT
                              </h5>
                            </div>
                          </div>
                          {buyLimit && buyLimit === "LIMIT" ? (
                            <div className="form_t">
                              <h5 className="trade_box_title1 wc">Price</h5>
                              <div className="f_group d-flex j_con">
                                <input
                                  type="text"
                                  className="t_t_input w-100 wc"
                                  value={latestPrice}
                                />
                                <h4 className="WC f_g_text alin_c">USDT</h4>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="form_t">
                            <h5 className="trade_box_title1 wc">Amount</h5>
                            <div className="f_group d-flex j_con">
                              <input
                                type="text"
                                className="t_t_input w-100 wc"
                                onChange={(e) => setBuymount(e.target.value)}
                                value={buyamount}
                              />
                              <h4 className="WC f_g_text alin_c">
                                {selectedCoin?.symbol}
                              </h4>
                            </div>
                          </div>
                          <div className="form_t ">
                            <div className="f_group d-flex j_con">
                              <input
                                ref={buyTotal}
                                type="text"
                                className="t_t_input w-100 wc"
                                value={(latestPrice * buyamount).toFixed(4)}
                              />
                              <h4 className="WC f_g_text alin_c">Total</h4>
                            </div>
                          </div>
                          <div className="d-flex j_con">
                            <div className="f_group pro012">
                              <h4
                                className="WC f_g_text alin_c"
                                type="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickAmount(25)}
                              >
                                25%
                              </h4>
                            </div>
                            <div className="f_group pro012">
                              <h4
                                className="WC f_g_text alin_c"
                                type="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickAmount(50)}
                              >
                                50%
                              </h4>
                            </div>
                            <div className="f_group pro012">
                              <h4
                                className="WC f_g_text alin_c"
                                type="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickAmount(75)}
                              >
                                75%
                              </h4>
                            </div>
                            <div className="f_group pro012">
                              <h4
                                className="WC f_g_text alin_c"
                                type="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickAmount(100)}
                              >
                                100%
                              </h4>
                            </div>
                          </div>
                          {authData?.token ? (
                            <div className="d-flex j_con">
                              <button
                                className="t_f_btn t_f_btn1 wc w-100"
                                type="submit"
                              >
                                Buy
                              </button>
                              {/* <button className="t_f_btn t_f_btn2 wc">
                              Sell
                            </button> */}
                            </div>
                          ) : (
                            <div className="d-flex j_con">
                              <Link
                                to={"/login"}
                                className="t_f_btn t_f_btn1 wc"
                              >
                                Login
                              </Link>
                              <Link
                                to={"/register"}
                                className="t_f_btn t_f_btn2 wc"
                              >
                                Register
                              </Link>
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade wc"
                      id="nav-profile_t"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="">
                        <form onSubmit={(e) => handleSell(e)}>
                          <select
                            className="sec_t_t wc"
                            onChange={(e) => setSellLimit(e.target.value)}
                          >
                            <option value={"MARKET"}>Market</option>
                            <option value={"LIMIT"}>Limit</option>
                          </select>

                          <div className="d-flex j_con mt-3 mb-3">
                            <div>
                              <h5 className="trade_box_title1 wc">
                                Available Balance:
                              </h5>
                            </div>
                            <div>
                              <h5 className="trade_box_title1 wc">
                                {sellBalance
                                  ? sellBalance.balance.toFixed(4)
                                  : ""}{" "}
                                {/* {selectedCoin?.symbol} */}
                                {selectedCoin?.symbol}
                              </h5>
                            </div>
                          </div>
                          {sellLimit && sellLimit === "LIMIT" ? (
                            <div className="form_t">
                              <h5 className="trade_box_title1 wc">Price</h5>
                              <div className="f_group d-flex j_con">
                                <input
                                  type="text"
                                  className="t_t_input w-100 wc"
                                  value={latestPrice}
                                />
                                <h4 className="WC f_g_text alin_c">USDT</h4>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="form_t">
                            <h5 className="trade_box_title1 wc">Amount</h5>
                            <div className="f_group d-flex j_con">
                              <input
                                type="text"
                                className="t_t_input w-100 wc"
                                onChange={(e) => setSellamount(e.target.value)}
                                value={sellamount}
                              />
                              <h4 className="WC f_g_text alin_c">
                                {selectedCoin?.symbol}
                              </h4>
                            </div>
                          </div>
                          <div className="form_t">
                            <div className="f_group d-flex j_con">
                              <input
                                ref={sellTotal}
                                type="text"
                                className="t_t_input w-100 wc"
                                value={(latestPrice * sellamount).toFixed(4)}
                              />
                              <h4 className="WC f_g_text alin_c">Total</h4>
                            </div>
                          </div>
                          <div className="d-flex j_con">
                            <div className="f_group pro012">
                              <h4
                                className="WC f_g_text alin_c"
                                type="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickSellAmount(25)}
                              >
                                25%
                              </h4>
                            </div>
                            <div className="f_group pro012">
                              <h4
                                className="WC f_g_text alin_c"
                                type="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickSellAmount(50)}
                              >
                                50%
                              </h4>
                            </div>
                            <div className="f_group pro012">
                              <h4
                                className="WC f_g_text alin_c"
                                type="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickSellAmount(75)}
                              >
                                75%
                              </h4>
                            </div>
                            <div className="f_group pro012">
                              <h4
                                className="WC f_g_text alin_c"
                                type="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClickSellAmount(100)}
                              >
                                100%
                              </h4>
                            </div>
                          </div>

                          {authData?.token ? (
                            <div className="d-flex j_con">
                              {/* <button className="t_f_btn t_f_btn1 wc">Buy</button> */}
                              <button
                                className="t_f_btn t_f_btn1 wc w-100"
                                type="submit"
                              >
                                Sell
                              </button>
                            </div>
                          ) : (
                            <div className="d-flex j_con">
                              <Link
                                to={"/login"}
                                className="t_f_btn t_f_btn1 wc"
                              >
                                Login
                              </Link>
                              <Link
                                to={"/register"}
                                className="t_f_btn t_f_btn2 wc"
                              >
                                Register
                              </Link>
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 p-1">
            <div className="trade_box ">
              <nav className=" pb-2 mb">
                <div
                  class="nav nav-tabs t_t_btn_g t_t_btn_g02"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    class="nav-link t_t_btn02 mt-0 wc active"
                    id="nav-home-tab_t1"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home_t1"
                    type="button"
                    role="tab"
                    aria-controls="nav-home_t1"
                    aria-selected="true"
                  >
                    Open Orders
                  </button>
                  <button
                    class="nav-link t_t_btn02 mt-0 wc"
                    id="nav-profile-tab_t1"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile_t1"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile_t1"
                    aria-selected="false"
                  >
                    Pending Orders
                  </button>
                  <button
                    class="nav-link t_t_btn02 mt-0 wc"
                    id="nav-profile-tab_t10"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile_t10"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile_t10"
                    aria-selected="false"
                  >
                    Completed Orders
                  </button>
                </div>
              </nav>
              <div class="tab-content mt-3" id="nav-tabContent">
                <div
                  class="tab-pane fade show wc active"
                  id="nav-home_t1"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="table_over">
                    <div className="table_scroll">
                      <table className="trade_table_222">
                        <tr>
                          <th className="t_t_heading wc b_boot">
                            Trading Pair
                          </th>
                          <th className="t_t_heading wc b_boot"> Date</th>
                          <th className="t_t_heading wc b_boot"> Type</th>
                          <th className="t_t_heading wc b_boot"> All</th>
                          <th className="t_t_heading wc b_boot"> Price</th>
                          <th className="t_t_heading wc b_boot"> Amount</th>
                          <th className="t_t_heading wc b_boot"> Remaining</th>
                          <th className="t_t_heading wc b_boot"> Filled</th>
                          <th className="t_t_heading wc b_boot"> Total</th>
                          <th className="t_t_heading wc b_boot"> Action </th>
                        </tr>
                        {openOrder && openOrder.length > 0 ? (
                          openOrder.map((pending, index) => (
                            <tr key={index}>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenSymbol}/
                                {pending?.pairCurrencySymbol}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {new Date(pending.createdAt).toLocaleString()}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.orderType}
                              </td>
                              <td className="t_t_data b_boot wc">0</td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenPrice}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenPendingquantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity -
                                  pending?.tokenPendingquantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.mode}
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
                        <tr>
                          <th className="t_t_heading wc b_boot">
                            Trading Pair
                          </th>
                          <th className="t_t_heading wc b_boot"> Date</th>
                          <th className="t_t_heading wc b_boot"> Type</th>
                          <th className="t_t_heading wc b_boot"> All</th>
                          <th className="t_t_heading wc b_boot"> Price</th>
                          <th className="t_t_heading wc b_boot"> Amount</th>
                          <th className="t_t_heading wc b_boot"> Remaining</th>
                          <th className="t_t_heading wc b_boot"> Filled</th>
                          <th className="t_t_heading wc b_boot"> Total</th>
                          <th className="t_t_heading wc b_boot"> Action </th>
                        </tr>
                        {pendingOrder && pendingOrder.length > 0 ? (
                          pendingOrder.map((pending, index) => (
                            <tr key={index}>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenSymbol}/
                                {pending?.pairCurrencySymbol}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {new Date(pending.createdAt).toLocaleString()}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.orderType}
                              </td>
                              <td className="t_t_data b_boot wc">0</td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenPrice}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenPendingquantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity -
                                  pending?.tokenPendingquantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.mode}
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
                </div>
                <div
                  class="tab-pane fade wc"
                  id="nav-profile_t10"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab10"
                >
                  <div className="table_over">
                    <div className="table_scroll">
                      <table className="trade_table_222">
                        <tr>
                          <th className="t_t_heading wc b_boot">
                            Trading Pair
                          </th>
                          <th className="t_t_heading wc b_boot"> Date</th>
                          <th className="t_t_heading wc b_boot"> Type</th>
                          <th className="t_t_heading wc b_boot"> All</th>
                          <th className="t_t_heading wc b_boot"> Price</th>
                          <th className="t_t_heading wc b_boot"> Amount</th>
                          <th className="t_t_heading wc b_boot"> Remaining</th>
                          <th className="t_t_heading wc b_boot"> Filled</th>
                          <th className="t_t_heading wc b_boot"> Total</th>
                          <th className="t_t_heading wc b_boot"> Action </th>
                        </tr>
                        {completeOrder && completeOrder.length > 0 ? (
                          completeOrder.map((pending, index) => (
                            <tr key={index}>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenSymbol}/
                                {pending?.pairCurrencySymbol}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {new Date(pending.createdAt).toLocaleString()}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.orderType}
                              </td>
                              <td className="t_t_data b_boot wc">0</td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenPrice}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenPendingquantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity -
                                  pending?.tokenPendingquantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.tokenQuantity}
                              </td>
                              <td className="t_t_data b_boot wc">
                                {pending?.mode}
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
                  {completeOrder && completeOrder.length > 0 ? (
                    <div className="text-center">
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
          </div>
          <div className="col-lg-3 p-1">
            <div className="trade_box">
              <h4 className="text-center trade_box_title b_boot">
                Trade History
              </h4>
              <div className="t_table_main">
                <div className="t_table_sec">
                  <table className="trade_table_1">
                    <tr>
                      <th className="t_t_heading wc b_boot">
                        <i class="fa-solid fa-user-plus fa-beat me-1"></i>Price
                        (USDT)
                      </th>
                      <th className="t_t_heading wc b_boot">
                        Quantity ({selectedCoin?.symbol})
                      </th>
                      <th className="t_t_heading wc b_boot">Total (USDT)</th>
                    </tr>
                    {recentTrade && recentTrade.length > 0 ? (
                      recentTrade.map((recent, index) => (
                        <tr key={index}>
                          <td className="t_t_data b_boot wc">
                            {recent?.tokenPrice}
                          </td>
                          <td className="t_t_data b_boot wc">
                            {recent?.tokenQuantity}
                          </td>
                          <td className="t_t_data b_boot wc">0</td>
                        </tr>
                      ))
                    ) : (
                      <tr aria-colspan={3} className="text-center text-white">
                        No Trade History Found
                      </tr>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trade;
