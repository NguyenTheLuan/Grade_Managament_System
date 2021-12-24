import Admin from "features/Admin/Admin";
import Auth from "features/Auth/Auth";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import Student from "features/Student/Student";
import Teacher from "features/Teacher/Teacher";

export const MAIN_ROUTE = [
  {
    // name: "Trang chủ",
    path: "/",
    component: <HomePage />,
    exact: true,
    index: true,
  },
  {
    // name: "Trang chủ",
    path: "*",
    component: <NotFound />,
    exact: true,
    index: true,
  },
  {
    // name: "Đăng nhập",
    path: "/login",
    component: <Auth />,
    exact: true,
    index: true,
  },
  {
    // name: "Đăng nhập",
    path: "/register",
    component: <Auth />,
    exact: true,
    index: true,
  },
  {
    // name: "Đăng nhập",
    path: "/forgot_password",
    component: <Auth />,
    exact: true,
    index: true,
  },
  {
    // name: "Dành cho học viên",
    path: "/student",
    component: <Student />,
    exact: true,
    index: true,
  },
  {
    // name: "Dành cho giảng viên",
    path: "/teacher",
    component: <Teacher />,
    exact: true,
    index: true,
  },
  {
    // name: "Admin",
    path: "/admin",
    component: <Admin />,
    exact: true,
    index: true,
  },
];

//Student Page
export const STUDENT_PAGE = {
  //Trang home
  HOME: {
    path: "/student",
    component: () => "student",
    exact: false,
    index: true,
  },
  //Trang quản lý thông tin
  INFO: {
    path: "/student/my_info",
    component: () => "student info",
    exact: false,
    index: false,
  },
  SCORED_RECORD: {
    path: "/student/scored_record",
    component: () => "student info",
    exact: false,
    index: false,
  },
  //Trang quản lý lớp học đã tham gia
  COURSE: {
    path: "/student/courses",
    component: () => "student courses",
    exact: false,
    index: false,
  },
  COURSE_ENTER: {
    path: "/student/courses/invitation_enter",
    component: () => "student nhập mã course",
    exact: false,
    index: false,
  },
  COURSE_DETAIL: {
    path: "/student/courses/:id",
    component: () => "danh sách course chi tiết",
    exact: false,
    index: false,
  },
};

export const TEACHER_PAGE = {
  //Trang home
  HOME: {
    path: "/teacher",
    component: () => "teacher",
    exact: false,
    index: true,
  },
  //Trang quản lý thông tin
  INFO: {
    path: "/teacher/my_info",
    component: () => "teacher info",
    exact: false,
    index: false,
  },
  //Trang quản lý lớp học đã tham gia
  COURSE: {
    path: "/teacher/courses",
    component: () => "teacher course",
    exact: false,
    index: false,
  },
  COURSE_CREATE: {
    path: "/teacher/courses/invatitation_create",
    component: () => "tạo lớp mới",
    exact: false,
    index: false,
  },
  COURSE_DETAIL: {
    path: "/student/courses/:id",
    component: () => "xem chi tiết lớp",
    exact: false,
    index: false,
  },
};

//Trang admin
export const ADMIN_PAGE = {
  //Trang home
  HOME: {
    path: "/admin",
    component: () => "admin",
    exact: false,
    index: true,
  },
  //Trang quản lý thông tin
  INFO: {
    path: "/admin/my_info",
    component: () => "admin info",
    exact: false,
    index: false,
  },
  //Quản lý lớp học
  COURSES: {
    path: "/admin/courses",
    component: () => "admin course",
    exact: false,
    index: false,
  },
  ACCOUNTS: {
    path: "/student/accounts",
    component: () => "quản lý tài khoản",
    exact: false,
    index: false,
  },
};
