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
//CheckActive
export const checkActive = (status) => {
  return status ? "Đang mở" : "Đã khóa";
};
//render Date
export const renderDate = (time) => {
  const date = new Date(time);
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0");
  //January is 0!
  var yyyy = date.getFullYear();

  // //time
  // var minutes = ("0" + date.getMinutes()).slice(-2);
  // var hours = ("0" + date.getHours()).slice(-2);

  // return dd + "/" + mm + "/" + yyyy + " lúc " + hours + ":" + minutes;
  return dd + "-" + mm + "-" + yyyy;
};

export const toDatetimeLocal = (time) => {
  const date = new Date(time),
    ten = (i) => (i < 10 ? "0" : "") + i,
    YYYY = date.getFullYear(),
    MTH = ten(date.getMonth() + 1),
    DAY = ten(date.getDate()),
    HH = ten(date.getHours()),
    MM = ten(date.getMinutes()),
    SS = ten(date.getSeconds());
  // MS = ten(date.getMilliseconds())

  return `${YYYY}-${MTH}-${DAY}T${HH}:${MM}:${SS}`;
};
