import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import HomePage from "../Pages/Home/HomePage/HomePage";
import { useSelector } from "react-redux";
import UploadVideoPage from "../Pages/Features/UploadVideoPage/UploadVideoPage";

export default function Navigation() {
    const user = useSelector((state) => state.user.user);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={!user ? <HomePage /> : <Navigate to="/login" />} />
                <Route path='/upload' element={user ? <UploadVideoPage /> : <Navigate to='/login' />} />
                <Route path='/' element={user ? <HomePage /> : <Navigate to="/login" />} />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/home" /> : <Login />}
                />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}
