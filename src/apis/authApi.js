import axiosClient from "./axiosClient";

const LOGIN_API = "/login";
const ACCOUNT_API = "/accounts";

const authApi = {
  loginGoogle: (access_token) => {
    const url = LOGIN_API + "/google";
    return axiosClient.post(url, access_token);
  },
  postLogin: (info_account) => {
    const url = LOGIN_API;
    return axiosClient.post(url, info_account);
  },
  //Register
  postRegister: (info_account) => {
    const url = ACCOUNT_API + "/signup";
    return axiosClient.post(url, info_account);
  },
  postVerifyEmail: (email) => {
    const url = ACCOUNT_API + "/verify";
    return axiosClient.post(url, email);
  },
};

export default authApi;
