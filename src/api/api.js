import { notification } from "antd";
import axios from "axios";
// import { userLogin, userInfo } from '../store/userSlice';
// import { toast } from 'react-toastify';

// const Url = 'http://localhost:8000'
const Url = "http://localhost:3001";

export const LOGIN_POST_METHOD = async (link, body) => {
  var url = `${Url}${link}`;
  console.log("Url is ", url);
  try {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    if (error.response) {
      console.log("Server Response:", error.response.data);
      console.log("Status Code:", error.response.status);
      notification.error({
        message: "Error while login",
        description: error.response,
      });
      return error.response;
    } else {
      console.error("Login request failed:", error);
    }
  }
};

export const SIGNUP_POST_METHOD = async (link, body) => {
  var url = `${Url}${link}`;
  try {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    if (error.response) {
      console.log("Server Response:", error.response.data);
      console.log("Status Code:", error.response.status);
      return error.response;
    } else {
      console.error("Signup request failed:", error);
    }
  }
};

export const GET_METHOD = async (link) => {
  try {
    const res = await axios.get(`${Url} + ${link}`);
    return res.data;
  } catch (error) {
    console.log("Error fetching:", error.message);
  }
};

export const POST_METHOD = async (link, body) => {
  console.log(link, body);
  try {
    const res = await axios.post(`${Url} + ${link}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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

export const getRoute = async (startCoords, endCoords) => {
  const apiKey = "5b3ce3597851110001cf62481be299697bd1443fb0b11a2cfa07234f";
  const url = "https://api.openrouteservice.org/v2/directions/driving-car";

  const body = `{"coordinates":[${startCoords},${endCoords}]}`;

  const headers = {
    Authorization: apiKey,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(url, body, {
      headers: headers,
    });
    return response.data.features[0].geometry.coordinates;
  } catch (error) {
    console.error("Error fetching route:", error);
    return [];
  }
};
