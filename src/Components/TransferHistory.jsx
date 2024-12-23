import React, { useContext, useEffect, useState } from "react";
import usdt from "../Img/usdt.png";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";
import Pagination from "../Components/Pagination";

const TransferHistory = () => {
  const { authData } = useContext(AuthContext);
  const [balance, setBallance] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 1,
    total: 0,
  });

  const GetBallance = async (page = 1, pageSize = 10) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/userwallet`,
        {
          wallet_type: "main_wallet",
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
        setBallance(response.data.balance);
        setPagination((prev) => ({
          ...prev,
          total: response.data.total,
          current: page,
          pageSize,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page, pageSize) => {
    GetBallance(page, pageSize);
  };

  useEffect(() => {
    GetBallance();
  }, []);

  const getAllTransfer = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/api/all_token_deposit_transactions`,
        {
          transactionType: "transfer",
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setData(response.data.data);
        setFilteredData(response.data.data);
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("unable to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTransfer();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.tokenName?.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <>
      {/* <h2 className="title_h2 wc text-center">Transfer History</h2> */}
      <div className="dflexdw j_con mb-3">
        <div className="alin_c">
          <h5 className="trade_box_title_l wc">
            {" "}
            <img className="usdt" src={usdt} />{" "}
            {balance ? parseFloat(balance).toFixed(4) : "0.0000"} USDT
          </h5>
        </div>
        <div>
          <form>
            <div className="f_group_l d-flex j_con">
              <div className="WC f_g_text alin_c">
                <i class="fa-solid fa-magnifying-glass fa-beat-fade wc"></i>
              </div>
              <input
                className="search_input ms-2"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="mt-3">
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="trade_box ">
            <div className="table_over">
              <div className="table_scroll">
                <table className="trade_table_222">
                  <tr>
                    <th className="t_t_heading wc b_boot">S No. </th>
                    <th className="t_t_heading wc b_boot"> Token Name </th>
                    <th className="t_t_heading wc b_boot"> Amount </th>
                    <th className="t_t_heading wc b_boot"> From </th>
                    <th className="t_t_heading wc b_boot"> To </th>
                    <th className="t_t_heading wc b_boot"> Date & Time</th>
                  </tr>
                  {filteredData && filteredData.length > 0
                    ? filteredData?.map((data, index) => (
                        <tr key={index}>
                          <td className="t_t_data b_boot wc">{index + 1}</td>
                          <td className="t_t_data b_boot wc">
                            {data.tokenName}
                          </td>
                          <td
                            className={`t_t_data b_boot wc ${
                              data.amount > 0 ? "gc" : "rc"
                            }`}
                          >
                            {data.amount}
                          </td>
                          <td className="t_t_data b_boot wc">{data.from}</td>
                          <td className="t_t_data b_boot wc">{data.to}</td>
                          <td className="t_t_data b_boot wc">
                            {new Date(data.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    : "No Data Available"}
                </table>
              </div>
            </div>
          </div>
        )}
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
      </div>
    </>
  );
};

export default TransferHistory;
