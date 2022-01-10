# Grade Management System

Xem demo tại: [Giao diện demo](https://manage-grade-system.herokuapp.com) - [link API](https://gradems.herokuapp.com/apis-doc/#/)

## Miêu tả hệ thống

### `1.Chức năng chính:`

**1. Yêu cầu**

- Phân quyền routes (người dùng, học viên, giảng viên, admin).
- Social Login (google, facebook).

**2. Chức năng chính:**
| Vai trò | Trang chính | Học viên | Giảng viên | Admin |
| --------- | ---------------------------- | ---------------------------------------- | -------------------------------------- | ------------------------------------------ |
| Chức năng | 1. Hệ thống trang chính<br>2. Đăng nhập | 1. Quản lý trang cá nhân<br> 2. Lớp học tham gia | 1. Quản lý trang cá nhân<br>2. Quản lý lớp học | 1. Quản lý tài khoản<br>2. Quản lý lớp học |

### `2.Routes:`

**1. Trang chính:**
/home

**2. Trang auth:**
/login
/register
/forgot_password
**3. Trang học viên:**

/student

- **Xem thông tin cá nhân**
  /student/my_info
  /student/my_info/update
  /student/scored_record

- **Xem lớp học đã tham gia**
  /student/courses
  /student/courses/invitation_enter
  /student/courses/:id
  /student/courses/:id/assignment
  /student/courses/:id/details
  /student/courses/:id/reviews

**4. Trang giảng viên:**

/teacher

- **Xem thông tin cá nhân**
  /teacher/my_info
  /teacher/my_info/update

- **Xem lớp học đang quản lý**
  /teacher/courses
  /teacher/courses/invatitation_create
  /teacher/courses/:id
  /teacher/courses/:id/assignment
  /teacher/courses/:id/details
  /teacher/courses/:id/reviews

**5. Trang admin:**

/admin

- **Quản lý tài khoản**
  /admin/students
  /admin/teachers
  /admin/accounts

- **Quản lý lớp học**
  /admin/courses
