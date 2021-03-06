import Accounts from "features/Admin/AdminManageAccounts/Accounts";
import Students from "features/Admin/AdminManageAccounts/Students";
import Teachers from "features/Admin/AdminManageAccounts/Teachers";
import AdminManageClasses from "features/Admin/AdminManageClasses/AdminManageClasses";
import AdminRedirect from "features/Admin/AdminRedirect";
import AdminLogin from "features/Auth/BasicLogin/AdminLogin";
import ChangePassword from "features/Auth/BasicLogin/ChangePassword";
import ForgotPassword from "features/Auth/BasicLogin/ForgotPassword";
import Login from "features/Auth/BasicLogin/Login";
import Register from "features/Auth/BasicLogin/Register";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import StudentCourseDetailsRoutes from "features/Student/StudentCourse/StudentCourseDetails/StudentCourseDetailsRoutes";
import StudentCourses from "features/Student/StudentCourse/StudentCourses";
import StudentCourseAssignments from "features/Student/StudentCourse/StudentManage/StudentCourseAssignments";
import StudentCourseDetail from "features/Student/StudentCourse/StudentManage/StudentCourseDetail";
import StudentCourseScored from "features/Student/StudentCourse/StudentManage/StudentCourseScored";
import StudentGradeStruct from "features/Student/StudentCourse/StudentManage/StudentGradeStruct";
import StudentInfo from "features/Student/StudentPage/StudentInfo";
import StudentMapCode from "features/Student/StudentProfile/StudentMapCode";
import StudentProfile from "features/Student/StudentProfile/StudentProfile";
import StudentScoredRecord from "features/Student/StudentProfile/StudentScoredRecord";
import StudentReviewDetail from "features/Student/StudentReviews/StudentReviewDetail";
import StudentReviews from "features/Student/StudentReviews/StudentReviews";
import TeacherCourseDetailsRoutes from "features/Teacher/TeacherCourse/TeacherCourseDetails/TeacherCourseDetailsRoutes";
import TeacherCourseId from "features/Teacher/TeacherCourse/TeacherCourseDetails/TeacherCourseId";
import TeacherCourses from "features/Teacher/TeacherCourse/TeacherCourses";
import TeacherAssignment from "features/Teacher/TeacherCourse/TeacherManage/TeacherAssignment";
import TeacherDetailsClass from "features/Teacher/TeacherCourse/TeacherManage/TeacherDetailsClass";
import TeacherGradeStruct from "features/Teacher/TeacherCourse/TeacherManage/TeacherGradeStruct";
import TeacherScored from "features/Teacher/TeacherCourse/TeacherManage/TeacherScored";
import TeacherReviews from "features/Teacher/TeacherReviews/TeacherReviews";

//Main route
export const MAIN_ROUTE = [
  {
    // name: "Trang ch???",
    path: "/",
    component: <HomePage />,
    index: true,
  },
  {
    // name: "Kh??ng t??m th???y",
    path: "*",
    component: <NotFound />,
    index: true,
  },
];

//Auth route
export const AUTH_ROUTE = [
  {
    // name: "????ng nh???p",
    path: "/login",
    component: <Login />,
    index: true,
  },
  {
    // name: "????ng k?? ",
    path: "/register",
    component: <Register />,
    index: true,
  },
  {
    // name: "Qu??n M???t kh???u",
    path: "/forgot_password",
    component: <ForgotPassword />,
    index: true,
  },
  {
    // name: "Trang ????ng nh???p d??nh cho admin",
    path: "/admin/login",
    component: <AdminLogin />,
    index: true,
  },
];

//Student route
export const STUDENT_ROUTE = [
  {
    // name: "Trang ch??? h???c vi??n",
    path: "",
    component: <StudentInfo />,
    index: true,
  },
  {
    // name: "Trang profile",
    path: "my_info",
    component: <StudentProfile />,
    index: false,
  },
  {
    // name: "Trang profile",
    path: "map_student_id",
    component: <StudentMapCode />,
    index: false,
  },
  {
    // name: "Trang l???p h???c",
    path: "courses",
    component: <StudentCourses />,
    index: false,
  },
  {
    // name: "Trang l???p h???c",
    path: "courses/:id/*",
    component: <StudentCourseDetailsRoutes />,
    index: false,
  },
  {
    // name: "Trang xem ??i???m",
    path: "scored_records",
    component: <StudentScoredRecord />,
    index: false,
  },
  {
    // name: "Trang thay ?????i m???t kh???u",
    path: "change_password",
    component: <ChangePassword />,
    index: false,
  },
];

//Teacher route
export const TEACHER_ROUTE = [
  {
    // name: "Trang ch??? h???c vi??n",
    path: "",
    component: <StudentInfo />,
    index: true,
  },
  {
    // name: "Trang profile",
    path: "my_info",
    component: <StudentProfile />,
    index: false,
  },
  {
    // name: "Trang thay ?????i m???t kh???u",
    path: "change_password",
    component: <ChangePassword />,
    index: false,
  },
  {
    // name: "Trang thay ?????i m???t kh???u",
    path: "courses",
    component: <TeacherCourses />,
    index: false,
  },
  {
    // name: "Trang thay ?????i m???t kh???u",
    path: "courses/:id/*",
    component: <TeacherCourseDetailsRoutes />,
    index: false,
  },
];

//Details course
export const DETAIL_COURSE = {
  ADMIN: [
    {
      path: "",
      component: <TeacherCourseId />,
      index: true,
    },
    {
      path: "details",
      component: <TeacherDetailsClass />,
      index: true,
    },
    {
      path: "grade_structures",
      component: <TeacherGradeStruct />,
      index: false,
    },
    {
      path: "assignments",
      component: <TeacherAssignment />,
      index: false,
    },
    {
      path: "scored_records",
      component: <TeacherScored />,
      index: false,
    },
    {
      path: "review",
      component: <TeacherReviews />,
      index: false,
    },
    {
      path: "review/:id",
      component: <StudentReviewDetail />,
      index: false,
    },
  ],
  STUDENT: [
    {
      path: "",
      component: <TeacherCourseId />,
      index: true,
    },
    {
      path: "details",
      component: <StudentCourseDetail />,
      index: true,
    },
    {
      path: "scored",
      component: <StudentCourseScored />,
      index: true,
    },
    {
      path: "assigments",
      component: <StudentCourseAssignments />,
      index: true,
    },
    {
      path: "grade_structures",
      component: <StudentGradeStruct />,
      index: false,
    },
    {
      path: "review",
      component: <StudentReviews />,
      index: false,
    },
    {
      path: "review/:id",
      component: <StudentReviewDetail />,
      index: false,
    },
  ],
};

//Admin route
export const ADMIN_ROUTE = [
  {
    // name: "Trang profile",
    path: "",
    component: <AdminRedirect />,
    index: false,
  },
  {
    // name: "Trang profile",
    path: "students",
    component: <Students />,
    index: false,
  },
  {
    // name: "Trang thay ?????i m???t kh???u",
    path: "teachers",
    component: <Teachers />,
    index: false,
  },
  {
    // name: "Trang thay ?????i m???t kh???u",
    path: "accounts",
    component: <Accounts />,
    index: false,
  },
  {
    // name: "Trang thay ?????i m???t kh???u",
    path: "classes",
    component: <AdminManageClasses />,
    index: false,
  },
];
