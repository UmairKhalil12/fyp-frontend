import axios from 'axios';
// import { userLogin, userInfo } from '../store/userSlice';
// import { toast } from 'react-toastify';

export const LOGIN_POST_METHOD = async (link, body) => {
    try {
        const res = await axios.post(link, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res, 'res login post method');
        return res;
    } catch (error) {
        if (error.response) {
            console.log("Server Response:", error.response.data);
            console.log("Status Code:", error.response.status);
            return error.response;
        } else {
            console.error('Login request failed:', error);
        }
    }
};

export const SIGNUP_POST_METHOD = async (link, body, dispatch) => {
    try {
        const res = await axios.post(link, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    } catch (error) {
        if (error.response) {
            console.log("Server Response:", error.response.data);
            console.log("Status Code:", error.response.status);
            return error.response;
        } else {
            console.error('Signup request failed:', error);
        }
    }
}


export const GET_METHOD = async (link) => {
    try {
        const res = await axios.get(link);
        return res.data;
    } catch (error) {
        console.log("Error fetching:", error.message);
    }
};

export const POST_METHOD = async (link, body) => {
    console.log(link, body);
    try {
        const res = await axios.post(link, body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.status >= 200 && res.status < 300) {
            return { success: true, data: res.data };
        } else {
            return { success: false, message: `Unexpected response code: ${res.status}` };
        }
    } catch (error) {
        console.log("Error posting:", error.message);
        return { success: false, message: error.message };
    }
};
