import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";
import Resizer from "react-image-file-resizer";

const Kycverification03 = ({ data, onNext, onPrevious, panImageFile }) => {
  const { authData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    data || {
      pan_number: "",
      confirmpan_number: "",
    }
  );
  const [panImage, setPanImage] = useState(panImageFile); // Initialize with the passed image

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        toast.dismiss();
        toast.error("Upload Image in .jpg, .jpeg, or .png format only.");
        return;
      }
      
      try {
        Resizer.imageFileResizer(
          file,
          1280, // Target width
          720, // Target height
          "JPEG", // Format
          80, // Quality (0-100)
          0, // Rotation (0-degree)
          (resizedFile) => {
            // `resizedFile` is the resized File object
            setPanImage(resizedFile);
          },
          "file" // Output type
        );
      } catch (err) {
        toast.dismiss();
        toast.error("Upload Image in .jpg, .jpeg or .png  format only.");
        console.error("Error resizing image:", err);
      }
    }
  };

  const handleNext = async () => {
    setLoading(true);

    if (!formData.pan_number || !formData.confirmpan_number || !panImage) {
      toast.dismiss();
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (formData.pan_number !== formData.confirmpan_number) {
      toast.dismiss();
      toast.error("PAN card numbers do not match");
      setLoading(false);
      return;
    }

    try {
      // Prepare data for the image upload API
      const imageFormData = new FormData();
      imageFormData.append("pan_image", panImage);

      const uploadImagePromise = axios.post(
        `${base_url}/api/upload_pan_image`,
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: authData?.token,
          },
        }
      );

      const submitDetailsPromise = axios.post(
        `${base_url}/api/pan_details`,
        { ...formData, pan_image: panImage },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );

      const [imageResponse, detailsResponse] = await Promise.all([
        uploadImagePromise,
        submitDetailsPromise,
      ]);

      if (imageResponse.data.success !== 1) {
        throw new Error(imageResponse.data.message || "Image upload failed");
      }

      if (!detailsResponse.data.success) {
        throw new Error(
          detailsResponse.data.message || "PAN details submission failed"
        );
      }

      // Success: Navigate to the next step
      toast.dismiss();
      toast.success("PAN details submitted successfully");
      onNext(formData, panImage);
    } catch (error) {
      console.error("Submission failed", error);
      toast.dismiss();
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "An error occurred during submission"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h4 className="text-center wc mb-4">
        {" "}
        <span>02</span> Document Verification (PAN Card)
      </h4>
      <div className="">
        <form>
          <div className="border_box_p mt-4 ">
            <div className="row">
              <div className="col-lg-6">
                <div className="form_t">
                  <h5 className="trade_box_title_l wc">PAN Card Number</h5>
                  <div className="f_group_l d-flex j_con">
                    <input
                      type="text"
                      name="pan_number"
                      placeholder="ABCDE1234F"
                      value={formData.pan_number}
                      onChange={handleChange}
                      className="input_l w-100 wc"
                      autoComplete="off"
                    />
                    <h4 className="WC f_g_text alin_c">
                      <i className="fa-solid fa-id-card fa-beat wc"></i>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_t">
                  <h5 className="trade_box_title_l wc">
                    Confirm PAN Card Number
                  </h5>
                  <div className="f_group_l d-flex j_con">
                    <input
                      type="text"
                      name="confirmpan_number"
                      value={formData.confirmpan_number}
                      onChange={handleChange}
                      className="input_l w-100 wc"
                      autoComplete="off"
                    />
                    <h4 className="WC f_g_text alin_c">
                      <i className="fa-solid fa-id-card fa-beat wc"></i>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_t">
                  <h5 className="trade_box_title_l wc mt-3">
                    Upload Your Image (PAN Card)
                  </h5>
                  <div className="file_box mt-3">
                    <input
                      type="file"
                      className="input_l_file w-100 wc"
                      onChange={handleImageChange}
                      autoComplete="off"
                    />
                    <div className="text-center file_box_a">
                      <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
                      <h4 className="text-center wc mb-2">Choose a File</h4>
                      <h4 className="p_tile gold_c">
                        Drag or choose your file to upload
                      </h4>
                    </div>
                  </div>
                  {panImage && (
                    <div className="text-center mt-3">
                      <img
                        src={URL.createObjectURL(panImage)}
                        alt="panImage"
                        width="200"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="form_btn_prof d-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn_login wc"
                onClick={() => onPrevious()} // Pass only data for previous
              >
                Previous
              </button>
              <button
                type="button"
                className="btn_login wc"
                onClick={handleNext}
                disabled={loading}
              >
                {loading ? <i className="fa fa-spinner fa-spin me-2"></i> : ""}{" "}
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Kycverification03;
