import React from "react";
import { Button } from "./button.jsx";
import { NavbarFirst } from "./button.jsx";
import { Headright, Headright2 } from "./compinents.jsx";

export default function Nav({ NClass, dClass, dClass2, dID, ULCLass }) {
  return (
    <nav className={NClass}>
      <div className={dClass}>
        <NavbarFirst
          Href="index.html"
          classe="navbar-brand"
          Classe2="logo img-fluid"
          Alt="Kind Heart Charity"
          Src="..\images\logo.png"
        />
        <Button
          classe="navbar-toggler"
          typo="button"
          datBtoggl="collapse"
          datBtarge="#navbarNav"
          ariControl="navbarNav"
          ariExpande="false"
          ariLabe="Toggle navigation"
          SClass="navbar-toggler-icon"
        />
        <div className={dClass2} id={dID}>
          <ul className={ULCLass}>
            <Headright
              Firstchild="nav-item"
              Href="/"
              LChld="nav-link click-scroll"
              direct="Home"
            ></Headright>
            <Headright2
              Firstchild="nav-item"
              Href="#section_2"
              LChld="nav-link click-scroll"
              direct="About"
            ></Headright2>
            <Headright2
              Firstchild="nav-item"
              Href="#section_3"
              LChld="nav-link click-scroll"
              direct="Causes"
            ></Headright2>
            <Headright2
              Firstchild="nav-item"
              Href="#section_4"
              LChld="nav-link click-scroll"
              direct="Volunteer"
            ></Headright2>
            <li className="nav-item dropdown">
              <a
                href="#section_5"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="nav-link click-scroll dropdown-toggle"
              >
                News
              </a>
              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <Headright
                  Href="./New-listing"
                  LChld="dropdown-item"
                  direct="News Listing"
                ></Headright>
                <Headright
                  Href="./news-detail"
                  LChld="dropdown-item"
                  direct="News Detail"
                ></Headright>
              </ul>
            </li>
            <Headright2
              Firstchild="nav-item"
              LChld="nav-link click-scroll"
              Href="#section_6"
              direct="Contact"
            ></Headright2>
            <Headright
              Firstchild="nav-item ms-3"
              LChld="nav-link custom-btn custom-border-btn btn"
              Href="/Donate"
              direct="Donate"
            ></Headright>
          </ul>
        </div>
      </div>
    </nav>
  );
}
