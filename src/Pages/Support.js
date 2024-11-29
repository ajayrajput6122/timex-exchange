import React from "react";
import Btc from "../Img/Support_pg.png";
import Facebook from "../Img/facebook.png";
import Youtube from "../Img/youtube.png";
import Email from "../Img/email.png";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <>
      <section className="sec01_e">
        <div className="container text-center">
          <h4 className="sub_title bc">.. Support ..</h4>
          <h2 className="title_h2 wc">Welcome to TomAX Support!</h2>
          <p className="text support_text">
            At TomAX, we’re dedicated to ensuring you have the best experience
            possible. If you have any questions or run into issues, our support
            team is ready to assist. Whether it’s account setup, trading,
            security features, or any other concern, we’re here to help you
            every step of the way.
          </p>
          <div className="margin-top">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-sm-5 text-center">
                <img className="btc" src={Btc} />
              </div>
              <div className="col-lg-6 col-md-7 col-sm-7  alin_c">
                <div className="sec4_box">
                  <Link to={"https://www.facebook.com/?locale=en_GB&_rdr"}>
                    <div className="icon-box d-flex b_boot pb-4">
                      <div className="icon-box-icon alin_c">
                        <img className="box_img" src={Facebook} />
                      </div>
                      <div className="icon-box-con">
                        <h5 className="box_title box_title1 wc">Facebook</h5>
                        <p className="boxt_text mb-0">
                          Keep Your Wallet Safe and Join the Crypto Community
                          Today!
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to={"https://www.youtube.com/"}>
                    <div className="icon-box d-flex b_boot pb-4 mt-4 ">
                      <div className="icon-box-icon alin_c">
                        <img className="box_img" src={Youtube} />
                      </div>
                      <div className="icon-box-con">
                        <h5 className="box_title box_title1 wc">Youtube</h5>
                        <p className="boxt_text mb-0">
                          Keep Your Wallet Safe and Join the Crypto Community
                          Today!
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to={"https://mail.google.com"}>
                    <div className="icon-box d-flex mt-4">
                      <div className="icon-box-icon alin_c">
                        <img className="box_img" src={Email} />
                      </div>
                      <div className="icon-box-con">
                        <h5 className="box_title box_title1 wc">Email</h5>
                        <p className="boxt_text mb-0">
                          Keep Your Wallet Safe and Join the Crypto Community
                          Today!
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
