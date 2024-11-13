import React, { useState, useEffect, useContext } from "react";
import Depot from "../Img/depgit.png";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";

const Withdraw = () => {
  const [coins, setCoins] = useState([]);
  const [tokenid, setTokenId] = useState(null);
  const [networkid, setNetworkId] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [networkDetails, setNetworkDetails] = useState([]);
  const [showCoinDropdown, setShowCoinDropdown] = useState(false);
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);

  const { authData } = useContext(AuthContext);
  const fetchCoins = async () => {
    try {
      const response = await axios.get(`${base_url}/api/deposit_tokens`, {
        headers: {
          Authorization: authData?.token,
        },
      });
      if (response.data.success) {
        setCoins(response.data.deposit_tokens);
      }
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  };

  const fetchTokenDetails = async (coinId) => {
    try {
      const response = await axios.post(
        `${base_url}/api/deposit_token_details`,
        { tokenID: coinId },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setNetworkDetails(response.data.tokenDetails[0].networkDetails);
      }
    } catch (error) {
      console.error("Error fetching token details:", error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleCoinSelect = (coin, setFieldValue) => {
    setSelectedCoin(coin);
    setTokenId(coin._id);
    setShowCoinDropdown(false);
    setFieldValue("coin", coin.coinName);
    setFieldValue("network", "");
    setSelectedNetwork(null);
    fetchTokenDetails(coin._id);
  };

  const handleNetworkSelect = (network, setFieldValue) => {
    setSelectedNetwork(network);
    setNetworkId(network._id);
    setShowNetworkDropdown(false);
    setFieldValue("network", network.Network);
    setFieldValue("walletAddress", "");
  };

  const handleOtp = async () => {
    try {
      const response = await axios.post(
        `${base_url}/api/withdrawotp`,
        {},
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );

      if (response.data.success !== 1) {
        throw new Error(response.data.message || "OTP request failed");
      }

      toast.dismiss();
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.dismiss();
      toast.error(
        error.response?.data?.message || error.message || "Error sending OTP"
      );
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    if (
      !values.coin ||
      !values.network ||
      !values.amount ||
      !values.walletAddress ||
      !values.otp
    ) {
      toast.dismiss();
      toast.error("Please Fill in the details");
      return;
    }
    try {
      const response = await axios.post(
        `${base_url}/api/withdrawrequest`,
        {
          token_id: tokenid,
          network_id: networkid,
          otp: values.otp,
          amount: values.amount,
          wallet_address: values.walletAddress,
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
        resetForm();
        setSelectedCoin(null);
        setSelectedNetwork(null);
        setTokenId(null);
        setNetworkId(null);
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting withdrawal request:", error);
      toast.dismiss();
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Error submitting request"
      );
    }
  };

  return (
    <>
      <section className="sec01_login">
        <div className="container">
          <h2 className="title_h2 wc text-center mb-5">Withdrawal</h2>
          <div className="row">
            <div className="col-lg-6">
              <img className="Depot" src={Depot} alt="Depot" />
            </div>
            <div className="col-lg-6">
              <div className="login_f login_box">
                <Formik
                  initialValues={{
                    coin: "",
                    network: "",
                    amount: "",
                    walletAddress: "",
                    otp: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  {({ setFieldValue }) => (
                    <Form>
                      {/* Coin Selection */}
                      <div className="form_t">
                        <h5 className="trade_box_title_l wc">Select a Coin</h5>
                        <div className="f_group_l d-flex j_con">
                          <div
                            className="custom-dropdown w-100"
                            onClick={() =>
                              setShowCoinDropdown(!showCoinDropdown)
                            }
                            style={{
                              position: "relative",
                              cursor: "pointer",
                            }}
                          >
                            <div className="custom-options selected-coin d-flex align-items-center wc">
                              {selectedCoin ? (
                                <>
                                  <img
                                    src={selectedCoin.image}
                                    alt={selectedCoin.coinName}
                                    style={{
                                      width: "40px",
                                      marginRight: "10px",
                                    }}
                                  />
                                  {selectedCoin.coinName}
                                </>
                              ) : (
                                "Select coin"
                              )}
                            </div>
                            {showCoinDropdown && (
                              <div
                                className="dropdown-options"
                                style={{
                                  position: "absolute",
                                  top: "100%",
                                  left: "0",
                                  width: "100%",
                                  border: "1px solid #ffffff29",
                                  maxHeight: "200px",
                                  overflowY: "auto",
                                  zIndex: "2",
                                }}
                              >
                                {coins.map((coin) => (
                                  <div
                                    key={coin._id}
                                    className="dropdown-item d-flex align-items-center p-2"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      handleCoinSelect(coin, setFieldValue)
                                    }
                                  >
                                    <img
                                      src={coin.image}
                                      alt={coin.coinName}
                                      style={{
                                        width: "30px",
                                        marginRight: "10px",
                                      }}
                                    />
                                    <span>{coin.coinName}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Network Selection */}
                      <div className="form_t mt-4">
                        <h5 className="trade_box_title_l wc">Select Network</h5>
                        <div className="f_group_l d-flex j_con">
                          <div
                            className="custom-dropdown w-100"
                            onClick={() =>
                              setShowNetworkDropdown(!showNetworkDropdown)
                            }
                            style={{
                              position: "relative",
                              cursor: "pointer",
                            }}
                          >
                            <div className="custom-options selected-network d-flex align-items-center wc">
                              {selectedNetwork ? (
                                <>
                                  <img
                                    src={selectedCoin?.image}
                                    alt={selectedNetwork.Network}
                                    style={{
                                      width: "40px",
                                      marginRight: "10px",
                                    }}
                                  />
                                  {selectedNetwork.Network}
                                </>
                              ) : (
                                "Select network"
                              )}
                            </div>
                            {showNetworkDropdown && (
                              <div
                                className="dropdown-options"
                                style={{
                                  position: "absolute",
                                  top: "100%",
                                  left: "0",
                                  width: "100%",
                                  border: "1px solid #ffffff29",
                                  maxHeight: "200px",
                                  overflowY: "auto",
                                }}
                              >
                                {networkDetails.map((network) => (
                                  <div
                                    key={network._id}
                                    className="dropdown-item d-flex align-items-center p-2"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      handleNetworkSelect(
                                        network,
                                        setFieldValue
                                      )
                                    }
                                  >
                                    <img
                                      src={selectedCoin?.image}
                                      alt={network.Network}
                                      style={{
                                        width: "30px",
                                        marginRight: "10px",
                                      }}
                                    />
                                    <span>{network.Network}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Amount Input */}
                      <div className="form_t mt-4">
                        <h5 className="trade_box_title_l wc">
                          Enter Your Amount
                        </h5>
                        <div className="f_group_l d-flex j_con">
                          <Field
                            name="amount"
                            type="text"
                            className="input_l w-100 wc"
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      {/* Wallet Address Input */}
                      <div className="form_t mt-4">
                        <h5 className="trade_box_title_l wc">
                          Enter Your Wallet Address
                        </h5>
                        <div className="f_group_l d-flex j_con">
                          <Field
                            name="walletAddress"
                            type="text"
                            className="input_l w-100 wc"
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      <div className="form_t mt-4">
                        <h5 className="trade_box_title_l wc">Enter OTP</h5>
                        <div className="f_group_l d-flex j_con">
                          <Field
                            name="otp"
                            type="text"
                            className="input_l w-100 wc"
                            autoComplete="off"
                          />
                          <h4 className="WC f_g_text alin_c">
                            <span
                              className="otp_btn wc"
                              type="button"
                              onClick={handleOtp}
                            >
                              OTP
                            </span>
                          </h4>
                        </div>
                      </div>

                      <button className="btn_login wc" type="submit">
                        <i className="fa-solid fa-id-card fa-shake me-2"></i>{" "}
                        Submit
                      </button>
                      <h5 className="text text-center wc mt-4">
                        Minimum 2 USDT is required in order to initiate the
                        transaction
                      </h5>
                      <h5 className="text mt-4">Available Balance:</h5>
                      <h5 className="text mt-4">Minimum Withdrawal:</h5>
                      <h5 className="text mt-4">Fees:</h5>
                      <h5 className="text mt-4">
                        Remaining daily withdrawal amount:
                      </h5>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Withdraw;
