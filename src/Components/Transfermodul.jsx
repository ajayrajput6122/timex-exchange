import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";
import toast from "react-hot-toast";

const TransferModal = ({ isOpen, onClose }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [coin, setCoin] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedcoin, setSelectedcoin] = useState("");
  const [balance, setBalance] = useState("");
  const [pairCurrency, setPairCurrency] = useState("");
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const { authData } = useContext(AuthContext);

  const fetchCoins = async () => {
    try {
      const response = await axios.get(`${base_url}/api/token_list`, {
        headers: {
          Authorization: authData?.token,
        },
      });
      if (response.data.success) {
        setCoins(response.data.deposit_tokens);
        console.log(response.data.success);
      } else {
        console.error(response.data.success);
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  const fetchPairCurrency = async () => {
    try {
      const response = await axios.get(`${base_url}/api/pairCurrency`, {
        headers: {
          Authorization: authData?.token,
        },
      });
      if (response.data.success) {
        console.log(response.data.data);
        setPairCurrency(response.data.data);
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("something went wrong", error);
    }
  };

  const fetchBalance = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/useraccountbalance`,
        {
          tokenName: coin,
          wallet_type: from,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setBalance(response.data.balance);
        console.log(response.data.success);
      } else {
        console.error(response.data.success);
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    if (!coin) return;
    fetchBalance();
  }, [coin]);

  useEffect(() => {
    fetchCoins();
    fetchPairCurrency();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!from || !to || !coin || !amount) {
      toast.dismiss();
      toast.error("Please fill in the all feilds");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        `${base_url}/api/transfer_wallet`,
        {
          amount,
          receiver_wallet: to,
          sender_wallet: from,
          token_id: selectedcoin?._id,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        setFrom("");
        setTo("");
        setCoin("");
        setAmount("");
        setSelectedcoin("");
        setBalance("");
        window.location.reload();
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="popup_main02"
      style={overlayStyle}
      onClick={handleOverlayClick}
    >
      <div className="popup_bg" style={modalContentStyle}>
        <div className="d-flex justify-content-between">
          <h4
            className="wc"
            style={{ margin: "0 0 20px", fontSize: "1.5rem", color: "#333" }}
          >
            Transfer Funds
          </h4>
          <span className="wc" onClick={onClose} style={{ cursor: "pointer" }}>
            X
          </span>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div style={{ marginBottom: "20px" }}>
            <div className="form_t mt-3">
              <label className="trade_box_title_l wc">From:</label>
              <div className="f_group_l d-flex j_con">
                <select
                  value={from}
                  className="input_l w-100 wc"
                  onChange={(e) => setFrom(e.target.value)}
                >
                  <option value="">Select Wallet</option>
                  <option value="main_wallet">Main Wallet</option>
                  <option value="funding_wallet">Funding Wallet</option>
                  <option value="trading_wallet">Trading Wallet</option>
                </select>
              </div>
            </div>
            <div className="form_t mt-3">
              <label className="trade_box_title_l wc">To:</label>
              <div className="f_group_l d-flex j_con">
                <select
                  value={to}
                  className="input_l w-100 wc"
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option value="">Select Wallet</option>
                  <option value="main_wallet">Main Wallet</option>
                  <option value="funding_wallet">Funding Wallet</option>
                  <option value="trading_wallet">Trading Wallet</option>
                </select>
              </div>
            </div>
            <div className="form_t mt-3">
              <label className="trade_box_title_l wc">Coins:</label>
              <div className="f_group_l d-flex j_con">
                <select
                  className="input_l w-100 wc"
                  value={coin}
                  onChange={(e) => {
                    const selected = coins.find(
                      (item) => item.coinName === e.target.value
                    );
                    setCoin(e.target.value);
                    setSelectedcoin(selected || "");
                  }}
                >
                  <option value={""}>Select Coin</option>
                  {coins && coins.length > 0
                    ? coins?.map((item, index) => (
                        <option key={index} value={item.coinName}>
                          {item.coinName}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
            </div>
            <h5 className="trade_box_title_l wc mt-2">
              Balances-:{" "}
              {balance !== "" ? parseFloat(balance).toFixed(4) : "0.0000"}
            </h5>
            <div className="form_t ">
              <label className="trade_box_title_l wc mt-4">Amount:</label>
              <div className="f_group_l d-flex j_con">
                <input
                  className="input_l w-100 wc"
                  autoComplete="off"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn_login wc" disabled={loading}>
            {loading ? <i className="fa fa-spinner fa-spin me-2"></i> : ""}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferModal;
