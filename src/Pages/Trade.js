import React, { useContext, useEffect, useState, useRef } from "react";
import Growth from "../Img/btccoin.png";
import axios from "axios";
import { base_url } from "../ApiService/BaseUrl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";
import Pagination from "../Components/Pagination";
import CustomChart from "../Components/CustomChart";

const Trade = () => {
  const { authData } = useContext(AuthContext);
  const [balance, setBallance] = useState("");
  const [sellBalance, setSellBallance] = useState("");
  const [buyamount, setBuymount] = useState("");
  const [sellamount, setSellamount] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [pagination2, setPagination2] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [pagination3, setPagination3] = useState({
    current: 1,
    pageSize: 10,
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
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
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
    setLoading(true);
    try {
      if (buyLimit === "LIMIT") {
        if (!latestPrice || !buyamount) {
          toast.dismiss();
          toast.error("Please fill all fields");
          setLoading(false);
          return;
        }
      }
      if (buyLimit === "MARKET") {
        if (!buyamount) {
          toast.dismiss();
          toast.error("Please fill Amount");
          setLoading(false);
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
      // toast.dismiss();
      // toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSell = async (e) => {
    e.preventDefault();
    setLoading1(true);
    try {
      if (sellLimit === "LIMIT") {
        if (!latestPrice || !sellamount) {
          toast.dismiss();
          toast.error("Please fill all fields");
          setLoading1(false);
          return;
        }
      }
      if (sellLimit === "MARKET") {
        if (!sellamount) {
          toast.dismiss();
          toast.error("Please fill Amount");
          setLoading1(false);
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
    } finally {
      setLoading1(false);
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

  const getOpenOrder = async (page = 1, pageSize = 10) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/trading_orders`,
        {
          status: "PARTIALFILLED",
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
        setOpenOrder(response.data.orders);
        setPagination3((prev) => ({
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
    getCompletedOrder(page, pageSize);
  };
  const handlePageChange2 = (page, pageSize) => {
    getPendingOrder(page, pageSize);
  };
  const handlePageChange3 = (page, pageSize) => {
    getOpenOrder(page, pageSize);
  };

  const getPendingOrder = async (page = 1, pageSize = 10) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/trading_orders`,
        {
          status: "PENDING",
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
        setPendingOrder(response.data.orders);
        setPagination2((prev) => ({
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
    setSelectedCoin(defaultCoin);
  }, [location.search, coin]);

  const handleCoinChange = (newCoin) => {
    setSelectedCoin(newCoin);
    navigate(`?symbol=${newCoin.symbol}USDT`);
  };

  useEffect(() => {
    if (selectedCoin?.symbol === "TOMAX" || selectedCoin?.symbol === "HILL") {
      const chartContainer = document.getElementById("tradingview_chart");
      if (chartContainer) {
        chartContainer.innerHTML = "No data available";
      }
      return;
    }

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

  const data = [
    { time: 1628208000, open: 362, high: 445, low: 353, close: 439 },
    { time: 1628294400, open: 392, high: 437, low: 383, close: 436 },
    { time: 1628380800, open: 366, high: 393, low: 358, close: 390 },
    { time: 1628467200, open: 442, high: 450, low: 415, close: 425 },
    { time: 1628553600, open: 368, high: 387, low: 366, close: 379 },
    { time: 1628640000, open: 441, high: 450, low: 438, close: 448 },
    { time: 1628726400, open: 397, high: 449, low: 387, close: 441 },
    { time: 1628812800, open: 421, high: 425, low: 398, close: 406 },
    { time: 1628899200, open: 379, high: 386, low: 369, close: 370 },
    { time: 1628985600, open: 403, high: 406, low: 352, close: 355 },
    { time: 1629072000, open: 386, high: 395, low: 363, close: 370 },
    { time: 1629158400, open: 412, high: 417, low: 370, close: 371 },
    { time: 1629244800, open: 440, high: 444, low: 387, close: 397 },
    { time: 1629331200, open: 353, high: 409, low: 343, close: 403 },
    { time: 1629417600, open: 429, high: 438, low: 422, close: 426 },
    { time: 1629504000, open: 432, high: 439, low: 376, close: 378 },
    { time: 1629590400, open: 408, high: 416, low: 403, close: 411 },
    { time: 1629676800, open: 427, high: 429, low: 404, close: 412 },
    { time: 1629763200, open: 444, high: 445, low: 411, close: 421 },
    { time: 1629849600, open: 426, high: 444, low: 416, close: 444 },
    { time: 1629936000, open: 438, high: 446, low: 394, close: 397 },
    { time: 1630022400, open: 396, high: 435, low: 388, close: 429 },
    { time: 1630108800, open: 365, high: 427, low: 359, close: 424 },
    { time: 1630195200, open: 448, high: 456, low: 361, close: 364 },
    { time: 1630281600, open: 440, high: 446, low: 345, close: 352 },
    { time: 1630368000, open: 361, high: 451, low: 357, close: 447 },
    { time: 1630454400, open: 419, high: 423, low: 397, close: 403 },
    { time: 1630540800, open: 362, high: 366, low: 350, close: 353 },
    { time: 1630627200, open: 401, high: 407, low: 369, close: 373 },
    { time: 1630713600, open: 376, high: 401, low: 373, close: 395 },
    { time: 1630800000, open: 403, high: 435, low: 395, close: 435 },
    { time: 1630886400, open: 449, high: 452, low: 422, close: 422 },
    { time: 1630972800, open: 394, high: 431, low: 385, close: 431 },
    { time: 1631059200, open: 379, high: 385, low: 368, close: 374 },
    { time: 1631145600, open: 436, high: 438, low: 372, close: 379 },
    { time: 1631232000, open: 417, high: 422, low: 363, close: 373 },
    { time: 1631318400, open: 436, high: 442, low: 369, close: 375 },
    { time: 1631404800, open: 388, high: 396, low: 380, close: 388 },
    { time: 1631491200, open: 355, high: 367, low: 347, close: 359 },
    { time: 1631577600, open: 419, high: 423, low: 391, close: 392 },
    { time: 1631664000, open: 388, high: 395, low: 379, close: 386 },
    { time: 1631750400, open: 418, high: 423, low: 371, close: 379 },
    { time: 1631836800, open: 447, high: 452, low: 420, close: 429 },
    { time: 1631923200, open: 350, high: 358, low: 348, close: 352 },
    { time: 1632009600, open: 356, high: 453, low: 356, close: 446 },
    { time: 1632096000, open: 368, high: 369, low: 352, close: 361 },
    { time: 1632182400, open: 426, high: 432, low: 424, close: 432 },
    { time: 1632268800, open: 373, high: 406, low: 369, close: 401 },
    { time: 1632355200, open: 361, high: 448, low: 357, close: 447 },
    { time: 1632441600, open: 449, high: 452, low: 404, close: 414 },
  ];

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
                                  <p
                                    className={`rate_text ${
                                      coin.percent_change_24h > 0 ? "gc" : "rc"
                                    }`}
                                  >
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

            {selectedCoin?.symbol === "TOMAX" && (
              <div className="trade_box trade_box_chart mt-2">
                <CustomChart symbol={"TOMAX"} />
              </div>
            )}
            {selectedCoin?.symbol === "HILL" && (
              <div className="trade_box trade_box_chart mt-2">
                <CustomChart symbol={"HILL"} />
              </div>
            )}
            {selectedCoin?.symbol !== "TOMAX" &&
              selectedCoin?.symbol !== "HILL" && (
                <div
                  className="trade_box trade_box_chart mt-2 text-white text-center"
                  id="tradingview_chart"
                ></div>
              )}
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
                      {/* <select
                        className="t_from"
                        value={groupBy}
                        onChange={(e) => setGroupby(e.target.value)}
                      > */}
                      <select
                        className="t_from"
                        onfocus="this.size=4;"
                        onblur="this.size=0;"
                        onchange="this.size=1; this.blur();"
                      >
                        <option className="anku" value={"4"}>
                          0.00001
                        </option>
                        <option value={"3"}>0.0001</option>
                        <option value={"2"}>0.001</option>
                        <option value={"1"}>0.01</option>
                      </select>
                    </div>
                  </div>
                  <div className="t_table_main t_table_main_rr">
                    <div className="t_table_sec">
                      <table className="trade_table_1 trade_table_1v">
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
                            <td
                              className={`t_t_data b_boot wc ${
                                trade.quantity > 0 ? "gc" : "rc"
                              }`}
                            >
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
                            <option className="market" value={"MARKET"}>Market</option>
                            <option className="market" value={"LIMIT"}>Limit</option>
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
                                disabled={loading}
                              >
                                {loading ? (
                                  <i className="fa fa-spinner fa-spin me-2"></i>
                                ) : (
                                  " "
                                )}
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
                                disabled={loading1}
                              >
                                {loading1 ? (
                                  <i className="fa fa-spinner fa-spin me-2"></i>
                                ) : (
                                  " "
                                )}
                                Sell
                              </button>
                            </div>
                          ) : (
                            <div className="d-flex j_con">
                              <Link
                                to={"/login"}
                                className="t_f_btn t_f_btn1 wc text-center"
                              >
                                Login
                              </Link>
                              <Link
                                to={"/register"}
                                className="t_f_btn t_f_btn2 wc text-center"
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
                          <tr className="wc">
                            <td colSpan="10" className="text-center">
                              <small>No History Found</small>
                            </td>
                          </tr>
                        )}
                      </table>
                    </div>
                  </div>
                  {openOrder && openOrder.length > 0 ? (
                    <div className="text-center py-2">
                      <Pagination
                        total={pagination3.total}
                        pageSize={pagination3.pageSize}
                        current={pagination3.current}
                        onChange={handlePageChange3}
                      />
                    </div>
                  ) : (
                    ""
                  )}
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
                          <tr className="wc">
                            <td colSpan="10" className="text-center">
                              <small>No History Found</small>
                            </td>
                          </tr>
                        )}
                      </table>
                    </div>
                  </div>
                  {pendingOrder && pendingOrder.length > 0 ? (
                    <div className="text-center py-2">
                      <Pagination
                        total={pagination2.total}
                        pageSize={pagination2.pageSize}
                        current={pagination2.current}
                        onChange={handlePageChange2}
                      />
                    </div>
                  ) : (
                    ""
                  )}
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
                          <tr className="wc">
                            <td colSpan="10" className="text-center">
                              <small>No History Found</small>
                            </td>
                          </tr>
                        )}
                      </table>
                    </div>
                  </div>
                  {completeOrder && completeOrder.length > 0 ? (
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
                      <tr className="wc">
                      <td colSpan="10" className="text-center"><small>No Trade History Found</small></td>
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
