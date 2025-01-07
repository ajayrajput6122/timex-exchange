import React from 'react'

const Activitylogs = () => {
  return (
    <>
     <section className="sec01_login">
        <div className="container">
            <h2 className="title_h2 wc text-center">Activity Log</h2>
            <div className="table_over sec4_box mt-4">
            <div className="table_scroll">
              <table className="dashboard_table">
                <tr className="table_row">
                  <th className="table_heading wc b_boot pt-0">Type</th>
                  <th className="table_heading wc b_boot pt-0">Login Time </th>
                  <th className="table_heading wc b_boot pt-0">IP Address</th>
                  <th className="table_heading wc b_boot pt-0">Device</th>
                </tr>
                <tr className='table_row'>
                    <td className="table_data b_boot grc">User Signin via email</td>
                    <td className="table_data b_boot grc">2025-0101, 06:01:33PM</td>
                    <td className="table_data b_boot grc">127.0.0.1</td>
                    <td className="table_data b_boot grc">okhttp/4.9.2</td>
                </tr>
                </table>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Activitylogs;