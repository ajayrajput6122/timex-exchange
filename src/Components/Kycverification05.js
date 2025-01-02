import React, { useState, useRef, useContext, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../Contextapi/Auth";
import { base_url } from "../ApiService/BaseUrl";
import { useNavigate } from "react-router-dom";

export default function Kycverification05({ onPrevious }) {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [selfieImage, setSelfieImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const { authData } = useContext(AuthContext);

  const captureSelfie = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 300 },
          height: { ideal: 300 },
        },
      });

      const video = document.createElement("video");
      video.srcObject = stream;

      await new Promise((resolve) => {
        video.onloadedmetadata = () => {
          video.play();
          resolve();
        };
      });

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0);

      // Convert canvas to Blob and create a File object
      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/jpeg")
      );
      const file = new File([blob], "selfie.jpg", { type: "image/jpeg" });

      setSelfieImage(file); // Set the file as the selfieImage
      setImgSrc(URL.createObjectURL(file)); // Create an object URL for preview

      // Stop video stream
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Selfie capture error:", error);
      toast.dismiss();
      toast.error("Camera access failed. Check browser permissions.");
    }
  };

  // const captureSelfie = useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   if (!imageSrc) {
  //     toast.dismiss();
  //     toast.error("Failed to capture selfie. Please try again.");
  //     return;
  //   }
  //   setImgSrc(imageSrc);
  //   const byteString = atob(imageSrc.split(",")[1]);
  //   const mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];
  //   const ab = new ArrayBuffer(byteString.length);
  //   const ia = new Uint8Array(ab);
  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i);
  //   }
  //   const blob = new Blob([ab], { type: mimeString });
  //   const file = new File([blob], "selfie.jpg", { type: mimeString });
  //   setSelfieImage(file);
  // }, [webcamRef]);

  const uploadSelfieImage = async () => {
    setLoading(true);

    if (!selfieImage) {
      toast.dismiss();
      toast.error("Please capture a selfie first.");
      setLoading(false);
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
      toast.error(
        "An error occurred while uploading the selfie. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4 className="text-center wc mb-4">
        Selfie
      </h4>

      <div className="border_box_p mt-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form_t">
            <h5 className="trade_box_title_l wc">Upload Your Image (Selfie)</h5>
            <div className="file_box">
              <div className="camera-container">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="webcam-preview"
                  videoConstraints={{
                    facingMode: "user",
                  }}
                />
                <button
                  type="button"
                  className="btn_login wc mt-3 capture-btn"
                  onClick={captureSelfie}
                >
                  Capture Selfie
                </button>
              </div>
              {imgSrc && (
                <div className="text-center mt-3">
                  <img
                  className="imgSelfieContainer"
                    src={imgSrc}
                    alt="Captured Selfie"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="form_btn_prof d-flex justify-content-between mt-4">
            <button type="button" className="btn_login wc" onClick={onPrevious}>
              Previous
            </button>

            <button
              type="button"
              className="btn_login wc"
              onClick={uploadSelfieImage}
              disabled={loading}
            >
              {loading ? <i className="fa fa-spinner fa-spin me-2"></i> : ""}
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
