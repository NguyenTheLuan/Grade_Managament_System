import AdminPage from "features/Admin/AdminPage/AdminRoutes";
import AdminLogin from "features/Auth/BasicLogin/AdminLogin";
import ChangePassword from "features/Auth/BasicLogin/ChangePassword";
import ForgotPassword from "features/Auth/BasicLogin/ForgotPassword";
import Login from "features/Auth/BasicLogin/Login";
import Register from "features/Auth/BasicLogin/Register";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import StudentCourseJoin from "features/Student/StudentCourse/StudentCourseJoin";
import StudentCourses from "features/Student/StudentCourse/StudentCourses";
import StudentMapCode from "features/Student/StudentProfile/StudentMapCode";
import StudentProfile from "features/Student/StudentProfile/StudentProfile";
import StudentScoredRecord from "features/Student/StudentProfile/StudentScoredRecord";
import TeacherCourseCreate from "features/Teacher/TeacherCourse/TeacherCourseCreate";
import TeacherCourses from "features/Teacher/TeacherCourse/TeacherCourses";

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
    // name: "Trang xem điểm",
    path: "scored_records",
    component: <StudentScoredRecord />,
    index: false,
  },
  // {
  //   // name: "Trang tham gia lớp",
  //   path: "course_join",
  //   component: <StudentCourseJoin />,
  //   index: false,
  // },
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
  // {
  //   // name: "Trang thay đổi mật khẩu",
  //   path: "course_create",
  //   component: <TeacherCourseCreate />,
  //   index: false,
  // },
];

//Admin route
export const ADMIN_ROUTE = [
  // {
  //   // name: "Trang chủ admin",
  //   path: "/admin",
  //   component: <AdminPageD />,
  //   index: true,
  // },
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
];
