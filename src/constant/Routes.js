import Accounts from "features/Admin/AdminManageAccounts/Accounts/Accounts";
import Students from "features/Admin/AdminManageAccounts/Students/Students";
import Teachers from "features/Admin/AdminManageAccounts/Teachers/Teachers";
import AdminManageClasses from "features/Admin/AdminManageClasses/AdminManageClasses";
import AdminLogin from "features/Auth/BasicLogin/AdminLogin";
import ChangePassword from "features/Auth/BasicLogin/ChangePassword";
import ForgotPassword from "features/Auth/BasicLogin/ForgotPassword";
import Login from "features/Auth/BasicLogin/Login";
import Register from "features/Auth/BasicLogin/Register";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import StudentCourseDetail from "features/Student/StudentCourse/StudentCourseDetails/StudentCourseDetail";
import StudentCourses from "features/Student/StudentCourse/StudentCourses";
import StudentMapCode from "features/Student/StudentProfile/StudentMapCode";
import StudentProfile from "features/Student/StudentProfile/StudentProfile";
import StudentScoredRecord from "features/Student/StudentProfile/StudentScoredRecord";
import TeacherCourseDetailsRoutes from "features/Teacher/TeacherCourse/TeacherCourseDetails/TeacherCourseDetailsRoutes";
import TeacherCourses from "features/Teacher/TeacherCourse/TeacherCourses";
import TeacherAssignment from "features/Teacher/TeacherCourse/TeacherManage/TeacherAssignment";
import TeacherDetailsClass from "features/Teacher/TeacherCourse/TeacherManage/TeacherDetailsClass";
import TeacherGradeStruct from "features/Teacher/TeacherCourse/TeacherManage/TeacherGradeStruct";
import TeacherScored from "features/Teacher/TeacherCourse/TeacherManage/TeacherScored";

//Main route
export const MAIN_ROUTE = [
  {
    // name: "Trang chủ",
    path: "/",
    component: <HomePage />,
    index: true,
  },
  {
    // name: "Không tìm thấy",
    path: "*",
    component: <NotFound />,
    index: true,
  },
];

//Auth route
export const AUTH_ROUTE = [
  {
    // name: "Đăng nhập",
    path: "/login",
    component: <Login />,
    index: true,
  },
  {
    // name: "Đăng ký ",
    path: "/register",
    component: <Register />,
    index: true,
  },
  {
    // name: "Quên Mật khẩu",
    path: "/forgot_password",
    component: <ForgotPassword />,
    index: true,
  },
  {
    // name: "Trang đăng nhập dành cho admin",
    path: "/admin/login",
    component: <AdminLogin />,
    index: true,
  },
];

//Student route
export const STUDENT_ROUTE = [
  // {
  //   // name: "Trang chủ học viên",
  //   path: "",
  //   component: <StudentHeaderLink />,
  //   index: true,
  // },
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
    // name: "Trang lớp học",
    path: "courses",
    component: <StudentCourses />,
    index: false,
  },
  {
    // name: "Trang lớp học",
    path: "courses/:id",
    component: <StudentCourseDetail />,
    index: false,
  },
  {
    // name: "Trang xem điểm",
    path: "scored_records",
    component: <StudentScoredRecord />,
    index: false,
  },
  {
    // name: "Trang thay đổi mật khẩu",
    path: "change_password",
    component: <ChangePassword />,
    index: false,
  },
];

//Teacher route
export const TEACHER_ROUTE = [
  {
    // name: "Trang profile",
    path: "my_info",
    component: <StudentProfile />,
    index: false,
  },
  {
    // name: "Trang thay đổi mật khẩu",
    path: "change_password",
    component: <ChangePassword />,
    index: false,
  },
  {
    // name: "Trang thay đổi mật khẩu",
    path: "courses",
    component: <TeacherCourses />,
    index: false,
  },
  {
    // name: "Trang thay đổi mật khẩu",
    path: "courses/:id/*",
    component: <TeacherCourseDetailsRoutes />,
    index: false,
  },
];

//Details course
export const DETAIL_COURSE = {
  ADMIN: [
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
  ],
};

//Admin route
export const ADMIN_ROUTE = [
  {
    // name: "Trang profile",
    path: "students",
    component: <Students />,
    index: false,
  },
  {
    // name: "Trang thay đổi mật khẩu",
    path: "teachers",
    component: <Teachers />,
    index: false,
  },
  {
    // name: "Trang thay đổi mật khẩu",
    path: "accounts",
    component: <Accounts />,
    index: false,
  },
  {
    // name: "Trang thay đổi mật khẩu",
    path: "classes",
    component: <AdminManageClasses />,
    index: false,
  },
];
