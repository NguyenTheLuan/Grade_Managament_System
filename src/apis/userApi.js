const { default: axiosClient } = require("./axiosClient");

const USER_API = "/users";
const STUDENT_API = "/student";
const TEACHER_API = "/teacher";

const userApi = {
  getInfoUser: () => {
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

  //for teacher
  create_newClass: (className) => {
    const url = USER_API + TEACHER_API + "/create-class";
    return axiosClient.post(url, className);
  },
  get_myClass: (info_Class) => {
    const url = USER_API + TEACHER_API + "/my-class";
    return axiosClient.get(url, {
      params: info_Class,
    });
  },
};

export default userApi;
