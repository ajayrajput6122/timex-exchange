import React, { useState, useRef, useContext, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../Contextapi/Auth";
import { base_url } from "../ApiService/BaseUrl";
import { useNavigate } from "react-router-dom";

const Kycverification05 = ({ onPrevious }) => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [selfieImage, setSelfieImage] = useState(null);
  const [imgSrc, setImgSrc] = useState(null); // For preview
  const { authData } = useContext(AuthContext);

  // Capture selfie from webcam
  const captureSelfie = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      toast.error("Failed to capture selfie. Please try again.");
      return;
    }
    setImgSrc(imageSrc);
    // Convert base64 image to File
    const byteString = atob(imageSrc.split(",")[1]);
    const mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    const file = new File([blob], "selfie.jpg", { type: mimeString });
    setSelfieImage(file);
  }, [webcamRef]);

  // Upload selfie image to the server
  const uploadSelfieImage = async () => {
    if (!selfieImage) {
      toast.dismiss();
      toast.error("Please capture a selfie first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("signatureImage", selfieImage);
      const response = await axios.post(
        `${base_url}/api/upload_signature_image`,
        formData,
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );

      if (response.data.success === 1) {
        toast.dismiss();
        toast.success(response.data.message);
        navigate("/dashboard");
      } else {
        toast.dismiss();
        toast.error(response.data.message || "Error uploading selfie image.");
      }
    } catch (error) {
      console.error("Error uploading selfie:", error);
      toast.dismiss();
      toast.error("An error occurred while uploading the selfie. Please try again.");
    }
  };

  return (
    <div>
      <h4 className="text-center wc mb-4">
        <span>04</span> Selfie
      </h4>

      <div className="border_box_p mt-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form_t">
            <h5 className="trade_box_title_l wc">Upload Your Image (Selfie)</h5>
            <div className="file_box">
              <div
                className="rounded mx-auto"
                style={{ width: "200px", height: "200px" }}
              >
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width="100%"
                  videoConstraints={{
                    facingMode: "user",
                  }}
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn_login wc mt-3"
                  onClick={captureSelfie}
                >
                  Capture Selfie
                </button>
              </div>
              {imgSrc && (
                <div className="text-center mt-3">
                  <img
                    src={imgSrc}
                    alt="Captured Selfie"
                    style={{ width: "200px", height: "200px", borderRadius: "10px" }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="form_btn_prof d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn_login wc"
              onClick={onPrevious}
            >
              Previous
            </button>

            <button
              type="button"
              className="btn_login wc"
              onClick={uploadSelfieImage}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kycverification05;
