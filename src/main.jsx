import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./header.jsx";
import Nav from "./nav.jsx";
import Carroussel from "./carroussel.jsx";
import SectionOne from "./sectionOne.jsx";
import SectionTwo from "./sectiontwo.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import SectionFive from "./SectionFive.jsx";
import Home from "./Home.jsx";
import Section6 from "./section6.jsx";
import { Footer } from "./footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
