import React, { useContext } from "react";
import { useState } from "react";
import Logo from "../Img/tomex.png";
import Baner from "../Img/baner_i.png";
import Signup from "../Img/sign-up.png";
import Growth from "../Img/stock (1).png";
import Funding from "../Img/funding.png";
import Verified from "../Img/verified.png";
import Ellipse from "../Img/Ellipse.png";
import Sparkle from "../Img/sparkle.png";
import Btc from "../Img/Down.png";
import Investment from "../Img/investment.png";
import Stock from "../Img/stock.png";
import Encrypted from "../Img/encrypted.png";
import Profits from "../Img/profits.png";

import h01 from '../Img/access-control.png'
import h02 from '../Img/excellence.png'
import h03 from '../Img/compensation.png'
import h04 from '../Img/return-on-investment.png'


import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contextapi/Auth";

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { authData } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleInviteClick = () => {
    navigate("/myprofile", { state: { activeTab: "settings" } });
  };

  const handleKycClick = () => {
    navigate("/myprofile", { state: { activeTab: "profile" } });
  };
  const handleBugClick = () => {
    navigate("/myprofile", { state: { activeTab: "settings2" } });
  };

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme");
  };
  return (
    <>
      <section className="sec01_h">
        <div className="container">
          <img className="ellipse" src={Ellipse} />
          <div className="banner_w text-center">
            <h1 className="baner_title wc">
              Discover Seamless Exchanges for Your Digital Coins{" "}
              <span className="bc timex">Tomax</span>
            </h1>
            <p className="text">
              Experience top-notch trading with Tomax, the leading crypto
              exchange. Start trading with us today and take your investment
              journey to the next level!
            </p>
            <p className="banner_text1 wc">
              Join the Crypto Revolution - Turn Your Dreams into Reality Today!
            </p>
            {authData?.token ? (
              <Link to={"earnings"} className="btn_timex">
                Potential Rewards{" "}
              </Link>
            ) : (
              <NavLink to="/register" className="btn_timex d-inline-block">
                Join Tomax
              </NavLink>
            )}
          </div>
        </div>
      </section>
      <section className="sec02_h">
        <div className="started">
          <Link to={"/register"}>
            <div className="start_box start_box1">
              <div className="icon-box d-flex">
                <div className="icon-box-icon alin_c">
                  <img className="box_img" src={Signup} />
                </div>
                <div className="icon-box-con">
                  <h5 className="box_title box_title1 wc">Sign Up</h5>
                  <p className="boxt_text mb-0">
                    Keep Your Wallet Safe and Join the Crypto Community Today!
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <div
            className="start_box start_box2"
            onClick={handleKycClick}
            style={{ cursor: "pointer" }}
          >
            <div className="icon-box d-flex">
              <div className="icon-box-icon alin_c">
                <img className="box_img" src={Verified} />
              </div>
              <div className="icon-box-con">
                <h5 className="box_title box_title1 wc">Verify</h5>
                <p className="boxt_text mb-0">
                  Secure Your Wallet and Join Our Community Today!
                </p>
              </div>
            </div>
          </div>
          <div className="start_box start_box3" style={{ cursor: "pointer" }}>
            <div className="icon-box d-flex">
              <div className="icon-box-icon alin_c">
                <img className="box_img" src={Funding} />
              </div>
              <div className="icon-box-con">
                <h5 className="box_title box_title1 wc">Fund</h5>
                <p className="boxt_text mb-0">
                  We place a high priority on safeguarding your assets and
                  funds.
                </p>
              </div>
            </div>
          </div>
          <Link to={"/trade?symbol=ETH"}>
            <div className="start_box start_box4">
              <div className="icon-box d-flex">
                <div className="icon-box-icon alin_c">
                  <img className="box_img" src={Growth} />
                </div>
                <div className="icon-box-con">
                  <h5 className="box_title box_title1 wc">Trade</h5>
                  <p className="boxt_text mb-0">
                    Keep Your Wallet Safe and Join the Crypto Community Today!
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <img className="Sparkle" src={Sparkle} />
        </div>
      </section>
      <section className="sec04_h">

        
        <div className="container ">
          <div className="row column-rever">
            <div className="col-lg-6 col-sm-12 text-center">
              <div className="row">
                <div className=" col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                  <div className="sec4_box sec_col_b">
                    <img className="sec4_box_img" src={Investment} />
                    <h4 className="sec4_box_title wc">
                      Shield Your Investments
                    </h4>
                    <p className="sec4_box_text">
                      Trust Our Secure Crypto Measures for Peaceful, Profitable
                      Trading. Robust Asset Protection Guaranteed.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                  <div className="sec4_box sec_col_b">
                    <img className="sec4_box_img" src={Stock} />
                    <h4 className="sec4_box_title wc">
                      Real-Time Crypto Trading
                    </h4>
                    <p className="sec4_box_text">
                      Capture Opportunities: Swiftly Trade Cryptocurrencies on
                      Our Platform, Where Time is of Essence.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                  <div className="sec4_box sec_col_b">
                    <img className="sec4_box_img" src={Encrypted} />
                    <h4 className="sec4_box_title wc">Shielded Assets</h4>
                    <p className="sec4_box_text">
                      Trust in Our Crypto Exchange: Your Assets and Transactions
                      Remain Secure, Safeguarded from Unwanted Access.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-3 ">
                  <div className="sec4_box sec_col_b">
                    <img className="sec4_box_img" src={Profits} />
                    <h4 className="sec4_box_title wc">Profit Maximization </h4>
                    <p className="sec4_box_text">
                      Optimize Your Gains: Benefit from Our Competitive
                      Transaction Fees, Reinvest in Your Crypto Portfolios
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col_2 alin_c md_center clo">
              <h4 className="sub_title bc">.. Benefits ..</h4>
              <h2 className="title_h2 wc">
                Explore Incredible Exchange Features!
              </h2>
              <p className="text ">
                Don't settle for average; level up your crypto game one step at
                a time. You'll be boasting about us in no time!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec03_h pb-0">
        <div className="container ">
          <div className="row column-rever_p">
            <div className="col-lg-6 col-md-7 col-sm-7 alin_c dow_col">
              <h4 className="sub_title bc">.. Downloads ..</h4>
              <h2 className="title_h2 wc">Get the App Now</h2>
              <p className="text ">
                Don't miss out on the opportunity to dive into the future of
                finance with Tomax ! Trade swiftly on the go and access our
                platform anytime, anywhere. Live without limits." Join us today
                and experience the freedom and flexibility to trade whenever and
                wherever inspiration strikes.
              </p>
              <button className="btn_timex">Download App </button>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-5 text-center alin_c">
              <img className="btc" src={Btc} />
            </div>
          </div>
        </div>
      </section>

      <section className="sec04_h">
        <div className="container text-center">
          {/* <h4 className="sub_title bc">.. Benefits ..</h4> */}
          <h2 className="title_h2 wc title_h2_mb">Why Cryptocurrency is a Top Market for Investment?</h2>
          {/* <p className="text ">
            Don't settle for average; level up your crypto game one step at a
            time. You'll be boasting about us in no time!
          </p> */}

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
              <div className="sec4_box box_ht">
                <img className="sec4_box_img" src={h03} />
                <h4 className="sec4_box_title wc">Investment Choice </h4>
                <p className="sec4_box_text">
                  Cryptocurrencies are a popular investment choice today because
                  of their potential for high returns, global access, and
                  growing use in real life. Here’s a quick look at why many
                  people consider investing in crypto.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
              <div className="sec4_box box_ht">
                <img className="sec4_box_img" src={h04} />
                <h4 className="sec4_box_title wc">Big Return Potential</h4>
                <p className="sec4_box_text">
                  Cryptocurrencies like Bitcoin and Ethereum have shown huge
                  growth over the years. Many investors are attracted to crypto
                  because prices can rise rapidly, offering big returns, though
                  with some risk.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
              <div className="sec4_box box_ht">
                <img className="sec4_box_img" src={h02} />
                <h4 className="sec4_box_title wc">More Popular</h4>
                <p className="sec4_box_text">
                  Big companies & financial firms are getting involved in
                  crypto. Banks & companies are offering crypto-related
                  products, which makes crypto more stable & trustworthy. This
                  support from big names is drawing in new investors.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
              <div className="sec4_box box_ht">
                <img className="sec4_box_img" src={h01} />
                <h4 className="sec4_box_title wc">Easily Accessible </h4>
                <p className="sec4_box_text">
                  The crypto market is open 24/7 and accessible from anywhere.
                  You can buy or sell at any time from any part of the world,
                  which isn’t possible in traditional stock markets. This
                  worldwide access is a big draw for new investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
