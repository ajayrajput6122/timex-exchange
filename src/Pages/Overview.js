import React, { useEffect } from "react";
import Overview1 from "../Components/MainAccountHistory";
import Overview2 from "../Components/TradingAccountHistory";
import Overview3 from "../Components/FundingAccountHistory";
import Overview4 from "../Components/TransferHistory";
import Overview5 from "../Components/AssetsOverview";
import { useLocation } from "react-router-dom";
const Overview = () => {
  const location = useLocation();

  const activeTab = location.state?.activeTab || "t";

  useEffect(() => {
    const tabButton = document.querySelector(
      `[data-bs-target="#nav-profile_${activeTab}"]`
    );
    if (tabButton) tabButton.click();
  }, [activeTab]);

  return (
    <>
      <section className="sec01_d">
        <div className="container ">
          <nav className=" pb-2 mb">
            <div
              class="nav nav-tabs t_t_btn_g t_t_btn_g02"
              id="nav-tab"
              role="tablist"
            >
              <button
                class="nav-link t_t_btn02 wc active"
                id="nav-home-tab_t"
                data-bs-toggle="tab"
                data-bs-target="#nav-home_t"
                type="button"
                role="tab"
                aria-controls="nav-home_t"
                aria-selected="true"
              >
                Assets Overview
              </button>
              <button
                class="nav-link t_t_btn02 wc"
                id="nav-profile-tab_t"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile_t"
                type="button"
                role="tab"
                aria-controls="nav-profile_t"
                aria-selected="false"
              >
                Main Account
              </button>
              <button
                class="nav-link t_t_btn02 wc"
                id="nav-profile-tab_t01"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile_t01"
                type="button"
                role="tab"
                aria-controls="nav-profile_t01"
                aria-selected="false"
              >
                Trading Account
              </button>
              <button
                class="nav-link t_t_btn02 wc"
                id="nav-profile-tab_t02"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile_t02"
                type="button"
                role="tab"
                aria-controls="nav-profile_t02"
                aria-selected="false"
              >
                Funding Account
              </button>
              <button
                class="nav-link t_t_btn02 wc"
                id="nav-profile-tab_t03"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile_t03"
                type="button"
                role="tab"
                aria-controls="nav-profile_t03"
                aria-selected="false"
              >
                Transfer History
              </button>
            </div>
          </nav>
          <div className="trade_box ">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show wc active"
                id="nav-home_t"
                role="tabpanel"
                aria-labelledby="nav-home-tab_t"
              >
                <Overview5 />
              </div>
              <div
                class="tab-pane fade wc"
                id="nav-profile_t"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <Overview1 />
              </div>

              <div
                class="tab-pane fade wc"
                id="nav-profile_t01"
                role="tabpanel"
                aria-labelledby="nav-profile-tab01"
              >
                <Overview2 />
              </div>
              <div
                class="tab-pane fade wc"
                id="nav-profile_t02"
                role="tabpanel"
                aria-labelledby="nav-profile-tab02"
              >
                <Overview3 />
              </div>
              <div
                class="tab-pane fade wc"
                id="nav-profile_t03"
                role="tabpanel"
                aria-labelledby="nav-profile-tab03"
              >
                <Overview4 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
