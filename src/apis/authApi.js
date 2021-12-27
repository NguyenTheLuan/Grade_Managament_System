import axiosClient from "./axiosClient";

const LOGIN_API = "/login";
const ACCOUNT_API = "/accounts";

const authApi = {
  loginGoogle: (access_token) => {
    const url = LOGIN_API + "/google";
    return axiosClient.post(url, access_token);
  },
  postLogout: (access_token) => {
    const url = LOGIN_API + "/logout";
    return axiosClient.post(url, access_token);
  },
  postLogin: (info_account) => {
    const url = LOGIN_API;
    return axiosClient.post(url, info_account);
  },

  postRegister: (info_account) => {
    const url = ACCOUNT_API + "/signup";
    return axiosClient.post(url, info_account);
  },
  postChangePassword: (info_account) => {
    const url = ACCOUNT_API + "/change-pw";
    return axiosClient.post(url, info_account);
  },
  postResetPassword: (info_account) => {
    const url = ACCOUNT_API + "/forgot-pw";
    return axiosClient.post(url, info_account);
  },
  postVerifyEmail: (email) => {
    const url = ACCOUNT_API + "/verify";
    return axiosClient.post(url, email);
  },
  postVerifyEmailForgotPassword: (email) => {
    const url = ACCOUNT_API + "/verify/forgot";
    return axiosClient.post(url, email);
  },
  postRefreshToken: (refresh_token) => {
    const url = LOGIN_API + "/refresh_token";
    return axiosClient.post(url, refresh_token);
  },
};

export default authApi;
