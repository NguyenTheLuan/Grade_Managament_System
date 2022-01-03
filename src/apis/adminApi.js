const { default: axiosClient } = require("./axiosClient");

const ADMIN_API = "/admin";

const adminApi = {
  postLogin: (info_account) => {
    const url = ADMIN_API + "/login";
    return axiosClient.post(url, info_account);
  },
  //get teachers
  get_Teachers: (params) => {
    const url = ADMIN_API + "/teachers";
    return axiosClient.get(url, { params: params });
  },
  //get students
  get_Students: (params) => {
    const url = ADMIN_API + "/students";
    return axiosClient.get(url, { params: params });
  },
  //get accounts
  get_Accounts: (params) => {
    const url = ADMIN_API + "/accounts";
    return axiosClient.get(url, { params: params });
  },
  //get classes
  get_Classes: (params) => {
    const url = ADMIN_API + "/classes";
    return axiosClient.get(url, { params: params });
  },
};

export default adminApi;
