import React from "react";

export default function NewListing() {
  return (
    <>
      <main>
        <section className="news-detail-header-section text-center">
          <div className="section-overlay"></div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h1 className="text-white">News Listing</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="news-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="news-block">
                  <div className="news-block-top">
                    <a href="news-detail.html">
                      <img
                        src="images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                        className="news-image img-fluid"
                        alt=""
                      ></img>
                    </a>

                    <div className="news-category-block">
                      <a href="#" className="category-block-link">
                        Lifestyle,
                      </a>

                      <a href="#" className="category-block-link">
                        Clothing Donation
                      </a>
                    </div>
                  </div>

                  <div className="news-block-info">
                    <div className="d-flex mt-2">
                      <div className="news-block-date">
                        <p>
                          <i className="bi-calendar4 custom-icon me-1"></i>
                          October 18, 2036
                        </p>
                      </div>

                      <div className="news-block-author mx-5">
                        <p>
                          <i className="bi-person custom-icon me-1"></i>
                          By Admin
                        </p>
                      </div>

                      <div className="news-block-comment">
                        <p>
                          <i className="bi-chat-left custom-icon me-1"></i>
                          32 Comments
                        </p>
                      </div>
                    </div>

                    <div className="news-block-title mb-2">
                      <h4>
                        <a
                          href="news-detail.html"
                          className="news-block-title-link"
                        >
                          Clothing donation to urban area
                        </a>
                      </h4>
                    </div>

                    <div className="news-block-body">
                      <p>
                        This is a Bootstrap 5.2.2 CSS template for charity
                        organization websites. You can feel free to use it.
                        Please tell your friends about TemplateMo website. Thank
                        you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="news-block mt-3">
                  <div className="news-block-top">
                    <a href="news-detail.html">
                      <img
                        src="images/news/medium-shot-people-collecting-foodstuff.jpg"
                        className="news-image img-fluid"
                        alt=""
                      ></img>
                    </a>

                    <div className="news-category-block">
                      <a href="#" className="category-block-link">
                        Food,
                      </a>

                      <a href="#" className="category-block-link">
                        Donation,
                      </a>

                      <a href="#" className="category-block-link">
                        Caring
                      </a>
                    </div>
                  </div>

                  <div className="news-block-info">
                    <div className="d-flex mt-2">
                      <div className="news-block-date">
                        <p>
                          <i className="bi-calendar4 custom-icon me-1"></i>
                          October 12, 2036
                        </p>
                      </div>

                      <div className="news-block-author mx-5">
                        <p>
                          <i className="bi-person custom-icon me-1"></i>
                          By Admin
                        </p>
                      </div>

                      <div className="news-block-comment">
                        <p>
                          <i className="bi-chat-left custom-icon me-1"></i>
                          35 Comments
                        </p>
                      </div>
                    </div>

                    <div className="news-block-title mb-2">
                      <h4>
                        <a
                          href="news-detail.html"
                          className="news-block-title-link"
                        >
                          Food donation area
                        </a>
                      </h4>
                    </div>

                    <div className="news-block-body">
                      <p>
                        You are not allowed to redistribute this template ZIP
                        file on any other template collection website. Please{" "}
                        <a
                          href="https://templatemo.com/contact"
                          target="_blank"
                        >
                          contact TemplateMo
                        </a>{" "}
                        for more information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 mx-auto mt-4 mt-lg-0">
                <form
                  className="custom-form search-form"
                  action="#"
                  method="post"
                  role="form"
                >
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>

                  <button type="submit" className="form-control">
                    <i className="bi-search"></i>
                  </button>
                </form>

                <h5 className="mt-5 mb-3">Recent news</h5>

                <div className="news-block news-block-two-col d-flex mt-4">
                  <div className="news-block-two-col-image-wrap">
                    <a href="news-detail.html">
                      <img
                        src="images/news/africa-humanitarian-aid-doctor.jpg"
                        className="news-image img-fluid"
                        alt=""
                      ></img>
                    </a>
                  </div>

                  <div className="news-block-two-col-info">
                    <div className="news-block-title mb-2">
                      <h6>
                        <a
                          href="news-detail.html"
                          className="news-block-title-link"
                        >
                          Food donation area
                        </a>
                      </h6>
                    </div>

                    <div className="news-block-date">
                      <p>
                        <i className="bi-calendar4 custom-icon me-1"></i>
                        October 16, 2036
                      </p>
                    </div>
                  </div>
                </div>

                <div className="news-block news-block-two-col d-flex mt-4">
                  <div className="news-block-two-col-image-wrap">
                    <a href="news-detail.html">
                      <img
                        src="images/news/close-up-happy-people-working-together.jpg"
                        className="news-image img-fluid"
                        alt=""
                      ></img>
                    </a>
                  </div>

                  <div className="news-block-two-col-info">
                    <div className="news-block-title mb-2">
                      <h6>
                        <a
                          href="news-detail.html"
                          className="news-block-title-link"
                        >
                          Volunteering Clean
                        </a>
                      </h6>
                    </div>

                    <div className="news-block-date">
                      <p>
                        <i className="bi-calendar4 custom-icon me-1"></i>
                        October 24, 2036
                      </p>
                    </div>
                  </div>
                </div>

                <div className="category-block d-flex flex-column">
                  <h5 className="mb-3">Categories</h5>

                  <a href="#" className="category-block-link">
                    Drinking water
                    <span className="badge">20</span>
                  </a>

                  <a href="#" className="category-block-link">
                    Food Donation
                    <span className="badge">30</span>
                  </a>

                  <a href="#" className="category-block-link">
                    Children Education
                    <span className="badge">10</span>
                  </a>

                  <a href="#" className="category-block-link">
                    Poverty Development
                    <span className="badge">15</span>
                  </a>

                  <a href="#" className="category-block-link">
                    Clothing Donation
                    <span className="badge">20</span>
                  </a>
                </div>

                <div className="tags-block">
                  <h5 className="mb-3">Tags</h5>

                  <a href="#" className="tags-block-link">
                    Donation
                  </a>

                  <a href="#" className="tags-block-link">
                    Clothing
                  </a>

                  <a href="#" className="tags-block-link">
                    Food
                  </a>

                  <a href="#" className="tags-block-link">
                    Children
                  </a>

                  <a href="#" className="tags-block-link">
                    Education
                  </a>

                  <a href="#" className="tags-block-link">
                    Poverty
                  </a>

                  <a href="#" className="tags-block-link">
                    Clean Water
                  </a>
                </div>

                <form
                  className="custom-form subscribe-form"
                  action="#"
                  method="post"
                  role="form"
                >
                  <h5 className="mb-4">Newsletter Form</h5>

                  <input
                    type="email"
                    name="subscribe-email"
                    id="subscribe-email"
                    pattern="[^ @]*@[^ @]*"
                    class="form-control"
                    placeholder="Email Address"
                    required
                  ></input>

                  <div className="col-lg-12 col-12">
                    <button type="submit" className="form-control">
                      Subscribe
                    </button>
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
                src="images/logo.png"
                className="logo img-fluid"
                alt=""
              ></img>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <h5 className="site-footer-title mb-3">Quick Links</h5>

              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <a href="#" class="footer-menu-link">
                    Our Story
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a href="#" class="footer-menu-link">
                    Newsroom
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a href="#" class="footer-menu-link">
                    Causes
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a href="#" class="footer-menu-link">
                    Become a volunteer
                  </a>
                </li>

                <li className="footer-menu-item">
                  <a href="#" class="footer-menu-link">
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
                  href="mailto:info@yourgmail.com"
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
