import React, { createContext, useState, useEffect } from "react";
import { base_url } from "../ApiService/BaseUrl";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [depositData, setDepositData] = useState([]);
  const [authData, setAuthData] = useState(() => {
    const storedData = localStorage.getItem("authData");
    return storedData ? JSON.parse(storedData) : { token: "", user: {} };
  });

  const saveAuthData = (data) => {
    setAuthData(data);
    localStorage.setItem("authData", JSON.stringify(data));
  };

  const fetchDepositData = async (networkid, tokenid) => {
    try {
      const response = await axios.post(
        `${base_url}/api/deposit_transactions`,
        {
          networkID: tokenid,
          tokenId: networkid,
        },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );

      if (response.data.success) {
        setDepositData(response.data.deposit_transactions);
        localStorage.setItem(
          "transactions",
          JSON.stringify(response.data.deposit_transactions)
        );
      }
    } catch (error) {
      console.error("Error fetching deposit data:", error);
    }
  };

  const logout = () => {
    setAuthData({ token: "", user: {} });
    localStorage.removeItem("authData");
    const response = axios.get(`${base_url}/api/auth/logout`, {
      headers: {
        Authorization: authData?.token,
      },
    });
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedAuthData = localStorage.getItem("authData");
      if (!storedAuthData || !JSON.parse(storedAuthData)?.token) {
        logout(); 
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("authData", JSON.stringify(authData));
  }, [authData]);

  useEffect(() => {
    const savedTransaction = localStorage.getItem("transactions");
    if (savedTransaction) {
      setDepositData(JSON.parse(savedTransaction));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ authData, depositData, fetchDepositData, logout, saveAuthData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
