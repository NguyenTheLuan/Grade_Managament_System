# Grade Management System

Source code: [Frontend](https://github.com/facebook/create-react-app) - [Backend]()

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
/login
**2. Trang học viên:**

/student

- **Xem thông tin cá nhân**
  /student/my_info
  /student/my_info/update
  /student/scored_record

- **Xem lớp học đã tham gia**
  /student/courses
  /student/courses/invitation_enter
  /student/courses/id

**3. Trang giảng viên:**

/teacher

- **Xem thông tin cá nhân**
  /teacher/my_info
  /teacher/my_info/update

- **Xem lớp học đang quản lý**
  /teacher/courses
  /teacher/courses/invatitation_create
  /teacher/courses/id

**4. Trang admin:**

/admin

- **Xem thông tin cá nhân**
  /admin/my_info
  /admin/my_info/update

- **Quản lý tài khoản**
  /admin/accounts

- **Quản lý lớp học**A
  /admin/courses
