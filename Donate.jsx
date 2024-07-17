import React from "react";

export default function Donate() {
  return (
    <>
      <main>
        <section className="donate-section">
          <div className="section-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mx-auto">
                <form
                  className="custom-form donate-form"
                  action="#"
                  method="get"
                  role="form"
                >
                  <h3 className="mb-4">Make a donation</h3>

                  <div className="row">
                    <div className="col-lg-12 col-12">
                      <h5 className="mb-3">Donation Frequency</h5>
                    </div>

                    <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                      <div className="form-check form-check-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="DonationFrequency"
                          id="DonationFrequencyOne"
                          checked
                        ></input>

                        <label
                          className="form-check-label"
                          htmlFor="DonationFrequencyOne"
                        >
                          One Time
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                      <div className="form-check form-check-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="DonationFrequency"
                          id="DonationFrequencyMonthly"
                        ></input>

                        <label
                          className="form-check-label"
                          htmlFor="DonationFrequencyMonthly"
                        >
                          Monthly
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-12">
                      <h5 className="mt-2 mb-3">Select an amount</h5>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6 form-check-group">
                      <div className="form-check form-check-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          $10
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6 form-check-group">
                      <div className="form-check form-check-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          $15
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6 form-check-group">
                      <div className="form-check form-check-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          $20
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6 form-check-group">
                      <div className="form-check form-check-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault4"
                        >
                          $30
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6 form-check-group">
                      <div className="form-check form-check-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault5"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault5"
                        >
                          $45
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6 form-check-group">
                      <div className="form-check form-check-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault6"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault6"
                        >
                          $50
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12 form-check-group">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          $
                        </span>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Custom amount"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12 col-12">
                      <h5 className="mt-1">Personal Info</h5>
                    </div>

                    <div class="col-lg-6 col-12 mt-2">
                      <input
                        type="text"
                        name="donation-name"
                        id="donation-name"
                        className="form-control"
                        placeholder="Jack Doe"
                        required
                      ></input>
                    </div>

                    <div class="col-lg-6 col-12 mt-2">
                      <input
                        type="email"
                        name="donation-email"
                        id="donation-email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Jackdoe@gmail.com"
                        required
                      ></input>
                    </div>

                    <div className="col-lg-12 col-12">
                      <h5 className="mt-4 pt-1">Choose Payment</h5>
                    </div>

                    <div className="col-lg-12 col-12 mt-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="DonationPayment"
                          id="flexRadioDefault9"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault9"
                        >
                          <i className="bi-credit-card custom-icon ms-1"></i>
                          Debit or Credit card
                        </label>
                      </div>
                      Name
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="DonationPayment"
                          id="flexRadioDefault10"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault10"
                        >
                          Name
                          <i className="bi-paypal custom-icon ms-1"></i>
                          Paypal
                        </label>
                      </div>
                      <button type="submit" className="form-control mt-4">
                        Submit Donation
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-4">
              <img
                src="../images/logo.png"
                className="logo img-fluid"
                alt=""
              ></img>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <h5 className="site-footer-title mb-3">Quick Links</h5>

              <ul class="footer-menu">
                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">
                    Our Story
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">
                    Newsroom
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">
                    Causes
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">
                    Become a volunteer
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">
                    Partner with us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mx-auto">
              <h5 className="site-footer-title mb-3">Contact Infomation</h5>

              <p className="text-white d-flex mb-2">
                <i className="bi-telephone me-2"></i>

                <a href="tel: 120-240-9600" className="site-footer-link">
                  120-240-9600
                </a>
              </p>

              <p className="text-white d-flex">
                <i className="bi-envelope me-2"></i>

                <a
                  href="mailto:donate@charity.org"
                  className="site-footer-link"
                >
                  donate@charity.org
                </a>
              </p>

              <p className="text-white d-flex mt-3">
                <i className="bi-geo-alt me-2"></i>
                Akershusstranda 20, 0150 Oslo, Norway
              </p>

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
                  Design:{" "}
                  <a href="https://templatemo.com" target="_blank">
                    TemplateMo
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                <ul className="social-icon">
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-twitter"></a>
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-facebook"></a>
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-instagram"></a>
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-linkedin"></a>
                  </li>

                  <li className="social-icon-item">
                    <a
                      href="https://youtube.com/templatemo"
                      className="social-icon-link bi-youtube"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
