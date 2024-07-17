import React from "react";
import { Sction } from "./compinents";
import { Sction5 } from "./compinents";
import { Sction52 } from "./compinents";
import { Sction522 } from "./compinents";

export default function SectionFive({}) {
  return (
    <>
      <section className="news-section section-padding" id="section_5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 mb-5">
              <h2>Latest News</h2>
            </div>

            <div className="col-lg-7 col-12">
              <div className="news-block">
                <div className="news-block-top">
                  <a href="news-detail.html">
                    <img
                      src="../images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                      className="news-image img-fluid"
                      alt=""
                    />
                  </a>

                  <div className="news-category-block">
                    <Sction5
                      aclass="category-block-link"
                      tt="lorem,"
                      Href="#"
                    />
                    <Sction5
                      aclass="category-block-link"
                      tt="lorem ipsum"
                      Href="#"
                    />
                  </div>
                </div>
                <div className="news-block-info">
                  <div className="d-flex mt-2">
                    <Sction
                      div="news-block-date"
                      opt="true"
                      i="bi-calendar4 custom-icon me-1"
                      para="October 12, 2036"
                    />
                    <Sction
                      div="news-block-author mx-5"
                      opt="true"
                      i="bi-person custom-icon me-1"
                      para="By Admin"
                    ></Sction>
                    <Sction
                      div="news-block-comment"
                      opt="true"
                      i="bi-chat-left custom-icon me-1"
                      para="32 Comments"
                    ></Sction>
                  </div>
                  <div className="news-block-title mb-2">
                    <h4>
                      <Sction5
                        Href="#"
                        aclass="news-block-title-link"
                        tt="Clothing donation to urban area"
                      ></Sction5>
                    </h4>
                  </div>
                  <Sction
                    div="news-block-body"
                    para="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan  omeg kohm tokito Professional charity theme based on Bootstrap"
                  ></Sction>
                </div>
              </div>
              <div className="news-block mt-3">
                <div className="news-block-top">
                  <a href="news-detail.html">
                    <img
                      src="../images/news/medium-shot-people-collecting-foodstuff.jpg"
                      className="news-image img-fluid"
                      alt=""
                    />
                  </a>

                  <div className="news-category-block">
                    <Sction5
                      Href="#"
                      aclass="category-block-link"
                      tt="Food"
                    ></Sction5>
                    <Sction5
                      Href="#"
                      aclass="category-block-link"
                      tt="Donation"
                    ></Sction5>
                    <Sction5
                      Href="#"
                      aclass="category-block-link"
                      tt="Caring"
                    ></Sction5>
                  </div>
                </div>
                <div className="news-block-info">
                  <div className="d-flex mt-2">
                    <Sction
                      div="news-block-date"
                      opt="true"
                      i="bi-calendar4 custom-icon me-1"
                      para="October 20, 2036"
                    ></Sction>
                    <Sction
                      div="news-block-author mx-5"
                      opt="true"
                      i="bi-person custom-icon me-1"
                      para="By Admin"
                    ></Sction>
                    <Sction
                      div="news-block-comment"
                      opt="true"
                      i="bi-chat-left custom-icon me-1"
                      para="35 Comments"
                    ></Sction>
                  </div>
                  <div className="news-block-title mb-2">
                    <h4>
                      <Sction5
                        Href="#"
                        aclass="news-block-title-link"
                        tt="Food donation area"
                      ></Sction5>
                    </h4>
                  </div>
                  <Sction
                    div="news-block-body"
                    para="Sed leo nisl, posuere at molestie ac, suscipit auctor  mauris. Etiam quis metus elementum, tempor risus vel,condimentum orci"
                  ></Sction>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mx-auto">
              <form
                className="custom-form search-form"
                action="#"
                method="get"
                role="form"
              >
                <input
                  name="search"
                  type="search"
                  className="form-control"
                  id="search"
                  placeholder="Search"
                  aria-label="Search"
                />

                <button type="submit" className="form-control">
                  <i className="bi-search"></i>
                </button>
              </form>

              <h5 className="mt-5 mb-3">Recent news</h5>

              <div className="news-block news-block-two-col d-flex mt-4">
                <div className="news-block-two-col-image-wrap">
                  <a href="#">
                    <img
                      src="../images/news/africa-humanitarian-aid-doctor.jpg"
                      className="news-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="news-block-two-col-info">
                  <div className="news-block-title mb-2">
                    <h6>
                      <Sction5
                        Href="#"
                        aclass="news-block-title-link"
                        tt="Food donation area"
                      ></Sction5>
                    </h6>
                  </div>
                  <Sction
                    div="news-block-date"
                    opt="true"
                    i="bi-calendar4 custom-icon me-1"
                    para="October 16, 2036"
                  ></Sction>
                </div>
              </div>
              <div className="category-block d-flex flex-column">
                <h5 className="mb-3">Categories</h5>
                <Sction5
                  Href="#"
                  aclass="category-block-link"
                  tvf="true"
                  span="20"
                  tt="Drinking water"
                ></Sction5>
                <Sction5
                  Href="#"
                  aclass="category-block-link"
                  tvf="true"
                  span="30"
                  tt="Food Donation"
                ></Sction5>
                <Sction5
                  Href="#"
                  aclass="category-block-link"
                  tvf="true"
                  span="10"
                  tt="Children Education"
                ></Sction5>
                <Sction5
                  Href="#"
                  aclass="category-block-link"
                  tvf="true"
                  span="15"
                  tt="poverty Development"
                ></Sction5>
                <Sction5
                  Href="#"
                  aclass="category-block-link"
                  tvf="true"
                  span="20"
                  tt="Clothing Donation"
                ></Sction5>
              </div>
              <div className="tags-block">
                <h5 className="mb-3">Tags</h5>
                <Sction5
                  Href="#"
                  aclass="tags-block-link"
                  tt="Donation"
                ></Sction5>
                <Sction5
                  Href="#"
                  aclass="tags-block-link"
                  tt="Clothing"
                ></Sction5>
                <Sction5 Href="#" aclass="tags-block-link" tt="Food"></Sction5>
                <Sction5
                  Href="#"
                  aclass="tags-block-link"
                  tt="Children"
                ></Sction5>
                <Sction5
                  Href="#"
                  aclass="tags-block-link"
                  tt="Education"
                ></Sction5>
                <Sction5
                  Href="#"
                  aclass="tags-block-link"
                  tt="Poverty"
                ></Sction5>
                <Sction5
                  Href="#"
                  aclass="tags-block-link"
                  tt="Clean water"
                ></Sction5>
              </div>
              <form
                className="custom-form subscribe-form"
                action="#"
                method="get"
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
                />

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
      <section className="testimonial-section section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <h2 className="mb-lg-3">Happy Customers</h2>

              <div
                id="testimonial-carousel"
                className="carousel carousel-fade slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <Sction52
                    dclas="carousel-item active"
                    sptext="Maria"
                    smText="Boss"
                  ></Sction52>
                  <Sction52
                    dclas="carousel-item"
                    sptext="Thomas"
                    smText="Partner"
                  ></Sction52>
                  <Sction52
                    dclas="carousel-item"
                    sptext="Jane"
                    smText="Advisor"
                  ></Sction52>
                  <Sction52
                    dclas="carousel-item"
                    sptext="Bob"
                    smText="Entreprenuer"
                  ></Sction52>
                  <ol className="carousel-indicators">
                    <Sction522
                      liCls="active"
                      dtbs="0"
                      Src="../images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                    ></Sction522>
                    <Sction522
                      dtbs="1"
                      Src="../images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
                    ></Sction522>
                    <Sction522
                      dtbs="2"
                      Src="../images/avatar/studio-portrait-emotional-happy-funny.jpg"
                    ></Sction522>
                    <Sction522
                      dtbs="3"
                      Src="../images/avatar/portrait-young-redhead-bearded-male.jpg"
                    ></Sction522>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
