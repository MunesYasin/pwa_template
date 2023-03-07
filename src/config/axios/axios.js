
import axios from 'axios';
import { config } from "../config"



const instance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'SameSite': 'None',
  },
  mode: 'no-cors',
  baseURL: config.backEndURL,
  timeout: 600000000,
  responseType: 'json',
  validateStatus: function (status) {
    return status < 500;
  },
  withCredentials: true

});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});



export default instance;