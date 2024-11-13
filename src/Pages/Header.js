import { useContext, useEffect, useState } from "react";
import Logo from "../Img/logo.png";
import Sun from "../Img/sun.png";
import Moon from "../Img/moon.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Contextapi/Auth";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showDashboardRoutes, setShowDashboardRoutes] = useState(false);
  const { authData, logout } = useContext(AuthContext);
  const location = useLocation();

  // List of dashboard-related routes
  const dashboardRoutes = [
    "/dashboard",
    "/deposit",
    "/withdraw",
    "/deposithistory",
    "/withdrawhistory",
    "/staking",
    "/swap",
  ];

  useEffect(() => {
    // Show dashboard routes if current path is dashboard or any related route
    const shouldShowRoutes = dashboardRoutes.some(
      (route) => location.pathname.toLowerCase() === route.toLowerCase()
    );
    setShowDashboardRoutes(shouldShowRoutes);
  }, [location.pathname]);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container px-0">
              <NavLink className="navbar-brand" to="/">
                <img className="logo" src={Logo} alt="Logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-list-ul fa-fade wc"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav header_ul mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  {authData?.token && (
                    <li className="nav-item">
                      <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "active" : ""}`
                        }
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  )}
                  <li className="nav-item">
                    <NavLink
                      to="/market"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      Market
                    </NavLink>
                  </li>
                  {showDashboardRoutes && (
                    <>
                      <li className="nav-item">
                        <NavLink
                          to="/overview"
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                        >
                          Overview
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Transactions
                        </Link>
                        <ul
                          className="dropdown-menu dropdown-menu_header"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="deposit">
                              Deposit
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="withdraw">
                              Withdraw
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="deposithistory">
                              Deposit History
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="withdrawhistory"
                            >
                              Withdraw History
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/staking"
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                        >
                          Staking
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/swap"
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                        >
                          Swap
                        </NavLink>
                      </li>
                    </>
                  )}
                  {!showDashboardRoutes && (
                    <>
                      <li className="nav-item">
                        <NavLink
                          to="/earnings"
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                        >
                          Earnings
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          More
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu_header"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="faq">
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="support">
                              Support
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="security">
                              Security
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="downloads">
                              Downloads
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                </ul>
                <div className="alin_c d-flex">
                  {/* <div class="dropdown">
                    <a class=" dropdown-toggle wc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-user me-2 align-self-center"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu_header p-2" aria-labelledby="dropdownMenuLink">
                      <li><span className="align-self-center user_id"><i className="fa-solid fa-user me-2 align-self-center"></i> {authData?.user.username}</span></li>
                      <li><button className=" logout wc" type="button" onClick={logout}>
                        Logout
                      </button>
                      </li>
                    </ul>
                  </div> */}
                  
                  {authData.token ? (
                    <>
                     <div class="dropdown">
                    <a class=" dropdown-toggle wc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-user me-2 align-self-center"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu_header p-2" aria-labelledby="dropdownMenuLink">
                      <li><span className="align-self-center user_id"><i className="fa-solid fa-user me-2 align-self-center"></i> {authData?.user.username}</span></li>
                      <li><button className=" logout wc" type="button" onClick={logout}>
                        Logout
                      </button>
                      </li>
                    </ul>
                  </div>
                    </>
                  ) : (
                    <div className="d-flex j_con">
                      <NavLink
                        to="login"
                        className="t_f_btn t_f_btn1 wc mt-0"
                        type="button"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        className="t_f_btn t_f_btn2 wc mt-0"
                        to="register"
                      >
                        Register
                      </NavLink>
                    </div>
                  )}
                  <img
                    className="dark_li alin_c"
                    src={isDarkTheme ? Sun : Moon}
                    alt="Toggle Theme"
                    onClick={handleToggle}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;