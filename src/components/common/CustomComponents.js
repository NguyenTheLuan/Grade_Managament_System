import { Route } from "react-router-dom";

//render routes
export const renderRoute = (routes) => {
  if (routes.lenght === 0) {
    return;
  } else {
    return routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.index}
          // index={route.index}
          element={route.component}
        />
      );
    });
  }
};

//eclipsePagination
export const eclipsePagination = (c, totalPages) => {
  var current = c,
    last = totalPages,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
};

//Show check null info
export const checkInfo = (info) => {
  return info ? info : "Trống";
};
//Check gender
export const checkGender = (isMale) => {
  return isMale ? "Nam" : "Nữ";
};
//Check join
export const checkJoin = (isJoin) => {
  return isJoin ? "Đã tham gia" : "Chưa tham gia";
};
//CheckActive
export const checkActive = (status) => {
  return status ? "Đang mở" : "Đã khóa";
};
//Check type of account
export const checkTypeAccount = (account) => {
  return account === "google" ? "Google" : "Tài khoản";
};
//CheckRole
export const checkRole = (role) => {
  return role === "teacher" ? "Giảng viên" : "Học viên";
};
//CheckComplete
export const checkComplete = (isComplete) => {
  return isComplete ? "Hoàn thành" : "Chưa hoàn thành";
};
//render Date
export const renderDate = (time) => {
  const date = new Date(time);
  var dd = String(date.getUTCDate()).padStart(2, "0");
  var mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  //January is 0!
  var yyyy = date.getUTCFullYear();

  //time
  var minutes = ("0" + date.getUTCMinutes()).slice(-2);
  var hours = ("0" + date.getUTCHours()).slice(-2);

  return dd + "/" + mm + "/" + yyyy + " lúc " + hours + ":" + minutes;
  // return dd + "-" + mm + "-" + yyyy;
};

export const toDatetimeLocal = (time) => {
  const date = new Date(time),
    ten = (i) => (i < 10 ? "0" : "") + i,
    YYYY = date.getUTCFullYear(),
    MTH = ten(date.getUTCMonth() + 1),
    DAY = ten(date.getUTCDate()),
    HH = ten(date.getUTCHours()),
    MM = ten(date.getUTCMinutes()),
    SS = ten(date.getUTCSeconds());
  // MS = ten(date.getMilliseconds())

  return `${YYYY}-${MTH}-${DAY}T${HH}:${MM}:${SS}`;
};
