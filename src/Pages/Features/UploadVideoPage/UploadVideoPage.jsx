import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import UploadVideo from '../../../Components/UploadVideo/UploadVideo';


export default function UploadVideoPage() {
    return (
        <div className='main-upload-page'>
            <Navbar />
            <UploadVideo />
            {/* <Footer /> */}
        </div>
    );
}


