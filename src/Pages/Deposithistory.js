import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";
import axios from "axios";

const Deposithistory = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authData } = useContext(AuthContext);

  const getDashboardData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/api/all_token_deposit_transactions`,
        { transactionType: "deposit" },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      setDashboardData(response.data.data);
    } catch (error) {
      console.error("Error fetching bug history data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <section className="sec01_login">
      <div className="container">
        <h2 className="title_h2 wc text-center title_h2_mb">Deposit History</h2>
        <div className="table_over sec4_box">
          <div className="table_scroll">
            {loading && (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <div className="spinner-border text-white" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            <table className="Deposithistory">
              {dashboardData.length > 0 ? (
                <>
                  <thead>
                    <tr>
                      <th className="t_t_heading wc b_boot">S No.</th>
                      <th className="t_t_heading wc b_boot">ID</th>
                      <th className="t_t_heading wc b_boot">Token Name</th>
                      <th className="t_t_heading wc b_boot">Amount</th>
                      <th className="t_t_heading wc b_boot">
                        Transaction Type
                      </th>
                      <th className="t_t_heading wc b_boot">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.map((transaction, index) => (
                      <tr key={transaction._id}>
                        <td className="t_t_data b_boot wc">{index + 1}</td>
                        <td className="t_t_data b_boot wc">
                          {transaction.transaction_id}
                        </td>
                        <td className="t_t_data b_boot wc">
                          {transaction.tokenName}
                        </td>
                        <td className="t_t_data b_boot wc">
                          {transaction.amount}
                        </td>
                        <td className="t_t_data b_boot wc">
                          {transaction.transactionType}
                        </td>
                        <td className="t_t_data b_boot wc">
                          {new Date(transaction.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              ) : (
                <div className="text-center text-white">
                  <h2>No data available</h2>
                  <p>Please try again later.</p>
                </div>
              )}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposithistory;
