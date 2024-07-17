import React from "react";
import { Footr } from "./compinents";
import { Fotr } from "./compinents";

export function Footer({}) {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-4">
              <img src="images/logo.png" className="logo img-fluid" alt="" />
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <h5 className="site-footer-title mb-3">Quick Links</h5>

              <ul className="footer-menu">
                <Footr
                  clas="footer-menu-item"
                  aclas="footer-menu-link"
                  para="Our Story"
                ></Footr>
                <Footr
                  clas="footer-menu-item"
                  aclas="footer-menu-link"
                  para="causes"
                ></Footr>
                <Footr
                  clas="footer-menu-item"
                  aclas="footer-menu-link"
                  para="Become a volunteer"
                ></Footr>
                <Footr
                  clas="footer-menu-item"
                  aclas="footer-menu-link"
                  para="partner with us"
                ></Footr>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mx-auto">
              <h5 className="site-footer-title mb-3">Contact Infomation</h5>
              <Fotr
                pcls="text-white d-flex mb-2"
                icls="bi-telephone me-2"
                as="true"
                para="120-240-9600"
              />
              <Fotr
                pcls="text-white d-flex"
                icls="bi-telephone me-3"
                as="true"
                para="donate@charity.org"
              />
              <Fotr
                pcls="text-white d-flex mt-3"
                icls="bi-geo-alt me-2"
                para="Akershusstranda 20, 0150 Oslo, Norway"
              />
              <a href="#" className="custom-btn btn mt-3">
                Get Direction
              </a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 col-12">
                <p className="copyright-text mb-0">
                  Copyright © 2036 <a href="#">Kind Heart</a> Charity Org.
                  Design:
                  <a href="https://templatemo.com" target="_blank">
                    TemplateMo
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                <ul className="social-icon">
                  <Footr
                    clas="social-icon-item"
                    aclas="social-icon-link bi-twitter"
                  />
                  <Footr
                    clas="social-icon-item"
                    aclas="social-icon-link bi-facebook"
                  />
                  <Footr
                    clas="social-icon-item"
                    aclas="social-icon-link bi-instagram"
                  />
                  <Footr
                    clas="social-icon-item"
                    aclas="social-icon-link bi-linkedin"
                  />
                  <Footr
                    clas="social-icon-item"
                    aclas="social-icon-link bi-youtube"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
