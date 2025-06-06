import { useContext, useEffect, useState } from "react";
import Logo from "../Img/tomex.png";
import LogoLight from "../Img/tomex-light.png";
import Sun from "../Img/sun.png";
import Moon from "../Img/moon.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Contextapi/Auth";
import { ThemeContext } from "../ThemeContext";
const Header = () => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const { authData, logout } = useContext(AuthContext);

  const closeNavbar = () => {
    const navbarToggler = document.querySelector("#navbarSupportedContent");
    if (navbarToggler.classList.contains("show")) {
      const navbarCollapse = document.querySelector(".navbar-toggler");
      navbarCollapse.click(); // Trigger a click to close the menu
    }
  };

  // const handleToggle = () => {
  //   setIsDarkTheme(!isDarkTheme);
  //   document.body.classList.toggle("dark-theme");
  // };
  //   const handleToggle = () => {
  //   const newTheme = !isDarkTheme;
  //   setIsDarkTheme(newTheme); // Update the state
  //   document.body.classList.toggle("dark-theme", newTheme); // Apply the theme class based on the state
  //   localStorage.setItem("isDarkTheme", newTheme); // Store the theme preference in local storage
  // };
  console.log("isDarkTheme", isDarkTheme);

  return (
    <>
      <header>
        <div className="container pr">
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container px-0">
              {/* <NavLink className="navbar-brand" to="/">
                {isDarkTheme ? (
                  <img className="logo" src={Logo} alt="Logo" />
                ) : (
                  <img className="logo" src={LogoLight} alt="Logo" />
                )}
              </NavLink> */}
              <NavLink className="navbar-brand" to="/">
                <img
                  className="logo"
                  src={isDarkTheme ? Logo : LogoLight}
                  alt="Logo"
                  onClick={toggleTheme}
                  style={{ cursor: "pointer" }}
                />
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
                      onClick={closeNavbar}
                    >
                      Home
                    </NavLink>
                  </li>
                  {authData?.token && (
                    <>
                      <li className="nav-item">
                        <NavLink
                          to="/dashboard"
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                          onClick={closeNavbar}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li className="nav-item">
                    <NavLink
                      to="/market"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      onClick={closeNavbar}
                    >
                      Market
                    </NavLink>
                  </li>
                  {authData?.token && (
                    <>
                      <li className="nav-item">
                        <NavLink
                          to="/overview"
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                          onClick={closeNavbar}
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
                          <li onClick={closeNavbar}>
                            <Link className="dropdown-item" to="deposit">
                              Deposit
                            </Link>
                          </li>
                          <li onClick={closeNavbar}>
                            <Link className="dropdown-item" to="withdraw">
                              Withdraw
                            </Link>
                          </li>
                          <li onClick={closeNavbar}>
                            <Link className="dropdown-item" to="userdeals">
                              User Deals
                            </Link>
                          </li>
                          <li onClick={closeNavbar}>
                            <Link className="dropdown-item" to="deposithistory">
                              Deposit History
                            </Link>
                          </li>
                          <li onClick={closeNavbar}>
                            <Link
                              className="dropdown-item"
                              to="withdrawhistory"
                            >
                              Withdraw History
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item" onClick={closeNavbar}>
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

                  <>
                    <li className="nav-item" onClick={closeNavbar}>
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
                        <li onClick={closeNavbar}>
                          <Link className="dropdown-item" to="faq">
                            FAQ
                          </Link>
                        </li>
                        <li onClick={closeNavbar}>
                          <Link className="dropdown-item" to="support">
                            Support
                          </Link>
                        </li>
                        <li onClick={closeNavbar}>
                          <Link className="dropdown-item" to="security">
                            Security
                          </Link>
                        </li>
                        <li onClick={closeNavbar}>
                          <Link className="dropdown-item" to="downloads">
                            Downloads
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </>
                  {/* )} */}
                </ul>
                <div className="alin_c d-flex dsvg">
                
                  {authData.token ? (
                    <>
                      <div class="dropdown">
                        <a
                          class=" dropdown-toggle wc"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-user me-2 align-self-center"></i>
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu_header p-2"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <span className="align-self-center user_id">
                              <i className="fa-solid fa-user me-2 align-self-center"></i>{" "}
                              {authData?.user.username}
                            </span>
                          </li>
                          <li className="mt-1" onClick={closeNavbar}>
                            <Link className="user_id" to={"/myprofile"}>
                              <i class="fa-solid fa-address-card me-2"></i>
                              My Profile
                            </Link>
                          </li>
                          <li className="mt-1" onClick={closeNavbar}>
                            <Link className="user_id" to={"/activitylogs"}>
                              <i class="fa-solid fa-history me-2"></i>
                              Activity Logs
                            </Link>
                          </li>
                          <li>
                            <button
                              className=" logout wc"
                              type="button"
                              onClick={logout}
                            >
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
                        className="t_f_btn2 wc mt-0 me-2"
                        type="button"
                      >
                        Login
                      </NavLink>
                      <NavLink className="t_f_btn2 wc mt-0" to="register">
                        Register
                      </NavLink>
                    </div>
                  )}
                  {/* <img
                    className="dark_li alin_c"
                    src={isDarkTheme ? Sun : Moon}
                    alt="Toggle Theme"
                    onClick={toggleTheme}
                    style={{ cursor: "pointer" }}
                  /> */}
                  {/* < img
                    className="dark_li alin_c" src={Sun}/> */}
                </div>
              </div>
            </div>
          </nav>
          <img
            className="dark_li alin_c"
            src={isDarkTheme ? Sun : Moon}
            alt="Toggle Theme"
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
