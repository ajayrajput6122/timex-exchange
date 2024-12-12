import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";

const TokenTransactionHistory = () => {
  const [tokenId, setTokenId] = useState("");
  const { authData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenid = queryParams.get("tokenId");
    setTokenId(tokenid);
  }, [location.search]);

  const fetchData = async () => {
    if (!tokenId) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/api/token_transation`,
        { tokenId,
          walletType:"main_wallet"
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setdata(response.data.data);
        console.log(response.data.message);
      }
      else{
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching token history data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tokenId]);

  const capitalizeText = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .replace(/[_-]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <section className="sec01_login">
        <div className="container">
          <h2 className="title_h2 wc text-center mt-3">
            Token Transaction History
          </h2>
          <div className="table_over sec4_box mt-3">
            <div className="table_over">
              <div className="table_scroll">
                <table className="trade_table_222">
                  <tr>
                    <th className="t_t_heading wc b_boot">S No. </th>
                    <th className="t_t_heading wc b_boot">Token Name </th>
                    <th className="t_t_heading wc b_boot">Amount </th>
                    <th className="t_t_heading wc b_boot">Mode </th>
                    <th className="t_t_heading wc b_boot">Transaction Type </th>
                    <th className="t_t_heading wc b_boot">Wallet Type </th>
                  </tr>
                  {data && data.length > 0 ? (
                    data?.map((item, index) => (
                      <tr key={index}>
                        <td className="t_t_data b_boot wc">{index + 1}</td>
                        <td className="t_t_data b_boot wc">{item.tokenName}</td>
                        <td
                          className={`t_t_data b_boot wc ${
                            item.amount > 0 ? "gc" : "rc"
                          }`}
                        >
                          {item.amount}
                        </td>
                        <td className="t_t_data b_boot wc">
                          {item.amount > 0 ? "Credit" : "Debit"}
                        </td>
                        <td className="t_t_data b_boot wc">
                          {item ? capitalizeText(item.transactionType) : ""}
                        </td>
                        <td className="t_t_data b_boot wc">
                          {item ? capitalizeText(item.walletType) : ""}
                        </td>
                        <td className="t_t_data b_boot wc">
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr aria-colspan={6} className="text-white">
                      No data found
                    </tr>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TokenTransactionHistory;
