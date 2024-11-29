import React from "react";
import { Pagination as AntPagination } from "antd";
import PropTypes from "prop-types";

const Pagination = ({ total, pageSize, current, onChange }) => {
  return (
    <div className="pagination-container">
      <AntPagination
        total={total}
        pageSize={pageSize}
        current={current}
        onChange={onChange}
        showSizeChanger
        pageSizeOptions={["10", "20", "50", "100"]}
        style={{ textAlign: "center", marginTop: "20px" }}
      />
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
