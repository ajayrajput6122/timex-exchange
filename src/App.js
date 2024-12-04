import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";

const Layout = React.lazy(() => import("./Layout/Layout"));
const PrivateRoute = React.lazy(() => import("./PrivateRoute/PrivateRoute"));
const Home = React.lazy(() => import("./Pages/Home"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard"));
const Login = React.lazy(() => import("./Pages/Loginpage"));
const Register = React.lazy(() => import("./Pages/Register"));
const Trade = React.lazy(() => import("./Pages/Trade"));
const Earnings = React.lazy(() => import("./Pages/Earnings"));
const Deposit = React.lazy(() => import("./Pages/Deposit"));
const Deposithistory = React.lazy(() => import("./Pages/Deposithistory"));
const Withdraw = React.lazy(() => import("./Pages/Withdraw"));
const Market = React.lazy(() => import("./Pages/Market"));
const Withdrawhistory = React.lazy(() => import("./Pages/Withdrawhistory"));
const PrivacyPolicy = React.lazy(() => import("./Pages/PrivacyPolicy"));
const HelpCenter = React.lazy(() => import("./Pages/HelpCenter"));
const Support = React.lazy(() => import("./Pages/Support"));
const Security = React.lazy(() => import("./Pages/Security"));
const Download = React.lazy(() => import("./Pages/Download"));
const MyProfile = React.lazy(() => import("./Pages/Myprofile"));
const FAQ = React.lazy(() => import("./Pages/FAQ"));
const ForgotPassword = React.lazy(() => import("./Pages/Forgotpassword"));
const Staking = React.lazy(() => import("./Pages/Staking"));
const Swap = React.lazy(() => import("./Pages/Swap"));
const Overview = React.lazy(() => import("./Pages/Overview"));
const Hello = React.lazy(() => import("./Pages/hello"));
const UserDeals = React.lazy(() => import("./Pages/UserDeals"));
const About = React.lazy(() => import("./Pages/About"));
const TokenTransactionHistory = React.lazy(() => import("./Pages/TokenTransactionHistory"));


const RefundCancellation = React.lazy(() =>
  import("./Pages/RefundCancellation")
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            path=""
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route element={<PrivateRoute />}>
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="myprofile"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MyProfile />
                </Suspense>
              }
            />
            <Route
              path="deposit"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Deposit />
                </Suspense>
              }
            />
            <Route
              path="deposithistory"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Deposithistory />
                </Suspense>
              }
            />

            <Route
              path="withdraw"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Withdraw />
                </Suspense>
              }
            />
            <Route
              path="withdrawhistory"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Withdrawhistory />
                </Suspense>
              }
            />
            <Route
              path="staking"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Staking />
                </Suspense>
              }
            />
            <Route
              path="swap"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Swap />
                </Suspense>
              }
            />
            <Route
              path="overview"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Overview />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="userdeals"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UserDeals />
              </Suspense>
            }
          />
          <Route
            path="trade"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Trade />
              </Suspense>
            }
          />
          <Route
            path="earnings"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Earnings />
              </Suspense>
            }
          />
          <Route
            path="privacypolicy"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="market"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Market />
              </Suspense>
            }
          />
          <Route
            path="downloads"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Download />
              </Suspense>
            }
          />
          <Route
            path="faq"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FAQ />
              </Suspense>
            }
          />
          <Route
            path="refundcancellation"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RefundCancellation />
              </Suspense>
            }
          />
          <Route
            path="helpcenter"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HelpCenter />
              </Suspense>
            }
          />
          <Route
            path="support"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Support />
              </Suspense>
            }
          />
          <Route
            path="security"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Security />
              </Suspense>
            }
          />
          <Route
            path="forgotpassword"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ForgotPassword />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="comingsoon"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Hello />
              </Suspense>
            }
          />
           <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
            <Route
            path="tokenTransactionHistory"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TokenTransactionHistory />
              </Suspense>
            }
          />

          {/* <Route
          
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Error />
              </Suspense>
            }
          /> */}
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <Header />
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/Dashboard" element={<Dashboard />} />
  //         <Route path="/Earnings" element={<Earnings />} />
  //         <Route path="/FAQ" element={<FAQ />} />
  //         <Route path="/Support" element={<Support />} />
  //         <Route path="/Security" element={<Security />} />
  //         <Route path="/Trade" element={<Trade />} />
  //         <Route path="/Login" element={<Login />} />
  //         <Route path="/Register" element={<Register />} />
  //         <Route path="/HelpCenter" element={<HelpCenter />} />
  //         <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
  //         <Route path="/RefundCancellation" element={<RefundCancellation />} />
  //         <Route path="/BuySell" element={<BuySell />} />
  //         <Route path="/Deposit" element={<Deposit />} />
  //         <Route path="/Withdraw" element={<Withdraw />} />
  //         <Route path="/Deposithistory" element={<Deposithistory />} />
  //         <Route path="/Withdrawhistory" element={<Withdrawhistory />} />
  //         <Route path="/Myprofile" element={<Myprofile />} />
  //         <Route path="/Forgotpassword" element={<Forgotpassword />} />
  //         <Route path="/Market" element={<Market />} />
  //       </Routes>
  //     </Router>
  //   </>
  // );
}

export default App;
