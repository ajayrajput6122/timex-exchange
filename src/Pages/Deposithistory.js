import React, { useEffect, useState } from "react";

const Deposithistory = () => {
  const [depositData, setDepositData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const fetchDepositData = () => {
      const data = localStorage.getItem("transactions");
      const transactions = data ? JSON.parse(data) : [];
      setDepositData(transactions);
      setLoading(false);
      if (transactions.length === 0) {
        setNoData(true);
      } else {
        setNoData(false);
      }
    };

    fetchDepositData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className="sec01_login">
        <div className="container">
          <h2 className="title_h2 wc text-center title_h2_mb">
            Deposit History
          </h2>
          {noData ? (
            <div className="no-data-message text-center text-white  ">
              <p>No deposit transactions found.</p>
            </div>
          ) : (
            <div className="table_over sec4_box">
              <div className="table_scroll">
                <table className="Deposithistory">
                  <tr>
                    <th className="t_t_heading wc b_boot">S No. </th>
                    <th className="t_t_heading wc b_boot"> ID</th>
                    <th className="t_t_heading wc b_boot"> Token Name </th>
                    <th className="t_t_heading wc b_boot"> Amount</th>
                    <th className="t_t_heading wc b_boot">
                      {" "}
                      Transaction Type{" "}
                    </th>
                    <th className="t_t_heading wc b_boot"> Date & Time</th>
                  </tr>
                  {depositData.map((transaction, index) => (
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
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Deposithistory;
