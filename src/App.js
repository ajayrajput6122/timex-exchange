import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js'
import Dashboard from './Pages/Dashboard.js'
import Header from './Pages/Header.js'
import Earnings from './Pages/Earnings.js'
import FAQ from './Pages/FAQ.js'
import Support from './Pages/Support.js'
import Security from './Pages/Security.js'
import Trade from './Pages/Trade.js'
import Login from './Pages/login.js'
import Register from './Pages/Register.js'
import HelpCenter from './Pages/HelpCenter.js'
import PrivacyPolicy from './Pages/PrivacyPolicy.js'
import RefundCancellation from './Pages/RefundCancellation.js'
import BuySell from './Pages/BuySell.js'
import Deposit from './Pages/Deposit.js'
import Withdraw from './Pages/Withdraw.js'
import Deposithistory from './Pages/Deposithistory.js'
import Withdrawhistory from './Pages/Withdrawhistory.js'

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <Header/>
    <Router>
      
        <Routes>
       
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Earnings" element={<Earnings />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Security" element={<Security />} />
            <Route path="/Trade" element={<Trade />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/HelpCenter" element={<HelpCenter />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/RefundCancellation" element={<RefundCancellation />} />
            <Route path="/BuySell" element={<BuySell />} />
            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/Withdraw" element={<Withdraw />} />
            <Route path="/Deposithistory" element={<Deposithistory />} />
            <Route path="/Withdrawhistory" element={<Withdrawhistory />} />
            </Routes>
            
            </Router>
    </>
    
  );
}

export default App;
