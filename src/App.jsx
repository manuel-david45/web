import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NewsDetail from "./news-detail"; // Assurez-vous que ce chemin est correct
import Nav from "./nav";
import Header from "./header";
import NewListing from "./New-listing";
import Donate from "../Donate";

export default function App() {
  return (
    <Router>
      <div>
        <Header ClnmHead="site-header" Clnm1D="container" Clnm2D="row" />
        <Nav
          NClass="navbar navbar-expand-lg bg-light shadow-lg"
          dClass="container"
          dClass2="collapse navbar-collapse"
          dID="navbarNav"
          ULCLass="navbar-nav ms-auto"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news-detail" element={<NewsDetail />} />
          <Route path="/New-listing" element={<NewListing />} />
          <Route path="/Donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}
