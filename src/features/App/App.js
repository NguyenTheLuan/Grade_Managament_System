import PrivateRoute from "components/common/PrivateRoute";
import Header from "components/MainPage/Header/Header";
import Admin from "features/Admin/Admin";
import Auth from "features/Auth/Auth";
import ForgotPassword from "features/Auth/BasicLogin/ForgotPassword";
import Login from "features/Auth/BasicLogin/Login";
import Register from "features/Auth/BasicLogin/Register";
import HomePage from "features/HomePage/HomePage";
import NotFound from "features/HomePage/NotFound/NotFound";
import Student from "features/Student/Student";
import Teacher from "features/Teacher/Teacher";
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
    <BrowserRouter basename="">
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
          <Route path="/" element={<HomePage />} />
          <Route element={<PrivateRoute />}>
            {/* {renderRoutes()} */}
            <Route path="/student" element={<Student />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/teacher" element={<Teacher />} />
          </Route>

          {/* auth */}
          <Route element={<Auth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
          </Route>

          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
