import React from "react";
import ReactDOM from "react-dom";

import App from "./features/App/App";
//For react toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Style css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

//redux,redux toolkit
import { Provider } from "react-redux";
import store from "reducers/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
