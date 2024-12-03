import React, { useContext, useEffect, useState } from "react";
import usdt from "../Img/usdt.png";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";
import { useNavigate } from "react-router-dom";

const AssetsOverview = () => {
  const { authData } = useContext(AuthContext);
  const [balance, setBallance] = useState("");
  const [mainbalance, setMainBallance] = useState("");
  const [tradingbalance, setTradingBallance] = useState("");
  const [fundingbalance, setFundingBallance] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const main = () => {
    navigate("/overview", { state: { activeTab: "t" } });
  };

  const trading = () => {
    navigate("/overview", { state: { activeTab: "t01" } });
  };
  const fund = () => {
    navigate("/overview", { state: { activeTab: "t02" } });
  };

  const GetBallance = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/api/userwallet`,
        {
          wallet_type: "funding_wallet",
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setBallance(response.data.balance);
        setMainBallance(response.data.wallets.main_wallet.balance);
        setTradingBallance(response.data.wallets.trading_wallet.balance);
        setFundingBallance(response.data.wallets.funding_wallet.balance);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetBallance();
  }, []);

  return (
    <>
      <h2 className="title_h022 wc text-center">Assets Overview</h2>
      <div className="d-flex j_con mb-3">
        <div className="alin_c">
          <h5 className="trade_box_title_l wc">
            {" "}
            <img className="usdt" src={usdt} />{" "}
            {balance ? parseFloat(balance).toFixed(4) : "-"} USDT
          </h5>
        </div>
        <div>
          <form>
            <button className="btn_timex">Transfer</button>
          </form>
        </div>
        {/* <div>
          <form>
            <div className="f_group_l d-flex j_con">
              <div className="WC f_g_text alin_c">
                <i class="fa-solid fa-magnifying-glass fa-beat-fade wc"></i>
              </div>
              <input
                className="search_input ms-2"
                type="search"
                placeholder="Search"
              />
            </div>
          </form>
        </div> */}
      </div>

      <div className="row">
        <div
          className="col-lg-4 col-md-4 col-sm-6 mt-3"
          onClick={main}
          style={{ cursor: "pointer" }}
        >
          <div className="p_box_k text-center">
            <h4 className="wc ao_title">Main Account</h4>
            <p className="sec4_box_text">
              USDT {mainbalance ? parseFloat(mainbalance).toFixed(4) : "-"}{" "}
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-4 col-sm-6 mt-3"
          onClick={trading}
          style={{ cursor: "pointer" }}
        >
          <div className="p_box_k text-center">
            <h4 className="wc ao_title">Trading Account</h4>
            <p className="sec4_box_text">
              USDT{" "}
              {tradingbalance ? parseFloat(tradingbalance).toFixed(4) : "-"}{" "}
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-4 col-sm-6 mt-3"
          onClick={fund}
          style={{ cursor: "pointer" }}
        >
          <div className="p_box_k text-center">
            <h4 className="wc ao_title">Funding Account</h4>
            <p className="sec4_box_text">
              USDT{" "}
              {fundingbalance ? parseFloat(fundingbalance).toFixed(4) : "-"}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetsOverview;
