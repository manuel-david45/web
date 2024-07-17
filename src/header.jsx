import React, { Fragment } from "react";
import { Headleft } from "./compinents";
import { Headright } from "./compinents";

const Header = ({ ClnmHead, Clnm1D, Clnm2D }) => {
  return (
    <>
      <header className={ClnmHead}>
        <div className={Clnm1D}>
          <div className={Clnm2D}>
            <Headleft
              chd="col-lg-8 col-12 d-flex flex-wrap"
              Firstchild="d-flex me-4 mb-0"
              Secondchild="d-flex mb-0"
              pChild1="bi-geo-alt me-2"
              pChild2="bi-envelope me-2"
              Href="#"
              text="Akershusstranda 20, 0150 Oslo, Norway"
              direct="info@company.com"
            />
            <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
              <ul className="social-icon">
                <Headright
                  Firstchild="social-icon-item"
                  Href="#"
                  LChld="social-icon-link bi-twitter"
                ></Headright>
                <Headright
                  Firstchild="social-icon-item"
                  Href="#"
                  LChld="social-icon-link bi-facebook"
                ></Headright>
                <Headright
                  Firstchild="social-icon-item"
                  Href="#"
                  LChld="social-icon-link bi-instagram"
                ></Headright>
                <Headright
                  Firstchild="social-icon-item"
                  Href="#"
                  LChld="social-icon-link bi-youtube"
                ></Headright>
                <Headright
                  Firstchild="social-icon-item"
                  Href="#"
                  LChld="social-icon-link bi-whatsapp"
                ></Headright>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
