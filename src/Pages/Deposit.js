import React, { useContext, useEffect, useState } from "react";
import Depot from "../Img/dc.png";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import QRCode from "react-qr-code";
import toast from "react-hot-toast";
import { AuthContext } from "../Contextapi/Auth";
import { base_url } from "../ApiService/BaseUrl";
const Deposit = () => {
  const [coins, setCoins] = useState([]);
  const [tokenid, setTokenId] = useState(null);
  const [networkid, setNetworkId] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [networkDetails, setNetworkDetails] = useState([]);
  const [showCoinDropdown, setShowCoinDropdown] = useState(false);
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);
  const [networkAddress, setNetworkAddress] = useState(null);

  const { fetchDepositData,authData } = useContext(AuthContext);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (tokenid && networkid) {
        fetchDepositData(tokenid, networkid);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [tokenid, networkid, fetchDepositData]);

  const handleCoinSelect = (coin, setFieldValue) => {
    setSelectedCoin(coin);
    setTokenId(coin._id);
    setShowCoinDropdown(false);
    setFieldValue("coin", coin.coinName);
    setFieldValue("network", "");
    setFieldValue("address", "");
    setSelectedNetwork(null);
    fetchTokenDetails(coin._id);
  };

  const handleNetworkSelect = (network, setFieldValue) => {
    setSelectedNetwork(network);
    console.log(network);
    setNetworkId(network._id);
    setNetworkAddress("");
    setShowNetworkDropdown(false);
    setFieldValue("network", network.Network);
    setFieldValue("address", "");
    fetchAddress(network._id, setFieldValue);
  };

  const fetchAddress = async (networkId, setFieldValue) => {
    try {
      const response = await axios.post(
        `${base_url}/api/deposit_address`,
        { networkID: networkId },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );
      if (response.data.success) {
        setNetworkAddress(response.data.address?.walletAddress);
        setFieldValue("address", response.data.address?.walletAddress);
      }
    } catch (error) {
      console.error("Error fetching token details:", error);
    }
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast.dismiss();
          toast.success("Address copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        toast.dismiss();
        toast.success("Address copied to clipboard!");
      } catch (err) {
        console.error("Fallback: Failed to copy: ", err);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <section className="sec01_login">
      <div className="container">
        <h2 className="title_h2 wc text-center mb-5">Deposit Crypto</h2>
        <div className="row">
          <div className="col-lg-6">
            <img className="Depot" src={Depot} alt="Deposit" />
          </div>
          <div className="col-lg-6">
            <div className="login_f login_box">
              <Formik
                initialValues={{ coin: "", network: "", address: "" }}
                onSubmit={(values) => {
                  console.log("Form values:", values);
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <div className="form_t">
                      <h5 className="trade_box_title_l wc">Select a Coin</h5>
                      <div className="f_group_l d-flex j_con">
                        <div
                          className="custom-dropdown cd_o w-100"
                          onClick={() => setShowCoinDropdown(!showCoinDropdown)}
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
                                  style={{ width: "24px", marginRight: "10px" }}
                                />
                                {selectedCoin.coinName}
                              </>
                            ) : (
                              "Select coin"
                            )}
                          </div>
                          {showCoinDropdown && (
                            <div
                              className="dropdown-options wc"
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
                                  <span className="wc">{coin.coinName}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Custom Network Dropdown */}
                    <div className="form_t mt-4">
                      <h5 className="trade_box_title_l wc">Select Network</h5>
                      <div className="f_group_l d-flex j_con">
                        <div
                          className="custom-dropdown cd_o w-100"
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
                                  style={{ width: "24px", marginRight: "10px" }}
                                />
                                {selectedNetwork.Network}
                              </>
                            ) : (
                              "Select network"
                            )}
                          </div>
                          {showNetworkDropdown && (
                            <div
                              className="dropdown-options wc"
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
                                    handleNetworkSelect(network, setFieldValue)
                                  }
                                >
                                  <img
                                    src={selectedCoin?.image} // Assuming the coin image is used here
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

                    <div className="form_t mt-4">
                      <h5 className="trade_box_title_l wc">Select Address</h5>
                      <div className="f_group_l d-flex j_con">
                        <Field
                          name="address"
                          type="text"
                          className="input_l w-100 wc"
                          autoComplete="off"
                        />
                        {networkAddress && (
                          <i
                            className="fa-solid fa-copy fs-3 text-white"
                            onClick={() => copyToClipboard(networkAddress)}
                          ></i>
                        )}
                      </div>
                    </div>

                    {networkAddress && (
                      <div className="mt-4 text-center">
                        <h5 className="trade_box_title_l wc">QR Code</h5>
                        <QRCode
                          value={networkAddress}
                          size={100}
                          className="rounded p-2 bg-white"
                        />
                      </div>
                    )}

                    <h5 className="text text-center mt-4">
                      Recipient Account: Main Account
                    </h5>
                    <h5 className="text text-center mt-4">
                      Please ensure the network and address are correct before
                      proceeding.
                    </h5>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposit;
