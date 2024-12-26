import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contextapi/Auth";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import Pagination from "../Components/Pagination";

const ReferralBonus = () => {
  const { authData } = useContext(AuthContext);
  const [sponsors, setSponsors] = useState([]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 1,
    total: 0,
  });

  const getSponsorsMembers = async (page = 1, pageSize = 1) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/all_token_deposit_transactions`,
        { limit: pageSize, skip, transactionType: "bonus" },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setData(response.data.data);
        setPagination((prev) => ({
          ...prev,
          total: response.data.total,
          current: page,
          pageSize,
        }));
      }
    } catch (error) {
      console.error("Error fetching referrals:", error);
    }
  };

  const getSponsors = async (page = 1, pageSize = 1) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/get_referral_member`,
        { limit: pageSize, skip },
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

  const handlePageChange = (page, pageSize) => {
    getSponsorsMembers(page, pageSize);
  };

  useEffect(() => {
    getSponsors();
    getSponsorsMembers();
  }, []);
  return (
    <>
      <h4 className="text-center wc mb-3">Invite Bonus</h4>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
          <div className="p_box_k">
            <h4 className="sec4_box_title wc mt-0">Invite Bonus</h4>
            <p className="sec4_box_text">
              {sponsors?.referralTotalAmount
                ? parseFloat(sponsors?.referralTotalAmount).toFixed(2)
                : "-"}
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
              {sponsors?.selfTotalAmount
                ? parseFloat(sponsors?.selfTotalAmount).toFixed(4)
                : "-"}
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
            {data && data.length > 0 ? (
              data.map((referral, index) => (
                <tr key={referral.id}>
                  <td className="t_t_data b_boot wc">
                    {(pagination.current - 1) * pagination.pageSize + index + 1}
                  </td>{" "}
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
      {data && data.length > 0 ? (
        <div className="text-center py-2">
          <Pagination
            total={pagination.total}
            pageSize={pagination.pageSize}
            current={pagination.current}
            onChange={handlePageChange}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ReferralBonus;
