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

**1. Trang chính:**<br/>
/home<br/>

**2. Trang auth:**<br/>
/login<br/>
/register<br/>
/forgot_password<br/>
**3. Trang học viên:**<br/>

/student<br/>

- **Xem thông tin cá nhân**<br/>
  /student/my_inf <br/>
  /student/my_info/update<br/>
  /student/scored_record<br/>

- **Xem lớp học đã tham gia**<br/>
  /student/courses<br/>
  /student/courses/invitation_enter<br/>
  /student/courses/:id<br/>
  /student/courses/:id/assignment<br/>
  /student/courses/:id/details<br/>
  /student/courses/:id/reviews<br/>

**4. Trang giảng viên:**<br/>

/teacher<br/>

- **Xem thông tin cá nhân**<br/>
  /teacher/my_info<br/>
  /teacher/my_info/update<br/>

- **Xem lớp học đang quản lý**<br/>
  /teacher/courses<br/>
  /teacher/courses/invatitation_create<br/>
  /teacher/courses/:id<br/>
  /teacher/courses/:id/assignment<br/>
  /teacher/courses/:id/details<br/>
  /teacher/courses/:id/reviews<br/>

**5. Trang admin:**<br/>

/admin<br/>

- **Quản lý tài khoản**<br/>
  /admin/students<br/>
  /admin/teachers<br/>
  /admin/accounts<br/>

- **Quản lý lớp học**<br/>
  /admin/courses<br/>
