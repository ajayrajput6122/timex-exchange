import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contextapi/Auth";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";

const ReferralBonus = () => {
  const { authData } = useContext(AuthContext);
  const [sponsors, setSponsors] = useState([]);

  const getSponsors = async () => {
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
        setSponsors(response.data);
      }
    } catch (error) {
      console.error("Error fetching referrals:", error);
    }
  };

  useEffect(() => {
    getSponsors();
  }, []);
  return (
    <>
      <h4 className="text-center wc mb-3">Invite Bonus</h4>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
          <div className="p_box_k">
            <h4 className="sec4_box_title wc mt-0">Invite Bonus</h4>
            <p className="sec4_box_text">
              {sponsors?.referralTotalAmount ? parseFloat(sponsors?.referralTotalAmount).toFixed(2) : "-"}
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
          <div className="p_box_k">
            <h4 className="sec4_box_title wc mt-0">Invited Users</h4>
            <p className="sec4_box_text">
              {sponsors?.totalMember ? sponsors?.totalMember : "-"}
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
          <div className="p_box_k">
            <h4 className="sec4_box_title wc mt-0">KYC Bonus</h4>
            <p className="sec4_box_text">
              {sponsors?.selfTotalAmount ? parseFloat(sponsors?.selfTotalAmount).toFixed(4) : "-"}
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
          <div className="p_box_k">
            <h4 className="sec4_box_title wc mt-0">Approved Users</h4>
            <p className="sec4_box_text">
              {sponsors?.approvedMember ? sponsors?.approvedMember : "-"}
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-center wc titel_h4_my">Referral History</h4>

      <div className="table_over sec4_box">
        <div className="table_scroll">
          <table className="refferal_earns_t">
            <tr>
              <th className="t_t_heading wc b_boot">S No. </th>
              <th className="t_t_heading wc b_boot"> ID</th>
              <th className="t_t_heading wc b_boot"> Name </th>
              <th className="t_t_heading wc b_boot"> Currency </th>
              <th className="t_t_heading wc b_boot"> Amount</th>
              <th className="t_t_heading wc b_boot"> Type</th>
              <th className="t_t_heading wc b_boot"> Date & Time</th>
            </tr>
            {sponsors.selfdata &&
            sponsors.selfdata.length > 0 ? (
              sponsors.selfdata.map((referral, index) => (
                <tr key={referral.id}>
                  <td className="t_t_data b_boot wc">{index + 1}</td>
                  <td className="t_t_data b_boot wc">{referral.username}</td>
                  <td className="t_t_data b_boot wc">{referral.firstname}</td>
                  <td className="t_t_data b_boot wc">{referral.tokenName}</td>
                  <td className="t_t_data b_boot wc">{referral.amount}</td>
                  <td className="t_t_data b_boot wc">{referral.from}</td>
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
          </table>
        </div>
      </div>
    </>
  );
};

export default ReferralBonus;
