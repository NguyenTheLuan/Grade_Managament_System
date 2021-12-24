const { default: axiosClient } = require("./axiosClient");

const USER_API = "/users";

const userApi = {
  getInfo: () => {
    const url = USER_API + "/my";
    return axiosClient.get(url);
  },
  updateInfo: (info_update) => {
    const url = USER_API + "/my";
    return axiosClient.post(url, info_update);
  },
  mapStudentId: (student_id) => {
    const url = USER_API + "/student-id";
    return axiosClient.post(url, student_id);
  },
};

export default userApi;
