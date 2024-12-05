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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  // Styles for modal content
  const modalContentStyle = {
    background: "#ffffff",
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
    <div style={overlayStyle} onClick={handleOverlayClick}>
      <div style={modalContentStyle}>
        <div className="d-flex justify-content-between">
          <h4 style={{ margin: "0 0 20px", fontSize: "1.5rem", color: "#333" }}>
            Transfer Funds
          </h4>
          <span
            className="text-black"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            X
          </span>
        </div>
        <form>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.9rem",
                color: "#555",
                marginBottom: "5px",
              }}
            >
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.3s",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              ...submitButtonStyle,
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferModal;
