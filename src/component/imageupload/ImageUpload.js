import React, { useState } from "react";
import Webcam from "react-webcam";
import Upload from "./Upload";
import ImageUploads from "./ImageUploads.css";

const ImageUpload = (props) => {
  const [image, setImage] = useState("");

  const webcamRef = React.useRef(null);
  console.log("dsfd", webcamRef);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("sdfsd", imageSrc);
    setImage(imageSrc);
  };

  const saveImage = () => {
    const form_data = JSON.parse(localStorage.getItem("form_data"));
    form_data["image"] = image;
    localStorage.setItem("form_data", JSON.stringify(form_data));
    alert("save successfully");
  };

  return (
    <React.Fragment>
      <div className="container-fluid webcampage">
        <div className="row">
          <div className="col-md-6">
            <div className="cam ml-5">
              {image === "" ? (
                <Webcam
                  audio={false}
                  style={{ width: "80%" }}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="webcampage"
                />
              ) : (
                <img src={image} />
              )}
            </div>
            <div className="mt-5 ">
              {image !== "" ? (
                <>
                  <div></div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setImage("");
                    }}
                    className="btn btn-info ml-5"
                  >
                    Retake Image
                  </button>
                  <button className="btn btn-success ml-5" onClick={saveImage}>
                    Save Image
                  </button>
                </>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    capture();
                  }}
                  className="btn btn-primary ml-5 "
                >
                  Capture
                </button>
              )}
            </div>
            <p id="LEFT_MIDDLE_INFO"> </p>
          </div>
          <div className="col-md-6">
            <div className="mt-5">
              <Upload />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageUpload;
