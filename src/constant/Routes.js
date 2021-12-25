import AdminPage from "features/Admin/AdminPage/AdminPage";
import AdminLogin from "features/Auth/BasicLogin/AdminLogin";
import ForgotPassword from "features/Auth/BasicLogin/ForgotPassword";
import Login from "features/Auth/BasicLogin/Login";
import Register from "features/Auth/BasicLogin/Register";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import StudentCourseJoin from "features/Student/StudentCourse/StudentCourseJoin";
import StudentCourses from "features/Student/StudentCourse/StudentCourses";
import StudentProfile from "features/Student/StudentProfile/StudentProfile";
import StudentScoredRecord from "features/Student/StudentProfile/StudentScoredRecord";
import TeacherPage from "features/Teacher/TeacherPage/TeacherPage";

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
    // name: "Trang profile học viên",
    path: "my_info",
    component: <StudentProfile />,
    index: false,
  },
  {
    // name: "Trang lớp học của học viên",
    path: "courses",
    component: <StudentCourses />,
    index: false,
  },
  {
    // name: "Trang xem điểm của học viên",
    path: "scored_records",
    component: <StudentScoredRecord />,
    index: false,
  },
  {
    // name: "Trang tham gia lớp của học viên",
    path: "course_join",
    component: <StudentCourseJoin />,
    index: false,
  },
];

//Teacher route
export const TEACHER_ROUTE = [
  {
    // name: "Trang chủ giảng viên",
    path: "/teacher",
    component: <TeacherPage />,
    index: true,
  },
];

//Admin route
export const ADMIN_ROUTE = [
  {
    // name: "Trang chủ admin",
    path: "/admin",
    component: <AdminPage />,
    index: true,
  },
];
