import React, { useEffect, useState } from "react";
import Faqi from "../Img/Faq_pg.png";
import Signup from "../Img/sign-up.png";
import Facebook from "../Img/facebook.png";
import Youtube from "../Img/youtube.png";
import Email from "../Img/email.png";
import { Link } from "react-router-dom";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("tomax");
  const [faqData, setFaqData] = useState([]);

  const fetchFAQs = async (tab) => {
    try {
      const response = await axios.post(`${base_url}/api/faq`, {
        type: tab,
      });
      setFaqData(response.data.faq);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  useEffect(() => {
    fetchFAQs(activeTab);
  }, [activeTab]);
  return (
    <>
      <section className="sec01_e">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-5 alin_c text-center">
              <img className="Referrals" src={Faqi} />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-7 alin_c text-center">
              <h4 className="sub_title bc">.. Quick Answers ..</h4>
              <h2 className="title_h2 wc">FAQ</h2>
              <p className="text ">
                Feeling overwhelmed by crypto? Our FAQ section is here to guide
                you through the world of Tomax. Find clear, step-by-step answers
                and uncover the mysteries of crypto with ease. Let’s navigate
                this adventure together!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec02_f">
        <div className="container ">
          <h4 className="sub_title bc text-center">.. Benefits ..</h4>
          <h2 className="title_h2 wc text-center">Exciting Features Await</h2>
          <div className="margin-top">
            <div className="row">
              <div className="col-lg-8">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link tab_btn ${
                        activeTab === "tomax" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("tomax")}
                    >
                      Tomax
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link tab_btn ${
                        activeTab === "crypto_currency" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("crypto_currency")}
                    >
                      Cryptocurrency
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link tab_btn ${
                        activeTab === "buy_crypto" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("buy_crypto")}
                    >
                      Buy Crypto
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" role="tabpanel">
                    {faqData && faqData.length > 0 ? (
                      <div className="accordion" id="accordionExample">
                        {faqData.map((faq, index) => (
                          <div className="accordion-item" key={index}>
                            <h2
                              className="accordion-header"
                              id={`heading${index}`}
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`collapse${index}`}
                              >
                                {faq.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse${index}`}
                              className="accordion-collapse collapse"
                              aria-labelledby={`heading${index}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div><p className="text-center wc">No Data Found</p></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
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
                    <div className="icon-box d-flex b_boot pb-4 mt-4">
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

export default FAQ;
