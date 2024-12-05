import React from "react";

const TransferModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Styles for modal overlay
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(77 76 76 / 36%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  // Styles for modal content
  const modalContentStyle = {
    // background: "#ffffff",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "500px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
  };

  // Styles for buttons
  const buttonStyle = {
    padding: "10px 15px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
    transition: "background-color 0.3s",
  };

  const closeButtonStyle = {
    ...buttonStyle,
    background: "#f5f5f5",
    color: "#333",
  };

  const submitButtonStyle = {
    ...buttonStyle,
    background: "#007bff",
    color: "#fff",
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup_main" style={overlayStyle} onClick={handleOverlayClick}>
      <div className="popup_bg" style={modalContentStyle}>
        <div className="d-flex justify-content-between">
          <h4 className="wc" style={{ margin: "0 0 20px", fontSize: "1.5rem", color: "#333" }}>
            Transfer Funds
          </h4>
          <span
            className="wc"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            X
          </span>
        </div>
        <form>
          <div style={{ marginBottom: "20px" }}>
          <div className="form_t mt-3">
              <label className="trade_box_title_l wc">
                From:
              </label>
              <div className="f_group_l d-flex j_con">
              {/* <input className="input_l w-100 wc" autoComplete="off" type="number" placeholder="Enter amount" /> */}
              <select className="input_l w-100 wc">
                  <option value="">Main Wallet</option>
                  <option value="">Funding Wallet</option>
                  <option value="">Trading Wallet</option>
              </select>
              </div>
            </div>
            <div className="form_t mt-3">
              <label className="trade_box_title_l wc">
                To:
              </label>
              <div className="f_group_l d-flex j_con">
              {/* <input className="input_l w-100 wc" autoComplete="off" type="number" placeholder="Enter amount" /> */}
              <select className="input_l w-100 wc">
                  <option value="">Main Wallet</option>
                  <option value="">Funding Wallet</option>
                  <option value="">Trading Wallet</option>
              </select>
              </div>
            </div>
            <div className="form_t mt-3">
              <label className="trade_box_title_l wc">
              Coins:
              </label>
              <div className="f_group_l d-flex j_con">
              {/* <input className="input_l w-100 wc" autoComplete="off" type="number" placeholder="Enter amount" /> */}
              <select className="input_l w-100 wc">
                  <option value="">USDT</option>
                  <option value="">BNB</option>
                  <option value="">TRX</option>
              </select>
              </div>
            </div>
            <h5 className="trade_box_title_l wc mt-2">Balances-: 0</h5>
            <div className="form_t ">
              <label className="trade_box_title_l wc mt-4">
              Amount:
              </label>
              <div className="f_group_l d-flex j_con">
              <input className="input_l w-100 wc" autoComplete="off" type="number" placeholder="Enter amount" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn_login wc"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferModal;
