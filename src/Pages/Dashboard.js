import React, { useEffect, useState } from "react";
import BC from "../Img/bc.png";
import BNB from "../Img/bnb.png";
import XRP from "../Img/xrp.png";
import Shiba from "../Img/Shiba.png";
import TRON from "../Img/TRON.png";
import Bitcoin from "../Img/Bitcoin.png";
import ChartR from "../Img/chart_R.png";
import ChartG from "../Img/chart_G.png";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { base_url } from "../ApiService/BaseUrl";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDashboardData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${base_url}/api/mainMarket`);
      setDashboardData(response.data.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-white" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (dashboardData.length === 0) {
    return (
      <div className="text-center text-white mt-5">
        <h2>No data available</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <section className="sec01_d">
        <div className="container ">
          <h2 className="title_h2 wc text-center">Welcome To Dashboard</h2>
          <p className="text text-center ">Glorious, not only for your eyes.</p>
          {/* <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
              <div className="sec4_box">
                <div className="d-flex d_box b_boot pb-4">
                  <div className="icon-box d-flex">
                    <div className="icon-box-icon alin_c">
                      <img className="box1_img" src={BC} />
                    </div>
                    <div className="icon-box-con">
                      <h5 className="box_title box_title1 wc">Bitcoin Cash</h5>
                      <p className="box1_text wc mb-0"> 2342.42730</p>
                    </div>
                  </div>
                  <div className="alin_c">
                    <p className="box1_text wc mb-0 gc"> 2.296</p>
                  </div>
                </div>

                <div className="d-flex d_box mt-4">
                  <div className="icon-box d-flex">
                    <div className="icon-box-icon alin_c">
                      <img className="box1_img" src={BNB} />
                    </div>
                    <div className="icon-box-con">
                      <h5 className="box_title box_title1 wc">BNB</h5>
                      <p className="box1_text wc mb-0"> 2342.42730</p>
                    </div>
                  </div>
                  <div className="alin_c">
                    <p className="box1_text wc mb-0 rc"> 2.296</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
              <div className="sec4_box">
                <div className="d-flex d_box b_boot pb-4">
                  <div className="icon-box d-flex">
                    <div className="icon-box-icon alin_c">
                      <img className="box1_img" src={XRP} />
                    </div>
                    <div className="icon-box-con">
                      <h5 className="box_title box_title1 wc">XRP</h5>
                      <p className="box1_text wc mb-0"> 2342.42730</p>
                    </div>
                  </div>
                  <div className="alin_c">
                    <p className="box1_text wc mb-0 rc"> 2.296</p>
                  </div>
                </div>

                <div className="d-flex d_box mt-4">
                  <div className="icon-box d-flex">
                    <div className="icon-box-icon alin_c">
                      <img className="box1_img" src={Shiba} />
                    </div>
                    <div className="icon-box-con">
                      <h5 className="box_title box_title1 wc">Shiba Inu</h5>
                      <p className="box1_text wc mb-0">2342.42730</p>
                    </div>
                  </div>
                  <div className="alin_c">
                    <p className="box1_text wc mb-0 gc"> 2.296</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
              <div className="sec4_box">
                <div className="d-flex d_box b_boot pb-4">
                  <div className="icon-box d-flex">
                    <div className="icon-box-icon alin_c">
                      <img className="box1_img" src={TRON} />
                    </div>
                    <div className="icon-box-con">
                      <h5 className="box_title box_title1 wc">TRON</h5>
                      <p className="box1_text wc mb-0"> 2342.42730</p>
                    </div>
                  </div>
                  <div className="alin_c">
                    <p className="box1_text wc mb-0 rc"> 2.296</p>
                  </div>
                </div>

                <div className="d-flex d_box mt-4">
                  <div className="icon-box d-flex">
                    <div className="icon-box-icon alin_c">
                      <img className="box1_img" src={Bitcoin} />
                    </div>
                    <div className="icon-box-con">
                      <h5 className="box_title box_title1 wc">Bitcoin</h5>
                      <p className="box1_text wc mb-0"> 2342.42730</p>
                    </div>
                  </div>
                  <div className="alin_c">
                    <p className="box1_text wc mb-0 gc"> 2.296</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            {dashboardData.slice(0, 6).map((coin, index) => (
              <div className="col-lg-4 mb-3" key={index}>
                <Link to={`/trade?symbol=${coin.symbol}`}>
                  <div className="sec4_box">
                    <div className="d-flex d_box p-2">
                      <div className="icon-box d-flex">
                        <div className="icon-box-icon alin_c">
                          <img
                            className="box1_img"
                            src={coin.image}
                            alt={coin.name}
                          />
                        </div>
                        <div className="icon-box-con">
                          <h5 className="box_title box_title1 wc">
                            {coin.name}
                          </h5>
                          <p className="box1_text wc mb-0">
                            <span className="me-1">≈</span>{" "}
                            {coin.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="alin_c">
                        <p
                          className={`box1_text wc mb-0 ${
                            coin.percent_change_1h < 0 ? "rc" : "gc"
                          }`}
                        >
                          {coin.percent_change_1h.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec02_d">
        <div className="container ">
          <div className="table_over sec4_box">
            <div className="table_scroll">
              <table className="dashboard_table">
                <tr className="table_row">
                  <th className="table_heading wc b_boot ">Coin Name</th>
                  <th className="table_heading wc b_boot ">
                    Coin Price (USDT){" "}
                  </th>
                  <th className="table_heading wc b_boot ">1 Hour Price </th>
                  <th className="table_heading wc b_boot ">7 Hour Price </th>
                  <th className="table_heading wc b_boot ">24 Hour Price </th>
                  <th className="table_heading wc b_boot ">Action</th>
                  <th className="table_heading wc b_boot ">Market</th>
                </tr>
                {dashboardData.map((coin) => (
                  <tr key={coin.id}>
                    <td className="table_data b_boot">
                      <div className="d-flex">
                        <img
                          className="table_img me-2"
                          src={coin.image}
                          alt={coin.name}
                        />
                        <span className="wc table_text">{coin.symbol}</span>
                      </div>
                    </td>
                    <td className="table_data b_boot grc">
                      {coin.price}
                      {/* {coin.price.toFixed(2)} */}
                    </td>
                    <td
                      className={`table_data b_boot ${
                        coin.percent_change_1h < 0 ? "rc" : "gc"
                      }`}
                    >
                      {/* {coin.percent_change_1h.toFixed(2)} */}
                      {coin.percent_change_1h}
                    </td>
                    <td
                      className={`table_data b_boot ${
                        coin.percent_change_7d < 0 ? "rc" : "gc"
                      }`}
                    >
                      {/* {coin.percent_change_7d.toFixed(2)} */}
                      {coin.percent_change_7d}
                    </td>
                    <td
                      className={`table_data b_boot ${
                        coin.percent_change_24h < 0 ? "rc" : "gc"
                      }`}
                    >
                      {coin.percent_change_24h}
                      {/* {coin.percent_change_24h.toFixed(2)} */}
                    </td>
                    <td className="table_data b_boot">
                      <NavLink
                        className="table_btn wc me-2"
                        to={`/trade?symbol=${coin.symbol}`}
                      >
                        Trade
                      </NavLink>
                      <NavLink
                        className="table_btn wc"
                        to={`/trade?symbol=${coin.symbol}`}
                      >
                        Buy/Sell
                      </NavLink>
                    </td>
                    <td className="table_data b_boot">
                      <img
                        className="market_img"
                        src={coin.percent_change_24h < 0 ? ChartR : ChartG}
                        alt="Market chart"
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
