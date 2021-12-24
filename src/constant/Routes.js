import AdminPage from "features/Admin/AdminPage/AdminPage";
import ForgotPassword from "features/Auth/BasicLogin/ForgotPassword";
import Login from "features/Auth/BasicLogin/Login";
import Register from "features/Auth/BasicLogin/Register";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import StudentCourse from "features/Student/StudentCourse/StudentCourse";
import StudentPage from "features/Student/StudentPage/StudentPage";
import StudentProfile from "features/Student/StudentProfile/StudentProfile";
import TeacherPage from "features/Teacher/TeacherPage/TeacherPage";

//Main route
export const MAIN_ROUTE = [
  {
    // name: "Trang chủ",
    path: "/",
    component: <HomePage />,
    exact: true,
  },
  {
    // name: "Không tìm thấy",
    path: "*",
    component: <NotFound />,
    exact: true,
  },
];

//Auth route
export const AUTH_ROUTE = [
  {
    // name: "Đăng nhập",
    path: "/login",
    component: <Login />,
    exact: true,
  },
  {
    // name: "Đăng ký ",
    path: "/register",
    component: <Register />,
    exact: true,
  },
  {
    // name: "Quên Mật khẩu",
    path: "/forgot_password",
    component: <ForgotPassword />,
    exact: true,
  },
];

//Student route
export const STUDENT_ROUTE = [
  {
    // name: "Trang chủ học viên",
    path: "/student",
    component: <StudentPage />,
    exact: false,
  },
  {
    // name: "Trang profile học viên",
    path: "/student/my_info",
    component: <StudentProfile />,
    exact: false,
  },
  {
    // name: "Trang lớp học của học viên",
    path: "/student/courses",
    component: <StudentCourse />,
    exact: false,
  },
];

//Teacher route
export const TEACHER_ROUTE = [
  {
    // name: "Trang chủ giảng viên",
    path: "/teacher",
    component: <TeacherPage />,
    exact: true,
  },
];

//Admin route
export const ADMIN_ROUTE = [
  {
    // name: "Trang chủ admin",
    path: "/admin",
    component: <AdminPage />,
    exact: true,
  },
];
