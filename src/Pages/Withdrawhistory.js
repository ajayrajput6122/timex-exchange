import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contextapi/Auth";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import Pagination from "../Components/Pagination";

const Withdrawhistory = () => {
  const { authData } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 1,
    total: 0,
  });

  const getWithdrawHistory = async (page = 1, pageSize = 1) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/withdrawHistory`,
        {
          limit: pageSize,
          skip,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setTransactions(response.data.transaction);
        setPagination((prev) => ({
          ...prev,
          total: response.data.total,
          current: page,
          pageSize,
        }));
      }
    } catch (error) {
      console.error("Error fetching withdraw history:", error);
      setError("Failed to fetch withdrawal history.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page, pageSize) => {
    getWithdrawHistory(page, pageSize);
  };

  useEffect(() => {
    getWithdrawHistory();
  }, []);

  if (loading) {
    return (
      <section className="sec01_login">
        <div className="container">
          <h2 className="title_h2 wc text-center mb-5">Withdrawal History</h2>
          <div className="text-center">
            <p className="text-white">Loading...</p>
            {/* You can also use a spinner here for better UX */}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="sec01_login">
        <div className="container">
          <h2 className="title_h2 wc text-center mb-5">Withdrawal History</h2>
          <div className="text-center">
            <p className="text-white">{error}</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="sec01_login">
        <div className="container">
          <h2 className="title_h2 wc text-center title_h2_mb">
            Withdrawal History
          </h2>
          <div className="table_over sec4_box">
            <div className="table_scroll">
              {transactions.length > 0 ? (
                <table className="withdrawhistory">
                  <tr>
                    <th className="t_t_heading wc b_boot">S No. </th>
                    <th className="t_t_heading wc b_boot"> ID</th>
                    <th className="t_t_heading wc b_boot"> Token Name </th>
                    <th className="t_t_heading wc b_boot"> Amount</th>
                    <th className="t_t_heading wc b_boot"> Network </th>
                    <th className="t_t_heading wc b_boot"> Withdraw Fee </th>
                    <th className="t_t_heading wc b_boot"> Wallet Address </th>
                    <th className="t_t_heading wc b_boot">
                      {" "}
                      Blockchain Record{" "}
                    </th>
                    <th className="t_t_heading wc b_boot"> Status </th>
                    <th className="t_t_heading wc b_boot"> Remarks </th>
                    <th className="t_t_heading wc b_boot"> Date & Time </th>
                  </tr>
                  {transactions.map((transaction, index) => (
                    <tr key={transaction._id}>
                      {/* <td className="t_t_data b_boot wc">{index + 1}</td> */}
                      <td className="t_t_data b_boot wc">
                        {(pagination.current - 1) * pagination.pageSize +
                          index +
                          1}
                      </td>
                      <td className="t_t_data b_boot wc">{transaction._id}</td>
                      <td className="t_t_data b_boot wc">
                        {transaction.tokenName}
                      </td>
                      <td className="t_t_data b_boot wc">
                        {transaction.amount}
                      </td>
                      <td className="t_t_data b_boot wc">
                        {transaction.networkname}
                      </td>
                      <td className="t_t_data b_boot wc">
                        {transaction.withrawFee}
                      </td>
                      <td className="t_t_data b_boot wc">
                        {transaction.wallet_address}
                      </td>
                      <td className="t_t_data b_boot wc">
                        {transaction.createdAt}
                      </td>
                      <td className="t_t_data b_boot wc">
                        {transaction.status}
                      </td>
                      <td className="t_t_data b_boot wc">
                        {transaction.remark}
                      </td>
                      <td className="t_t_data b_boot wc">
                        {new Date(transaction.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </table>
              ) : (
                <div className="text-center wc">
                  <p>No data available.</p>
                </div>
              )}
            </div>
          </div>
          {transactions && transactions.length > 0 ? (
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
        </div>
      </section>
    </>
  );
};

export default Withdrawhistory;
