import React from "react";
import Faqi from "../Img/Faq_pg.png";
import Signup from "../Img/sign-up.png";
import Facebook from "../Img/facebook.png";
import Youtube from "../Img/youtube.png";
import Email from "../Img/email.png";
import { Link } from "react-router-dom";

const FAQ = () => {
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
                you through the world of TomAX. Find clear, step-by-step answers
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
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link tab_btn active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      TomAX
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link tab_btn"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Cryptocurrency
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link tab_btn"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Buy Crypto
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Want to join TomAX?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              To begin, visit our website and click on the
                              ‘Register’ button. You’ll be directed to the
                              registration page where you should fill in all
                              required fields. Once you’ve completed the
                              details, click ‘Register Now’ to submit your
                              information. Next, you’ll need to complete the KYC
                              (Know Your Customer) process. Have your proof of
                              identity and address ready. To access the KYC
                              verification page, either click ‘Verify Now’ in
                              the login pop-up or navigate to your profile in
                              the top right corner. Select ‘My Account’, then
                              choose ‘KYC Verification’. Finally, click ‘Verify
                              Your KYC’ to start the verification process. It’s
                              that easy
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Getting Your TomAX Wallets Ready for Investment
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              Once you’ve signed up with TomAX, you’ll receive
                              three wallets to manage your crypto assets. To get
                              these wallets ready for your investments, start by
                              navigating to the Transactions tab and selecting
                              the Deposit option. A prompt will appear, letting
                              you choose your cryptocurrency (USDT (BEP 20),
                              USDT (TRC 20), RBC, GLC) and network, and then
                              select the appropriate address. A QR code will be
                              generated that you can either copy or scan using
                              MetaMask, Coinbase, Trust Wallet, or any other
                              preferred wallet. Simply paste or scan the code
                              into your wallet, and you’re all set to start
                              making transactions. Happy investing!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Looking to Withdraw? We’ve Got You Covered!
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              Withdrawing your assets from TomAX is
                              straightforward. Simply go to the "Wallet" tab,
                              click "Withdraw," and select the asset you wish to
                              withdraw. Enter the required details, complete our
                              2FA security process, and you’re all set. After
                              submission, you'll receive a confirmation
                              notification for your successful withdrawal. Rest
                              assured, at TomAX, your security is our top
                              priority, so your assets are always in safe hands.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree4">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree4"
                            aria-expanded="false"
                            aria-controls="collapseThree4"
                          >
                            Ready to Dive into Crypto?
                          </button>
                        </h2>
                        <div
                          id="collapseThree4"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree4"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              You have two options: convert your existing
                              currency into your chosen crypto or purchase
                              directly. Keep in mind that limits may apply based
                              on your payment method and location. Ready to get
                              started?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Feeling Overwhelmed by Crypto as a Newcomer?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              Don’t worry—TomAX is here to guide you through
                              every step of the journey. Our platform is
                              designed with newcomers in mind, ensuring a smooth
                              and intuitive introduction to crypto investing. If
                              you ever feel unsure, our comprehensive guides are
                              available to help you get up to speed quickly.
                              Ready to start this exciting adventure? Join TomAX
                              today and explore the captivating world of crypto
                              with us!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Is Crypto Trading Risky? Let’s Talk About It.
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              Yes, trading crypto does come with inherent risks.
                              However, at TomAX, we’re dedicated to safeguarding
                              your funds. We follow industry-standard security
                              protocols and adhere to regulatory requirements to
                              minimize these risks. While uncertainty is part of
                              trading, you can trust that your assets are
                              well-protected with us.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How Do We Ensure the Safety of Your Funds and
                            Personal Information?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              Your security is our top priority. We implement
                              robust measures to protect your funds and personal
                              data, including two-factor authentication, SSL
                              encryption, and cold storage for your assets.
                              These layers of protection ensure that your
                              information and investments remain secure.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What’s the Typical Timeframe for Processing Deposits
                            and Withdrawals?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              Deposits and withdrawals are generally processed
                              quickly, often within a few minutes. However, the
                              exact timing can vary depending on your payment
                              method and the current network activity.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Curious About the Cryptocurrencies Available for
                            Trading?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              Our platform supports a wide range of
                              cryptocurrencies, including Bitcoin, Ethereum,
                              Litecoin, and many more. Explore our diverse
                              selection to find the digital assets that fit your
                              trading strategy.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree5">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree5"
                            aria-expanded="false"
                            aria-controls="collapseThree5"
                          >
                            Ready to Start Trading on Our Platform?
                          </button>
                        </h2>
                        <div
                          id="collapseThree5"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree5"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>
                              Getting started is easy—just sign up and follow
                              our straightforward onboarding process. Dive in
                              and begin your trading journey with confidence!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
