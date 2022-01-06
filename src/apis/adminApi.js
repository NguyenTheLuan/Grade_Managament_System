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
  get_TeacherId: (id) => {
    const url = ADMIN_API + `/teacher/${id}`;
    return axiosClient.get(url);
  },
  post_UpdateTeacherId: (id, info_account) => {
    const url = ADMIN_API + `/teacher/${id}`;
    return axiosClient.post(url, info_account);
  },
  post_CreateTeacher: (info_account) => {
    const url = ADMIN_API + "/teacher";
    return axiosClient.post(url, info_account);
  },
  //get students
  get_Students: (params) => {
    const url = ADMIN_API + "/students";
    return axiosClient.get(url, { params: params });
  },
  post_UpdateStudentId: (id, info_account) => {
    const url = ADMIN_API + `/student/${id}`;
    return axiosClient.post(url, info_account);
  },
  //get accounts
  get_Accounts: (params) => {
    const url = ADMIN_API + "/accounts";
    return axiosClient.get(url, { params: params });
  },
  post_AccountUpdate: (info_account) => {
    const url = ADMIN_API + "/account/change-pw";
    return axiosClient.post(url, info_account);
  },
  post_AccountsLock: (id) => {
    const url = ADMIN_API + `/account/lock/${id}`;
    return axiosClient.post(url);
  },
  post_AccountsUnlock: (id) => {
    const url = ADMIN_API + `/account/unlock/${id}`;
    return axiosClient.post(url);
  },
  //get classes
  get_Classes: (params) => {
    const url = ADMIN_API + "/classes";
    return axiosClient.get(url, { params: params });
  },
  post_ClassesUpdate: (id, info_class) => {
    const url = ADMIN_API + `/class/${id}`;
    return axiosClient.post(url, info_class);
  },
};

export default adminApi;
