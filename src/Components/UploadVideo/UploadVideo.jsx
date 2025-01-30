import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UploadVideo.css";
import { toast } from "react-toastify";

export default function UploadVideo() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [videoURL, setVideoURL] = useState(null);
    const [selectedCamera, setSelectedCamera] = useState("");

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

    const handleCameraSelect = (camera) => {
        setSelectedCamera(camera);
    };

    const handleDetection = () => {
        toast.success('detecting...');
    }


    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div
                className="text-center border border-3 rounded p-4"
                style={{ width: "50%", backgroundColor: "#888" }}
            >
                {!selectedFile ? (
                    <>
                        <div className="p-5 text-white rounded" style={{ backgroundColor: "#999" }}>
                            <p className="upload-btn">Upload Video</p>
                            <div className="d-flex justify-content-center gap-3" style={{ marginBottom: '0.5rem' }}>
                                {["Camera-1", "Camera-2", "Camera-3"].map((camera) => (
                                    <label key={camera} className="text-white">
                                        <input
                                            type="radio"
                                            name="camera"
                                            value={camera}
                                            checked={selectedCamera === camera}
                                            onChange={() => handleCameraSelect(camera)}
                                            className="me-2"
                                        />
                                        {camera}
                                    </label>
                                ))}
                            </div>
                            <button
                                className="choose-file-btn btn-light"
                                onClick={handleUploadButtonClick}
                                disabled={selectedCamera === ''}
                            >
                                Upload File
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="p-5 text-white rounded" style={{ backgroundColor: "#999" }}>
                            <p className="upload-btn">Uploaded Video</p>
                        </div>
                        <video
                            controls
                            className="w-100 mt-3"
                            src={videoURL}
                            style={{ objectFit: "contain", maxHeight: "400px" }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <button
                                className="btn btn-danger mt-3"
                                onClick={handleRemoveVideo}
                            >
                                Remove Video
                            </button>

                            <button
                                className="detecting-btn btn-primary mt-3"
                                onClick={handleDetection}
                            >
                                Start Detecting
                            </button>
                        </div>
                    </>
                )}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    className="d-none"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
}
