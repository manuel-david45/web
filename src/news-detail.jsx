import React from "react";

export default function NewsDetail() {
  return (
    <>
      <section className="news-detail-header-section text-center">
        <div className="section-overlay"></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h1 className="text-white">News Detail</h1>
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
                  <img
                    src="../images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                    className="news-image img-fluid"
                    alt=""
                  ></img>

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
                        48 Comments
                      </p>
                    </div>
                  </div>

                  <div className="news-block-title mb-2">
                    <h4>Clothing donation to urban area</h4>
                  </div>

                  <div className="news-block-body">
                    <p>
                      <strong>Lorem Ipsum</strong> dolor sit amet, consectetur
                      adipsicing kengan omeg kohm tokito Professional charity
                      theme based on Bootstrap
                    </p>

                    <p>
                      <strong>Sed leo</strong> nisl, This is a Bootstrap 5.2.2
                      CSS template for charity organization websites. You can
                      feel free to use it. Please tell your friends about
                      TemplateMo website. Thank you.
                    </p>

                    <blockquote>
                      Sed leo nisl, posuere at molestie ac, suscipit auctor
                      mauris. Etiam quis metus elementum, tempor risus vel,
                      condimentum orci.
                    </blockquote>
                  </div>

                  <div className="row mt-5 mb-4">
                    <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                      <img
                        src="../images/news/africa-humanitarian-aid-doctor.jpg"
                        className="news-detail-image img-fluid"
                        alt=""
                      ></img>
                    </div>

                    <div className="col-lg-6 col-12">
                      <img
                        src="../images/news/close-up-happy-people-working-together.jpg"
                        className="news-detail-image img-fluid"
                        alt=""
                      ></img>
                    </div>
                  </div>

                  <p>
                    You are not allowed to redistribute this template ZIP file
                    on any other template collection website. Please{" "}
                    <a href="https://templatemo.com/contact" target="_blank">
                      contact TemplateMo
                    </a>{" "}
                    for more information.
                  </p>

                  <div className="social-share border-top mt-5 py-4 d-flex flex-wrap align-items-center">
                    <div className="tags-block me-auto">
                      <a href="#" className="tags-block-link">
                        Donation
                      </a>

                      <a href="#" className="tags-block-link">
                        Clothing
                      </a>

                      <a href="#" className="tags-block-link">
                        Food
                      </a>
                    </div>

                    <div class="d-flex">
                      <a href="#" className="social-icon-link bi-facebook"></a>

                      <a href="#" className="social-icon-link bi-twitter"></a>

                      <a href="#" className="social-icon-link bi-printer"></a>

                      <a href="#" className="social-icon-link bi-envelope"></a>
                    </div>
                  </div>

                  <div className="author-comment d-flex mt-3 mb-4">
                    <img
                      src="../images/avatar/studio-portrait-emotional-happy-funny.jpg"
                      className="img-fluid avatar-image"
                      alt=""
                    ></img>

                    <div className="author-comment-info ms-3">
                      <h6 className="mb-1">Jack</h6>

                      <p className="mb-0">
                        Kind Heart Charity is the most supportive organization.
                        This is Bootstrap 5 HTML CSS template for everyone.
                        Thank you.
                      </p>

                      <div className="d-flex mt-2">
                        <a href="#" className="author-comment-link me-3">
                          Like
                        </a>

                        <a href="#" className="author-comment-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="author-comment d-flex ms-5 ps-3">
                    <img
                      src="../images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
                      className="img-fluid avatar-image"
                      alt=""
                    ></img>

                    <div className="author-comment-info ms-3">
                      <h6 className="mb-1">Daisy</h6>

                      <p className="mb-0">
                        Sed leo nisl, posuere at molestie ac, suscipit auctor
                        mauris. Etiam quis metus elementum, tempor risus vel,
                        condimentum orci
                      </p>

                      <div className="d-flex mt-2">
                        <a href="#" className="author-comment-link me-3">
                          Like
                        </a>

                        <a href="#" className="author-comment-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="author-comment d-flex mt-3 mb-4">
                    <img
                      src="../images/avatar/portrait-young-redhead-bearded-male.jpg"
                      className="img-fluid avatar-image"
                      alt=""
                    ></img>

                    <div className="author-comment-info ms-3">
                      <h6 className="mb-1">Wilson</h6>

                      <p className="mb-0">
                        Lorem Ipsum dolor sit amet, consectetur adipsicing
                        kengan omeg kohm tokito Professional charity theme based
                        on Bootstrap
                      </p>

                      <div className="d-flex mt-2">
                        <a href="#" className="author-comment-link me-3">
                          Like
                        </a>

                        <a href="#" className="author-comment-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>

                  <form
                    className="custom-form comment-form mt-4"
                    action="#"
                    method="post"
                    role="form"
                  >
                    <h6 className="mb-3">Write a comment</h6>

                    <textarea
                      name="comment-message"
                      rows="4"
                      className="form-control"
                      id="comment-message"
                      placeholder="Your comment here"
                    ></textarea>

                    <div className="col-lg-3 col-md-4 col-6 ms-auto">
                      <button type="submit" className="form-control">
                        Comment
                      </button>
                    </div>
                  </form>
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
                      src="../images/news/africa-humanitarian-aid-doctor.jpg"
                      className="news-image img-fluid"
                      alt=""
                    ></img>
                  </a>
                </div>

                <div className="news-block-two-col-info">
                  <div className="news-block-title mb-2">
                    <h6>
                      <a
                        href="news-detail.jsx"
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
                  <a href="news-detail.jsx">
                    <img
                      src="../images/news/close-up-happy-people-working-together.jpg"
                      className="news-image img-fluid"
                      alt=""
                    ></img>
                  </a>
                </div>

                <div className="news-block-two-col-info">
                  <div className="news-block-title mb-2">
                    <h6>
                      <a
                        href="news-detail.jsx"
                        className="news-block-title-link"
                      >
                        Volunteering Clean
                      </a>
                    </h6>
                  </div>

                  <div className="news-block-date">
                    <p>
                      <i className="bi-calendar4 custom-icon me-1"></i>
                      October 20, 2036
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
                  className="form-control"
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

      <section className="news-section section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 mb-4">
              <h2>Related news</h2>
            </div>

            <div className="col-lg-6 col-12">
              <div className="news-block">
                <div className="news-block-top">
                  <a href="news-detail.jsx">
                    <img
                      src="../images/news/medium-shot-volunteers-with-clothing-donations.jpg"
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
                        October 16, 2036
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
                        24 Comments
                      </p>
                    </div>
                  </div>

                  <div className="news-block-title mb-2">
                    <h4>
                      <a href="news-detail.jsx" class="news-block-title-link">
                        Clothing donation to urban area
                      </a>
                    </h4>
                  </div>

                  <div className="news-block-body">
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                      omeg kohm tokito Professional charity theme based on
                      Bootstrap
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="news-block">
                <div className="news-block-top">
                  <a href="news-detail.jsx">
                    <img
                      src="../images/news/medium-shot-people-collecting-foodstuff.jpg"
                      class="news-image img-fluid"
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
                        October 20, 2036
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
                        36 Comments
                      </p>
                    </div>
                  </div>

                  <div className="news-block-title mb-2">
                    <h4>
                      <a
                        href="news-detail.jsx"
                        className="news-block-title-link"
                      >
                        Food donation area
                      </a>
                    </h4>
                  </div>

                  <div className="news-block-body">
                    <p>
                      Sed leo nisl, posuere at molestie ac, suscipit auctor
                      mauris. Etiam quis metus elementum, tempor risus vel,
                      condimentum orci
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
