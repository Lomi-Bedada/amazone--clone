import axios from "axios";

const axiosInstance = axios.create({
  http: "127.0.0.1:5001/clone-6e083/us-central1/api",

  //deployed for firebase function
  baseURL: "https://amazon-clone-back-u1rp.onrender.com",
  //deploy with server of github
  // baseURL: "https:amazon-api-deploy-0b73.onrender.com/",
});

export { axiosInstance };
