import Header from "components/MainPage/Header/Header";
import AdminPage from "features/Admin/AdminPage/AdminPage";
import AdminRoute from "features/Admin/AdminRoute";
import Auth from "features/Auth/Auth";
import ForgotPassword from "features/Auth/BasicLogin/ForgotPassword";
import Login from "features/Auth/BasicLogin/Login";
import Register from "features/Auth/BasicLogin/Register";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import StudentPage from "features/Student/StudentPage/StudentPage";
import StudentRoute from "features/Student/StudentRoute";
import TeacherPage from "features/Teacher/TeacherPage/TeacherPage";
import TeacherRoute from "features/Teacher/TeacherRoute";
import { useEffect, useState } from "react";
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
  // const renderRoutes = () => {
  //   return MAIN_ROUTE.map((route, index) => {
  //     return <Route key={index} path={route.path} element={route.component} />;
  //   });
  // };

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
          <Route path="/" element={<HomePage />} />
          {/* <Route element={<PrivateRoute />}> */}
          {/* {renderRoutes()} */}
          {/* </Route> */}

          {/* auth */}
          <Route element={<Auth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
          </Route>

          {/* student routes */}
          <Route element={<StudentRoute />}>
            <Route path="/student" element={<StudentPage />} />
          </Route>

          {/* teacher routes */}
          <Route element={<TeacherRoute />}>
            <Route path="/teacher" element={<TeacherPage />} />
          </Route>

          {/* teacher routes */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
