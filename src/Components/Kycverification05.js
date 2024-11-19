import React, { useState, useRef, useContext } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../Contextapi/Auth";
import { base_url } from "../ApiService/BaseUrl";
import { useNavigate } from "react-router-dom";

const Kycverification05 = ({ onPrevious }) => {
  const navigate = useNavigate()
  const webcamRef = useRef(null);
  const [selfieImage, setSelfieImage] = useState(null);
  const { authData } = useContext(AuthContext);

  const captureSelfie = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

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
  };

  const uploadSelfieImage = async () => {
    if (!selfieImage) {
      toast.dismiss();
      toast.error("Please capture a selfie first.");
      return;
    }

    try {
      const formData = new FormData();
      console.log(selfieImage);
      formData.append("signatureImage", selfieImage);
      const response = await axios.post(
        `${base_url}/api/upload_signature_image`,
        formData,
        {
          headers: {
            authorization: authData?.token,
          },
        }
      );

      if (response.data.success===1) {
        toast.dismiss();
        toast.success(response.data.message);
        navigate('/dashboard');
      } else {
        toast.dismiss();
        toast.error(response.data.message || "Error uploading selfie image.");
      }
    } catch (error) {
      console.error("Error uploading selfie:", error);
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
                    facingMode: "user", // Optional: specify front-facing camera
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
              {selfieImage && (
                <div className="text-center mt-3">
                  <img
                    src={URL.createObjectURL(selfieImage)}
                    alt="Selfie"
                    width="200"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="form_btn_prof d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn_login wc"
              onClick={() => onPrevious()}
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
