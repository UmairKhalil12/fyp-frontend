// import React, { useState, useRef, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./UploadVideo.css";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { GET_CAMERAS_METHOD } from "../../api/api";
// import { cameraInfo } from "../../store/cameraSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Select } from "antd";

// export default function UploadVideo() {
//   const dispatch = useDispatch();
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [selectedCamera, setSelectedCamera] = useState("");
//   const userData = useSelector((state) => state.user.userData);
//   const [cameras, setCameras] = useState("");

//   useEffect(() => {
//     const fetchCameras = async () => {
//       const response = await GET_CAMERAS_METHOD("/cameras", userData);
//       setCameras(response);
//       dispatch(cameraInfo(cameras));
//     };
//     fetchCameras();
//   }, [userData]);

//   const fileInputRef = useRef(null);
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       event.target.value = "";
//     }
//   };

//   const handleRemoveVideo = () => {
//     setSelectedFile(null);
//     setVideoURL(null);
//   };

//   const handleUploadButtonClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleCameraSelect = (camera) => {
//     setSelectedCamera(camera);
//   };

//   const handleDetection = () => {
//     console.log("Selected File is", selectedFile);
//     toast.success("detecting...");
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) return;

//     const formData = new FormData();
//     formData.append("video", selectedFile);

//     try {
//       const response = await axios.post("http://localhost:3001/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Upload successful:", response.data);
//     } catch (error) {
//       console.error("Upload failed:", error);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="text-center border border-3 rounded p-4" style={{ width: "50%", backgroundColor: "#888" }}>
//         {!selectedFile ? (
//           <>
//             <div className="p-5 text-white rounded" style={{ backgroundColor: "#999" }}>
//               <p className="upload-btn">Upload Video</p>
//               <div className="d-flex justify-content-center gap-3" style={{ marginBottom: "0.5rem" }}>
//                 {["Camera-1", "Camera-2", "Camera-3"].map((camera) => (
//                   <label key={camera} className="text-white">
//                     <input type="radio" name="camera" value={camera} checked={selectedCamera === camera} onChange={() => handleCameraSelect(camera)} className="me-2" />
//                     {camera}
//                   </label>
//                 ))}
//               </div>
//               <button className="choose-file-btn btn-light" onClick={handleUploadButtonClick} disabled={selectedCamera === ""}>
//                 Upload File
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="p-5 text-white rounded" style={{ backgroundColor: "#999" }}>
//               <p className="upload-btn">Uploaded Video</p>
//             </div>
//             <video controls className="w-100 mt-3" src={videoURL} style={{ objectFit: "contain", maxHeight: "400px" }} />
//             <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
//               <button className="btn btn-danger mt-3" onClick={handleRemoveVideo}>
//                 Remove Video
//               </button>

//               <button className="detecting-btn btn-primary mt-3" onClick={handleUpload}>
//                 Start Detecting
//               </button>
//             </div>
//           </>
//         )}
//         <input ref={fileInputRef} type="file" accept="video/*" className="d-none" onChange={handleFileChange} />
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UploadVideo.css";
import { toast } from "react-toastify";
import axios from "axios";
import { GET_CAMERAS_METHOD } from "../../api/api";
import { cameraInfo } from "../../store/cameraSlice";
import { useDispatch, useSelector } from "react-redux";
import { Select, Card, Button } from "antd";
import { getFormattedString } from "../../utils/helper";

const { Option } = Select;

export default function UploadVideo() {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState("");
  const userData = useSelector((state) => state.user.userData);
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    const fetchCameras = async () => {
      const response = await GET_CAMERAS_METHOD("/cameras", userData);
      setCameras(response);
      dispatch(cameraInfo(response));
    };
    fetchCameras();
  }, [userData, dispatch]);

  console.log("Cameras are", cameras);

  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setVideoURL(URL.createObjectURL(file));
      event.target.value = "";
    }
  };

  const handleRemoveVideo = () => {
    setSelectedFile(null);
    setVideoURL(null);
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCameraSelect = (value) => {
    console.log("Value is", value);
    setSelectedCamera(value);
  };

  const handleDetection = () => {
    console.log("Selected File is", selectedFile);
    toast.success("detecting...");
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("video", selectedFile);

    try {
      const response = await axios.post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="upload-container">
      <Card className="upload-card">
        <h1 className="upload-title">Upload Video</h1>
        <p className="upload-description">Select Camera to continue</p>

        <Select className="camera-select" placeholder="Select a camera" onChange={handleCameraSelect} value={selectedCamera} size="large">
          {cameras.map((camera) => (
            <Option key={camera.cameraId} value={camera.cameraId}>
              {getFormattedString(camera.type)} - {camera.description}
            </Option>
          ))}
        </Select>

        {!selectedFile ? (
          <div className="upload-section">
            <Button type="primary" size="large" onClick={handleUploadButtonClick} disabled={!selectedCamera}>
              Upload File
            </Button>
          </div>
        ) : (
          <div className="video-section">
            <video controls className="uploaded-video" src={videoURL} />
            <div className="action-buttons">
              <Button type="danger" size="large" onClick={handleRemoveVideo}>
                Remove Video
              </Button>
              <Button type="primary" size="large" onClick={handleUpload}>
                Start Detecting
              </Button>
            </div>
          </div>
        )}
        <input ref={fileInputRef} type="file" accept="video/*" className="d-none" onChange={handleFileChange} />
      </Card>
    </div>
  );
}
