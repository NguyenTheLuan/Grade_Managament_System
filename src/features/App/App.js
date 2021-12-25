import { renderRoute } from "components/common/CustomComponents";
import Header from "components/MainPage/Header/Header";
import { ADMIN_ROUTE, AUTH_ROUTE, TEACHER_ROUTE } from "constant";
//Route private
import AdminRoute from "features/Admin/AdminRoute";
import Auth from "features/Auth/Auth";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import StudentAuth from "features/Student/StudentAuth";
import StudentRoutes from "features/Student/StudentPage/StudentRoutes";
import TeacherRoute from "features/Teacher/TeacherRoute";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectLoading } from "reducers/authSlice";
import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(null);

  const loadingState = useSelector(selectLoading);

  useEffect(() => {
    setIsLoading(loadingState);
  }, [loadingState]);

  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        {isLoading && (
          <ReactLoading
            className="loading"
            type="spinningBubbles"
            color="violet"
            height={200}
            width={200}
          />
        )}
        <Routes>
          {/* Main routes */}
          {/* <Route path="/" element={<HomePage />} /> */}

          <Route element={<Auth />}>
            {/* Main routes */}
            <Route path="/" element={<HomePage />} />

            {/* auth */}
            {renderRoute(AUTH_ROUTE)}
          </Route>

          {/* student routes */}
          <Route element={<StudentAuth />}>
            {/* {renderRoute(STUDENT_ROUTE)} */}
            <Route path="/student/*" element={<StudentRoutes />} />
          </Route>

          {/* teacher routes */}
          <Route element={<TeacherRoute />}>{renderRoute(TEACHER_ROUTE)}</Route>

          {/* teacher routes */}
          <Route element={<AdminRoute />}>{renderRoute(ADMIN_ROUTE)}</Route>

          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
