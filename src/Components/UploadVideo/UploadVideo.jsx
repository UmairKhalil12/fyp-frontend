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
  const [loading, setLoading] = useState(false);

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
    if (!selectedFile || !selectedCamera) return;

    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("cameraId", selectedCamera);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
      toast.success("Video Detected!");
    }
  };

  return (
    <div className="upload-container">
      <Card className="upload-card" >
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
          <div className="video-section" >
            <video controls className="uploaded-video" src={videoURL} />
            <div className="action-buttons">
              <Button type="danger" size="large" onClick={handleRemoveVideo}>
                Remove Video
              </Button>
              <Button type="primary" size="large" onClick={handleUpload} loading={loading}>
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
