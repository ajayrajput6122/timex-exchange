import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";
import Pagination from "../Components/Pagination";

const Activitylogs = () => {
  const { authData } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const fetchData = async (page = 1, pageSize = 10) => {
    try {
      const skip = (page - 1) * pageSize;
      const response = await axios.post(
        `${base_url}/api/auth/activityLog`,
        { limit: pageSize, skip },
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
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (page, pageSize) => {
    fetchData(page, pageSize);
  };

  return (
    <>
      <section className="sec01_login">
        <div className="container">
          <h2 className="title_h2 wc text-center">Activity Logs</h2>
          <div className="table_over sec4_box mt-4">
            <div className="table_scroll">
              <table className="dashboard_table">
                <thead>
                  <tr className="table_row">
                    <th className="table_heading wc b_boot pt-0">Type</th>
                    <th className="table_heading wc b_boot pt-0">
                      Login Time{" "}
                    </th>
                    <th className="table_heading wc b_boot pt-0">IP Address</th>
                    <th className="table_heading wc b_boot pt-0">Device</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length > 0 ? (
                    data?.map((item, index) => (
                      <tr className="table_row" key={index}>
                        <td className="table_data b_boot grc">
                          {item.activityType}
                        </td>
                        <td className="table_data b_boot grc">
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                        <td className="table_data b_boot grc">{item.ip}</td>
                        <td className="table_data b_boot grc">{item.device}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center wc">
                        <p>No data found</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {data && data.length > 0 ? (
                <div className="text-center wc py-2">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Activitylogs;
