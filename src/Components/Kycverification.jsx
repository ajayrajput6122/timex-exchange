import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Kycverification01 from "./Kycverification01";
import Kycverification3 from "./Kycverification03";
import Kycverification4 from "./Kycverification04";
import Kycverification5 from "./Kycverification05";
import { AuthContext } from "../Contextapi/Auth";
import { base_url } from "../ApiService/BaseUrl";

const Kycverification = () => {
  const { authData } = useContext(AuthContext); // Get auth data from context
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    panCard: {},
    otherDocuments: {},
    selfie: {},
  });
  const [panImageFile, setPanImageFile] = useState(null); // Store panImageFile
  const [frontImage, setFrontImage] = useState(null); // Store front image
  const [backImage, setBackImage] = useState(null); // Store back image
  const [kycStatus, setKycStatus] = useState(null); // Store KYC status
  const [loading, setLoading] = useState(true); // Track loading state
  const [showForm, setShowForm] = useState(false); // Track form visibility

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get(`${base_url}/api/v1/userProfile`, {
          headers: {
            Authorization: authData?.token,
          },
        });
        if (response.data.success) {
          setKycStatus(response.data.user.kycStatus);
        } else {
          console.error("Failed to fetch KYC status");
        }
      } catch (error) {
        console.error("Details Not Found", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileDetails();
  }, [authData?.token]);

  const handleNext = (stepData, stepKey) => {
    setFormData((prev) => ({ ...prev, [stepKey]: stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator
  }

  if (kycStatus === "APPLIED") {
    return <p className="text-center">Your KYC is applied. Please wait for verification.</p>;
  }

  if (kycStatus === "APPROVED") {
    return <p className="text-center">Your KYC is approved.</p>;
  }

  if (kycStatus === "PENDING" || kycStatus === "REJECTED") {
    return (
      <div>
        {!showForm && (
          <p>
            {kycStatus === "PENDING"
              ? "Your KYC is pending. Please update your details and resubmit."
              : "Your KYC has been rejected. Please update your details and resubmit."}
          </p>
        )}
        {!showForm ? (
          <button
            className="sub_01 wc mb-4"
            onClick={() => setShowForm(true)}
          >
            Complete KYC
          </button>
        ) : (
          <div>
            <h4 className="text-center wc mb-4">KYC Verification</h4>
            {currentStep === 1 && (
              <Kycverification01
                data={formData.personalInfo}
                onNext={(data) => handleNext(data, "personalInfo")}
              />
            )}
            {currentStep === 2 && (
              <Kycverification3
                data={formData.panCard}
                panImageFile={panImageFile}
                onNext={(data, image) => {
                  handleNext(data, "panCard");
                  setPanImageFile(image);
                }}
                onPrevious={handlePrevious}
              />
            )}
            {currentStep === 3 && (
              <Kycverification4
                data={formData.otherDocuments}
                frontImage={frontImage}
                backImage={backImage}
                onNext={(data, frontImg, backImg) => {
                  handleNext(data, "otherDocuments");
                  setFrontImage(frontImg);
                  setBackImage(backImg);
                }}
                onPrevious={handlePrevious}
              />
            )}
            {currentStep === 4 && (
              <Kycverification5
                data={formData.selfie}
                onPrevious={handlePrevious}
              />
            )}
          </div>
        )}
      </div>
    );
  }

  return <p>KYC status is unavailable. Please contact support.</p>;
};

export default Kycverification;
