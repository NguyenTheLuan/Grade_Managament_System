const { default: axiosClient } = require("./axiosClient");

const ADMIN_API = "/admin";

const adminApi = {
  postLogin: (info_account) => {
    const url = ADMIN_API + "/login";
    return axiosClient.post(url, info_account);
  },
};

export default adminApi;
