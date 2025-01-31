import axios from 'axios';
import queryString from "query-string";
// import { userLogin, userInfo } from '../store/userSlice';
// import { toast } from 'react-toastify';

const Url = 'http://localhost:3001'

export const LOGIN_POST_METHOD = async (link, body) => {
    var url = `${Url}${link}`
    console.log(url, 'login url');
    try {
        const res = await axios.post(url, body, {
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

export const SIGNUP_POST_METHOD = async (link, body) => {
    var url = `${Url}${link}`
    console.log(url, 'signup url');
    try {
        const res = await axios.post(url, body, {
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


export const GET_METHOD = async (link, authToken) => {
    var url = `${Url}${link}`;
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            }
        });
        console.log(res, 'res get api');
        return res.data;
    } catch (error) {
        console.log("Error fetching:", error.message);
    }
};

export const GET_CAMERAS_METHOD = async (link, authToken) => {
    var url = `${Url}${link}`;
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            }
        });
        console.log(res, 'res get api');
        return res.data;
    } catch (error) {
        console.log("Error fetching:", error.message);
    }
};

export const GET_METHOD_2 = async (link, authToken, params) => {
    try {
        const queryParams = queryString.stringify(params, { skipNull: true, skipEmptyString: true });
        const url = `${Url}${link}${queryParams ? `?${queryParams}` : ''}`;
        console.log(url, "GET_METHOD_2 URL");
        console.log(authToken, "GET_METHOD_2 Auth");

        const res = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        });

        console.log(res, "Response from GET_METHOD_2");
        return res.data;
    } catch (error) {
        console.error("Error fetching:", error.message);
        return null;
    }
};


export const POST_METHOD = async (link, authToken, body) => {
    var url = `${Url}${link}`;
    try {
        const res = await axios.post(`${url}`, body, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            data: body
        });
        return res.data;
    } catch (error) {
        console.log("Error posting:", error.message);
    }
};


