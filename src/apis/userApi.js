const { default: axiosClient } = require("./axiosClient");

const USER_API = "/users";
const STUDENT_API = "/student";
const TEACHER_API = "/teacher";

const userApi = {
  getInfoUser: () => {
    const url = USER_API + "/my";
    return axiosClient.get(url);
  },
  //For student
  updateInfo: (info_update) => {
    const url = USER_API + "/my";
    return axiosClient.post(url, info_update);
  },
  mapStudentId: (student_id) => {
    const url = USER_API + "/student-id";
    return axiosClient.post(url, student_id);
  },

  join_newClass: (code) => {
    const url = USER_API + "/join";
    return axiosClient.post(url, code);
  },
  //get all courses joined
  get_myCourses: (class_info) => {
    const url = USER_API + STUDENT_API + "/my-courses";
    return axiosClient.get(url, {
      params: class_info,
    });
  },
  //get course details
  get_myCoursesDetail: (code_course) => {
    const url = USER_API + STUDENT_API + `/course/${code_course}`;
    return axiosClient.get(url);
  },
  //get scored in courses detail
  get_MyScoredRecord: (info_update) => {
    const url = USER_API + STUDENT_API + "/grade";
    return axiosClient.get(url, info_update);
  },
  //get all asignments
  get_MyAssignments: (info_update) => {
    const url = USER_API + STUDENT_API + "/course/assignments";
    return axiosClient.get(url, info_update);
  },

  //for teacher
  //creacte,view class
  create_newClass: (className) => {
    const url = USER_API + TEACHER_API + "/create-class";
    return axiosClient.post(url, className);
  },
  post_updateClass: (className) => {
    const url = USER_API + TEACHER_API + "/class";
    return axiosClient.post(url, className);
  },
  get_myClass: (info_Class) => {
    const url = USER_API + TEACHER_API + "/my-class";
    return axiosClient.get(url, {
      params: info_Class,
    });
  },
  get_myClassDetail: (code_class) => {
    const url = USER_API + TEACHER_API + `/class/${code_class}`;
    return axiosClient.get(url);
  },
  //grade struct
  get_TeacherGrades: (code_class) => {
    const url = USER_API + TEACHER_API + `/grades`;
    return axiosClient.get(url, {
      params: code_class,
    });
  },
  get_TeacherGradeStruct: (code_class) => {
    const url = USER_API + TEACHER_API + `/grade-struct`;
    return axiosClient.get(url, code_class);
  },
  post_TeacherGradeStructAdd: (struct_info) => {
    const url = USER_API + TEACHER_API + `/grade-struct`;
    return axiosClient.post(url, struct_info);
  },
  post_TeacherGradeStructDelete: (code) => {
    const url = USER_API + TEACHER_API + `/grade-struct/delete`;
    return axiosClient.post(url, code);
  },
  post_TeacherGradeStructEdit: (struct_info) => {
    const url = USER_API + TEACHER_API + `/grade-struct/update`;
    return axiosClient.post(url, struct_info);
  },
  //assignments
  get_TeacherAssignments: (code_class) => {
    const url = USER_API + TEACHER_API + `/assignments`;
    return axiosClient.get(url, {
      params: code_class,
    });
  },
  post_TeacherAssignmentsAdd: (assignment_info) => {
    const url = USER_API + TEACHER_API + `/assignment`;
    return axiosClient.post(url, assignment_info);
  },
  post_TeacherAssignmentsEdit: (assignment_info) => {
    const url = USER_API + TEACHER_API + `/assignment/update`;
    return axiosClient.post(url, assignment_info);
  },
  post_TeacherAssignmentsGradeScored: (assignment_info) => {
    const url = USER_API + TEACHER_API + `/assignment/grade`;
    return axiosClient.post(url, assignment_info);
  },
};

export default userApi;
