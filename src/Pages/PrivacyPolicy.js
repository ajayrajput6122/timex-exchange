import React from "react";
import Securityi from "../Img/pp.png";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="sec01_e">
        <div className="container ">
          <div className="row column-rever_sm">
            <div className="col-lg-6 col-md-6 alin_c text-center">
              <h4 className="sub_title bc">.. Privacy Policy ..</h4>
              <h2 className="title_h2 wc">Privacy Policy for Tomax</h2>

              <p className="text ">
                Welcome to Tomax.We are committed to protecting your personal
                information and your right to privacy. This Privacy Policy
                explains how we collect your personal information, including
                your name, email address, phone number, payment information,
                etc. We use this information to process transactions and to
                operate, maintain, personalize, and expand our site. We may
                share this information with our service providers and may
                disclose your information if required by law or in response to
                valid requests by public authorities.{" "}
              </p>
              <p className="text ">
                You may contact us to request access to, correct, or delete any
                personal information that you have provided to us. Please note,
                however, that we may need to retain certain information when we
                have a legal obligation or lawful basis to do so.
              </p>
              <p className="text ">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy. You
                are advised to review this Privacy Policy periodically for any
                changes. If you have any questions about this Privacy Policy,
                please contact us at:
              </p>
              <h4 className="sub_title bc">
                Email:{" "}
                <Link>
                  <span className="wc">tomax@gmail.com</span>
                </Link>
              </h4>
            </div>
            <div className="col-lg-6 col-md-6 alin_c text-center">
              <img className="Referrals" src={Securityi} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
