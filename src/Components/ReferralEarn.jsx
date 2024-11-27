import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "../ApiService/BaseUrl";

const ReferralEarn = () => {
  const { authData } = useContext(AuthContext);
  const [referrals, setReferrals] = useState([]); // State for referral data

  const code = authData?.user.username;
  const host = window.location.host;
  const linkReferral = `${host}/register?sponsorId=${code}`;

  const copyToClipboard = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast.dismiss();
          toast.success("Copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          toast.error("Failed to copy text!");
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed"; 
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
        toast.dismiss();
        toast.success("Copied to clipboard!");
      } catch (err) {
        console.error("Fallback copy failed: ", err);
        toast.error("Failed to copy text!");
      }
      document.body.removeChild(textarea);
    }
  };

  const getReferralMembers = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/get_referral_member`,
        {},
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setReferrals(response.data.refferaldata);
      }
    } catch (error) {
      console.error("Error fetching referrals:", error);
    }
  };

  useEffect(() => {
    getReferralMembers();
  }, []);

  return (
    <>
      <h4 className="text-center wc mb-3">Referral & Earns</h4>
      <form>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form_t mt-4">
              <h5 className="trade_box_title_l wc">Referral Code</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  className="input_l w-100 wc"
                  value={code}
                  autoComplete="off"
                  readOnly
                />
                <h4 className="WC f_g_text alin_c">
                  <span
                    className="otp_btn wc"
                    onClick={() => copyToClipboard(code)}
                  >
                    Copy
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form_t mt-4">
              <h5 className="trade_box_title_l wc">Share Link</h5>
              <div className="f_group_l d-flex j_con">
                <input
                  type="text"
                  className="input_l w-100 wc"
                  value={linkReferral}
                  autoComplete="off"
                  readOnly
                />
                <h4 className="WC f_g_text alin_c">
                  <span
                    className="otp_btn wc"
                    onClick={() => copyToClipboard(linkReferral)}
                  >
                    Copy
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </form>

      <h4 className="text-center wc titel_h4_my">Referral Members</h4>

      <div className="table_over sec4_box">
        <div className="table_scroll">
          <table className="refferal_earns_t">
            <thead>
              <tr>
                <th className="t_t_heading wc b_boot">S No.</th>
                <th className="t_t_heading wc b_boot">ID</th>
                <th className="t_t_heading wc b_boot">Name</th>
                <th className="t_t_heading wc b_boot">KYC Status</th>
                <th className="t_t_heading wc b_boot">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {referrals && referrals.length > 0 ? (
                referrals.map((referral, index) => (
                  <tr key={referral.id}>
                    <td className="t_t_data b_boot wc">{index + 1}</td>
                    <td className="t_t_data b_boot wc">{referral.username}</td>
                    <td className="t_t_data b_boot wc">{referral.firstname}</td>
                    <td className="t_t_data b_boot wc">{referral.kycStatus}</td>
                    <td className="t_t_data b_boot wc">
                      {new Date(referral.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="t_t_data b_boot wc" colSpan="5">
                    No referrals found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReferralEarn;
