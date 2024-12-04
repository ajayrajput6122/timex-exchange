import React, { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "../ApiService/BaseUrl";
import { AuthContext } from "../Contextapi/Auth";

const Kycverification04 = ({
  data,
  frontImage,
  backImage,
  onNext,
  onPrevious,
}) => {
  const { authData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    documentType: "",
    documentNumber: "",
    frontImageFile: frontImage,
    backImageFile: backImage,
  });

  console.log(frontImage);
  useEffect(() => {
    if (data) {
      setFormData((prev) => ({
        ...prev,
        documentType: data.documentType || "",
        documentNumber: data.documentNumber || "",
      }));
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { documentType, documentNumber, frontImageFile, backImageFile } =
      formData;

    if (!documentType || !documentNumber || !frontImageFile || !backImageFile) {
      toast.dismiss();
      toast.error("Please fill all fields and upload both images.");
      setLoading(false);
      return;
    }

    const requestData = {
      documentType,
      documentNumber,
    };

    try {
      // First API call to submit document details
      const docDetailsResponse = await axios.post(
        `${base_url}/api/doc_details`,
        requestData,
        {
          headers: {
            authorization: authData?.token,
          },
        }
      );

      if (docDetailsResponse.data.success !== 1) {
        toast.dismiss();
        toast.error(
          docDetailsResponse.data.message || "Error while updating doc details."
        );
        setLoading(false);
        return; // Stop further execution if the document details API fails
      }

      // Second API call to upload proof images
      const uploadProofResponse = await uploadProofImages(
        frontImageFile,
        backImageFile
      );

      if (uploadProofResponse?.success !== 1) {
        toast.dismiss();
        console.log(uploadProofResponse,"---");
        toast.error(
          uploadProofResponse?.message ||
            "Error while uploading proof documents."
        );
        setLoading(false);
        return; // Stop further execution if the image upload API fails
      }

      // If both API calls succeed, show only one success message
      toast.dismiss();
      toast.success("Documents uploaded successfully!");

      // Proceed to the next page
      onNext(requestData, frontImageFile, backImageFile);
    } catch (error) {
      console.error("Error during API calls:", error);
      toast.dismiss();
      toast.error(
        error.response?.data?.message ||  error.message|| "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const uploadProofImages = async (frontImageFile, backImageFile) => {
    const formData = new FormData();
    formData.append("documentFront", frontImageFile);
    formData.append("documentBack", backImageFile);

    try {
      const response = await axios.post(
        `${base_url}/api/upload_proof_images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: authData?.token,
          },
        }
      );

      if (response.data.success === 1) {
        return response.data; // Return the response for further validation
      } else {
        return response.data;
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      return null; // Return null in case of error
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const { documentType, documentNumber, frontImageFile, backImageFile } =
  //     formData;

  //   if (!documentType || !documentNumber || !frontImageFile || !backImageFile) {
  //     toast.dismiss();
  //     toast.error("Please fill all fields and upload both images.");
  //     setLoading(false);
  //     return;
  //   }

  //   const requestData = {
  //     documentType: documentType,
  //     documentNumber: documentNumber,
  //   };

  //   try {
  //     // First API call to submit document details
  //     const docDetailsResponse = await axios.post(
  //       `${base_url}/api/doc_details`,
  //       requestData,
  //       {
  //         headers: {
  //           authorization: authData?.token,
  //         },
  //       }
  //     );

  //     if (docDetailsResponse.data.success !== 1) {
  //       toast.dismiss();
  //       toast.error(
  //         docDetailsResponse.data.message || "Error while updating doc details."
  //       );
  //       setLoading(false);
  //       return;
  //     }

  //     toast.dismiss();
  //     toast.success(docDetailsResponse.data.message);

  //     const uploadProofResponse = await uploadProofImages(
  //       frontImageFile,
  //       backImageFile
  //     );

  //     if (uploadProofResponse?.success !== 1) {
  //       toast.dismiss();
  //       toast.error(
  //         uploadProofResponse?.message ||
  //           "Error while uploading proof documents."
  //       );
  //       setLoading(false);
  //       return;
  //     }

  //     toast.dismiss();
  //     toast.success("Documents uploaded successfully!");

  //     onNext(requestData, frontImageFile, backImageFile);
  //   } catch (error) {
  //     console.error("Error during API calls:", error);
  //     toast.dismiss();
  //     toast.error("An error occurred. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const uploadProofImages = async (frontImageFile, backImageFile) => {
  //   const formData = new FormData();
  //   formData.append("documentFront", frontImageFile);
  //   formData.append("documentBack", backImageFile);

  //   try {
  //     const response = await axios.post(
  //       `${base_url}/api/upload_proof_images`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           authorization: authData?.token,
  //         },
  //       }
  //     );

  //     if (response.data.success === 1) {
  //       return response.data; // Return the response for further validation
  //     } else {
  //       throw new Error(
  //         response.data.message || "Error while uploading proof documents."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error during image upload:", error);
  //     return null; // Return null in case of error
  //   }
  // };

  return (
    <>
      <h4 className="text-center wc mb-4">
        <span>03</span> Other Document Verification
      </h4>
      <div className="border_box_p mt-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">Select Document Type</h5>
                <div className="f_group_l d-flex j_con">
                  <select
                    className="input_l w-100 wc"
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleChange}
                  >
                    <option value="">Select Document Type</option>
                    <option value="adhaar_card">Aadhar card</option>
                    <option value="licence">Driving License</option>
                    <option value="passport">Passport</option>
                  </select>
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-id-card fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form_t">
                <h5 className="trade_box_title_l wc">
                  {formData.documentType === "adhaar_card"
                    ? "Aadhar Number"
                    : formData.documentType === "licence"
                    ? "License Number"
                    : formData.documentType === "passport"
                    ? "Passport Number"
                    : "Document Number"}
                </h5>
                <div className="f_group_l d-flex j_con">
                  <input
                    type="text"
                    name="documentNumber"
                    className="input_l w-100 wc"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={
                      formData.documentType === "adhaar_card"
                        ? "1234-5678-9012" // Example Aadhar format
                        : formData.documentType === "licence"
                        ? "DL-XX-YYYY-1234567" // Example License format
                        : formData.documentType === "passport"
                        ? "A1234567" // Example Passport format
                        : "Enter Document Number"
                    }
                  />
                  <h4 className="WC f_g_text alin_c">
                    <i className="fa-solid fa-id-card fa-beat wc"></i>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form_t">
                <h5 className="trade_box_title_l wc mt-3">Front Image</h5>
                <div className="file_box mt-3">
                  <input
                    type="file"
                    className="input_l_file w-100 wc"
                    onChange={(e) => handleFileChange(e, "frontImageFile")}
                  />

                  <div className="text-center file_box_a">
                    <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
                    <h4 className="text-center wc mb-2">Choose a File</h4>
                    <h4 className="p_tile gold_c">
                      Drag or choose your file to upload
                    </h4>
                  </div>
                  {formData.frontImageFile && (
                    <div className="text-center mt-5">
                      <img
                        src={URL.createObjectURL(formData.frontImageFile)}
                        alt="frontimage"
                        width="200"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form_t">
                <h5 className="trade_box_title_l wc mt-3">Back Image</h5>
                <div className="file_box mt-3">
                  <input
                    type="file"
                    className="input_l_file w-100 wc"
                    onChange={(e) => handleFileChange(e, "backImageFile")}
                  />

                  <div className="text-center file_box_a">
                    <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
                    <h4 className="text-center wc mb-2">Choose a File</h4>
                    <h4 className="p_tile gold_c">
                      Drag or choose your file to upload
                    </h4>
                  </div>
                  {formData.backImageFile && (
                    <div className="text-center mt-5">
                      <img
                        src={URL.createObjectURL(formData.backImageFile)}
                        alt="backimage"
                        width="200"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="form_btn_prof d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn_login wc"
              onClick={() => onPrevious()}
              disabled={loading}
            >
              Previous
            </button>
            <button
              type="submit"
              className="btn_login wc"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <i className="fa fa-spinner fa-spin me-2"></i> : ""}
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Kycverification04;
