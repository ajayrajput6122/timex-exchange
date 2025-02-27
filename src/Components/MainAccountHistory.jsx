import React, { useContext, useEffect, useState } from "react";
import usdt from "../Img/usdt.png";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";
import { AuthContext } from "../Contextapi/Auth";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";

const MainAccountHistory = () => {
  const { authData } = useContext(AuthContext);
  const [balance, setBallance] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const GetBallance = async (page = 1, pageSize = 10) => {
    setLoading(true);
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
        setBallance(response.data.wallets.main_wallet.balance);
        setData(response.data.wallets.main_wallet.wallets);
        setPagination((prev) => ({
          ...prev,
          total: response.data.total,
          current: page,
          pageSize,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetBallance();
  }, []);

  const handlePageChange = (page, pageSize) => {
    GetBallance(page, pageSize);
  };

  const filteredData = data.filter((item) =>
    item?.tokenname?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* <h2 className="title_h2 wc text-center">Main Account History</h2> */}
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                    <th className="t_t_heading wc b_boot"> USD Amount </th>
                    <th className="t_t_heading wc b_boot"> USD Price </th>
                    <th className="t_t_heading wc b_boot"> Balance </th>
                    <th className="t_t_heading wc b_boot"> Date & Time</th>
                    {/* <th className="t_t_heading wc b_boot"> Action</th> */}
                  </tr>
                  {filteredData && filteredData.length > 0 ? (
                    filteredData?.map((data, index) => (
                      <tr key={index}>
                        <td className="t_t_data b_boot wc">
                          {(pagination.current - 1) * pagination.pageSize +
                            index +
                            1}
                        </td>{" "}
                        <td className="t_t_data b_boot wc">{data.tokenname}</td>
                        <td className="t_t_data b_boot wc">
                          {data.usd_amount}
                        </td>
                        <td className="t_t_data b_boot wc">{data.usd_price}</td>
                        <td className="t_t_data b_boot wc">{data.balance}</td>
                        <td className="t_t_data b_boot wc">
                          {new Date(data.createdAt).toLocaleString()}
                        </td>
                        {/* <td className="t_t_data b_boot wc">
                            <Link className="table_link_btn" to={`/tokenTransactionHistory?tokenId=${data.tokenId}`}>View</Link>
                          </td> */}
                      </tr>
                    ))
                  ) : (
                    <tr className="wc">
                      <td colSpan="10" className="text-center">
                        <small>No data Found</small>
                      </td>
                    </tr>
                  )}
                </table>
              </div>
            </div>
          </div>
        )}
        {filteredData && filteredData.length > 0 ? (
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

export default MainAccountHistory;
