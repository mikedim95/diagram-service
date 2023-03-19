import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import RegisterConfirmation from "./pages/RegisterConfirmation";
import Profile from "./pages/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route path="/mycharts" element={<Home />} />
        <Route path="*" element={<Navigate to="/mycharts" />} />
        <Route path="/mycharts/about" element={<About />} />
        <Route path="/mycharts/profile" element={<Profile />} />
        <Route
          path="/mycharts/registerconfirmation"
          element={<RegisterConfirmation />}
        />
        {/* <Route path="/intelliq_api/FillingPage" element={<FillingPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
