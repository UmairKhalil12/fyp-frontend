import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import HomePage from "../Pages/Home/HomePage/HomePage";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/home' element={<HomePage />} />
                {/* <Route path="*" element={<NoPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}