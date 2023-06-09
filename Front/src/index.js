import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import RegisterConfirmation from "./pages/RegisterConfirmation";
import Profile from "./pages/Profile";
import UserCharts from "./pages/UserCharts";
import DiagramCreator from "./pages/DiagramCreator";
import DiagramResult from "./pages/DiagramResult";
import Credits from "./pages/Credits";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/mycharts" element={<Home />} />
        <Route path="*" element={<Navigate to="/mycharts" />} />
        <Route path="/mycharts/about" element={<About />} />
        <Route path="/mycharts/profile" element={<Profile />} />
        <Route path="/mycharts/usercharts" element={<UserCharts />} />
        <Route path="/mycharts/diagramcreator" element={<DiagramCreator />} />
        <Route path="/mycharts/diagramresult" element={<DiagramResult />} />
        <Route path="/mycharts/credits" element={<Credits />} />
        <Route
          path="/mycharts/registerconfirmation"
          element={<RegisterConfirmation />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
