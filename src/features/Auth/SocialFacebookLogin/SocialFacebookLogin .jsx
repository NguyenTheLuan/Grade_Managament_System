import React from "react";
import FacebookLoginWithButton from "react-facebook-login";
function SocialFacebookLogin() {
  const facebookResponse = (status) => {
    console.log(status);
  };

  return (
    <FacebookLoginWithButton
      appId="1206715649505081"
      // autoLoad
      fields="name,email,picture"
      //onClick={componentClicked}
      callback={facebookResponse}
      textButton="Đăng nhập facebook"
      icon="fa-facebook"
    />
  );
}

export default SocialFacebookLogin;
