import React from "react";
import Logo from "../Img/tomex-light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <a>
                <img className="logo" src={Logo} />
              </a>
              <p className="text">
                Discover the ultimate crypto exchange designed for you. Enjoy
                cutting-edge innovation, lightning-fast transactions, and
                unbeatable security.
              </p>
              <div className="footer_icon">
                <i class="fa-brands fa-square-facebook wc"></i>
                <i class="fa-brands fa-youtube wc"></i>
                <i class="fa-brands fa-twitter wc"></i>
                <i class="fa-brands fa-linkedin-in wc"></i>
                <i class="fa-brands fa-instagram wc"></i>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                  <h4 className="footer_title">The Platform</h4>
                  <ul className="footer_list">
                    <li className="footer_list_item">
                      <Link to="/market">Market</Link>
                    </li>
                    <li className="footer_list_item">
                      <a harf="/">Fees</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                  <h4 className="footer_title">Support</h4>
                  <ul className="footer_list">
                    <li className="footer_list_item">
                      <Link to="support">Contact Support</Link>
                    </li>
                    <li className="footer_list_item">
                      <Link to="/faq">FAQs</Link>
                    </li>
                    <li className="footer_list_item">
                      <Link to="/privacypolicy">Privacy & Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                  <h4 className="footer_title">Resources</h4>
                  <ul className="footer_list">
                    <li className="footer_list_item">
                      <a harf="/">Mobile Application</a>
                    </li>
                    <li className="footer_list_item">
                      <a harf="/">Bring Your Crew</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                  <h4 className="footer_title">Company</h4>
                  <ul className="footer_list">
                    <li className="footer_list_item">
                      <a harf="/">About Us</a>
                    </li>
                    <li className="footer_list_item">
                      <Link to="/security">Security</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
