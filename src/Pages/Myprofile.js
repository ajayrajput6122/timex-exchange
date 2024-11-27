// import React from 'react'
// import Kycverification from '../Components/Kycverification'
// import MyProfil from '../Components/MyProfil'
// import ReferralEarn from '../Components/ReferralEarn'
// import ReferralBonus from '../Components/ReferralBonus'
// import BugReports  from '../Components/BugReports'
// import ChangePassword1 from '../Components/ChangePassword1'

// const Myprofile = () => {
//   return (
//     <>
//       <section className='sec01_login'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-lg-12'>
//             <div class="tabs_d-flex align-items-start">
//               <div class="nav nav_tab_sid flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//                 <button class="nav-link p_tabs_btn active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> My Profile</button>
//                 <button class="nav-link p_tabs_btn" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">KYC Verification</button>
//                 <button class="nav-link p_tabs_btn" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</button>
//                 <button class="nav-link p_tabs_btn" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Referral & Earn</button>
//                 <button class="nav-link p_tabs_btn" id="v-pills-settings-tab1" data-bs-toggle="pill" data-bs-target="#v-pills-settings1" type="button" role="tab" aria-controls="v-pills-settings1" aria-selected="false">Referral Bonus</button>
//                 <button class="nav-link p_tabs_btn" id="v-pills-settings-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-settings2" type="button" role="tab" aria-controls="v-pills-settings2" aria-selected="false">Bug Reports</button>
//               </div>
//               <div class="tab-content tab-content1" id="v-pills-tabContent">
//                 <div class="tab-pane fade wc show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
//                 <MyProfil/>
//                 {/* <Kycverification05/> */}
//                 </div>

//                 <div class="tab-pane fade wc" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
//                   <Kycverification/>
//                 </div>

//                 <div class="tab-pane fade wc" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
//                 <ChangePassword1/>
//                 </div>

//                 <div class="tab-pane fade wc" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
//                 <ReferralEarn/>
//                 </div>

//                 <div class="tab-pane fade wc" id="v-pills-settings1" role="tabpanel" aria-labelledby="v-pills-settings-tab1">
//                   <ReferralBonus/>
//                 </div>

//                 <div class="tab-pane fade wc" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
//                 <BugReports/>
//                 </div>

//               </div>
//             </div>
//             </div>
//             <div className='col-lg-8'>

//             </div>
//           </div>  
//         </div>
//       </section>
//     </>
//   )
// }

// export default Myprofile
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Kycverification from '../Components/Kycverification';
import MyProfil from '../Components/MyProfil';
import ReferralEarn from '../Components/ReferralEarn';
import ReferralBonus from '../Components/ReferralBonus';
import BugReports from '../Components/BugReports';
import ChangePassword1 from '../Components/ChangePassword1';

const Myprofile = () => {
  const location = useLocation();

  const activeTab = location.state?.activeTab || 'home';

  useEffect(() => {
    const tabButton = document.querySelector(`[data-bs-target="#v-pills-${activeTab}"]`);
    if (tabButton) tabButton.click();
  }, [activeTab]);

  return (
    <>
      <section className='sec01_login'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="tabs_d-flex align-items-start">
                <div className="nav nav_tab_sid flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button className="nav-link p_tabs_btn active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> My Profile</button>
                  <button className="nav-link p_tabs_btn" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">KYC Verification</button>
                  <button className="nav-link p_tabs_btn" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</button>
                  <button className="nav-link p_tabs_btn" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Referral & Earn</button>
                  <button className="nav-link p_tabs_btn" id="v-pills-settings-tab1" data-bs-toggle="pill" data-bs-target="#v-pills-settings1" type="button" role="tab" aria-controls="v-pills-settings1" aria-selected="false">Referral Bonus</button>
                  <button className="nav-link p_tabs_btn" id="v-pills-settings-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-settings2" type="button" role="tab" aria-controls="v-pills-settings2" aria-selected="false">Bug Reports</button>
                </div>
                <div className="tab-content tab-content1" id="v-pills-tabContent">
                  <div className="tab-pane fade wc show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <MyProfil />
                  </div>
                  <div className="tab-pane fade wc" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <Kycverification />
                  </div>
                  <div className="tab-pane fade wc" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <ChangePassword1 />
                  </div>
                  <div className="tab-pane fade wc" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <ReferralEarn />
                  </div>
                  <div className="tab-pane fade wc" id="v-pills-settings1" role="tabpanel" aria-labelledby="v-pills-settings-tab1">
                    <ReferralBonus />
                  </div>
                  <div className="tab-pane fade wc" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
                    <BugReports />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myprofile;
