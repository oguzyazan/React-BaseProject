import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import Auth from "./layouts/Auth";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Auth />}>
            <Route path="/Auth/Login" exact element={<Login />} />
            <Route path="/Auth/Register" exact element={<Register />} />
            <Route path="*" element={<Navigate to="/Auth/Login" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
