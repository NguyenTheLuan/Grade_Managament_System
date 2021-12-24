import accountAPi from "apis/authApi";
import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isLogin, isPending } from "reducers/authSlice";

function SocialGoogleLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResponse = async (response) => {
    // Get access token after login google API
    const { accessToken } = response;
    // console.log("lấy được access token", accessToken);
    await loginWithGoogle(accessToken);
  };

  const loginWithGoogle = async (accessToken) => {
    //Loading pending
    dispatch(isPending());
    const params = { access_token: accessToken };
    try {
      const response = await accountAPi.loginGoogle(params);
      const { token, refreshToken, role } = response;

      //Save in local storage
      localStorage.setItem("access_token", JSON.stringify(token));
      localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
      //save in redux, loading success
      dispatch(isLogin(role));
      localStorage.setItem("role", JSON.stringify(role));

      // //Redirect to role page
      // redirectRoute(role);

      toast.success("Đăng nhập thành công", { position: "bottom-right" });
    } catch (error) {
      console.log("đăng nhập lỗi", { error });
    }
  };

  // const redirectRoute = (role) => {
  //   navigate(`/${role}`);
  // };

  return (
    <GoogleLogin
      className="googleBtn"
      clientId="294692584033-tf9mp1jfvpbrv59ih98q8nf6ol12qabi.apps.googleusercontent.com"
      buttonText="Đăng nhập bằng Gmail"
      onSuccess={handleResponse}
      onFailure={handleResponse}
      cookiePolicy="single_host_origin"
    />
  );
}

export default SocialGoogleLogin;
