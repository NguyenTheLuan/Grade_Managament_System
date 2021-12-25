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
          // exact={route.exact}
          index={route.index}
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
