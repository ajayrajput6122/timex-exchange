import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";

const Kycverification03 = ({ data, onNext, onPrevious, panImageFile }) => {
  const { authData } = useContext(AuthContext);
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

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setPanImage(selectedFile);
      const imageFormData = new FormData();
      imageFormData.append("pan_image", selectedFile);

      try {
        const response = await axios.post(
          `${base_url}/api/upload_pan_image`,
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: authData?.token,
            },
          }
        );

        if (response.data.success === 1) {
          // toast.dismiss();
          console.log(response.data.message);
        } else {
          // toast.dismiss();
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Image upload failed", error);
        toast.error("Image upload failed");
      }
    }
  };

  const handleNext = async () => {
    if (!formData.pan_number || !formData.confirmpan_number || !panImage) {
      toast.dismiss();
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.pan_number !== formData.confirmpan_number) {
      toast.dismiss();
      toast.error("PAN card numbers do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${base_url}/api/pan_details`,
        { ...formData, pan_image: panImage },
        {
          headers: {
            Authorization: authData?.token,
          },
        }
      );

      if (response.data.success) {
        toast.dismiss();
        toast.success(response.data.message);
        onNext(formData, panImage); // Pass image to parent
      } else {
        toast.dismiss();
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Submission failed", error);
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
              >
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
