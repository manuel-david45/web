import React from "react";
import { Link } from "react-router-dom";

export function Headleft({
  Chd,
  Firstchild,
  Secondchild,
  pChild1,
  pChild2,
  Href,
  text,
  direct,
}) {
  return (
    <div className={Chd}>
      <p className={Firstchild}>
        <i className={pChild1}></i>
        {text}
      </p>
      <p className={Secondchild}>
        <i className={pChild2}></i>
        <a href={Href}>{direct}</a>
      </p>
    </div>
  );
}

export function Headright({ Firstchild, Href, LChld, direct }) {
  return (
    <li className={Firstchild}>
      <Link to={Href} className={LChld}>
        {direct}
      </Link>
    </li>
  );
}
export function Headright2({ Firstchild, Href, LChld, direct }) {
  return (
    <li className={Firstchild}>
      <a href={Href} className={LChld}>
        {direct}
      </a>
    </li>
  );
}
export function Carroselle({ SRc, Alt, hText, PText }) {
  return (
    <div className="carousel-item active">
      <img src={SRc} alt={Alt} className="carousel-image img-fluid" />
      <div className="carousel-caption d-flex flex-column justify-content-end">
        <h1>{hText}</h1>
        <p>{PText}</p>
      </div>
    </div>
  );
}
export function FirstSection({ DClass, Src, Alt, text, bold }) {
  return (
    <div className={DClass}>
      <div className="featured-block d-flex justify-content-center align-items-center">
        <a href="#" className="d-block">
          <img src={Src} alt={Alt} className="featured-block-image img-fluid" />
          <p className="featured-block-text">
            {text} <strong>{bold}</strong>
          </p>
        </a>
      </div>
    </div>
  );
}
export function Story({
  DClass,
  TClass,
  title,
  smallTitle,
  STClass,
  PClass,
  paragraph,
  text1,
  text2,
  lCL,
  iCl,
  aff,
}) {
  return (
    <div className={DClass}>
      <h2 className={TClass}>{title}</h2>
      <h5 className={STClass}>{smallTitle}</h5>
      <p className={PClass}>{paragraph}</p>
      {aff ? (
        <ul className="custom-list mt-2">
          <li className={lCL}>
            <i className={iCl}></i>
            {text1}
          </li>
          <li className={lCL}>
            <i className={iCl}></i>
            {text2}
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
export function DivS({ DClass, DataTo, Stext1, Stext2 }) {
  return (
    <div className={DClass}>
      <div className="d-flex">
        <span
          className="counter-number"
          data-from="1"
          data-to={DataTo}
          data-speed="1000"
        ></span>
        <span className="counter-number-text">{Stext1}</span>
      </div>
      <span className="counter-text">{Stext2}</span>
    </div>
  );
}

export function SectionChild({
  tH2,
  para,
  para1,
  para2,
  text,
  text2,
  link,
  link2,
}) {
  return (
    <>
      <section className="about-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <img
                src="../images/portrait-volunteer-who-organized-donations-charity.jpg"
                alt="..."
                className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
              />
              Name
            </div>
            <div className="col-lg-5 col-md-7 col-12">
              <div className="custom-text-block">
                <h2 className="mb-0">{tH2}</h2>

                <p className="text-muted mb-lg-4 mb-md-4">{para}</p>

                <p>{para1}</p>

                <p>{para2}</p>
                <ul>
                  <Headright
                    Firstchild="social-icon-item"
                    Href="#"
                    LChld="social-icon-link bi-twitter"
                  />
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section section-padding section-bg">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-12 ms-auto">
              <h2 className="mb-0">
                {text} <br />
                {text2}
              </h2>
            </div>

            <div className="col-lg-5 col-12">
              <a href="#" className="me-4">
                {link}
              </a>

              <a href="#section_4" className="custom-btn btn smoothscroll">
                {link2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SmallSection3({
  DClass,
  Src,
  texth5,
  paragraph,
  tStrong,
  numb,
  numb2,
  num,
  DClass2,
  tStrong2,
}) {
  return (
    <>
      <div className={DClass}>
        <div className="custom-block-wrap">
          <img src={Src} className="custom-block-image img-fluid" alt="" />

          <div className="custom-block">
            <div className="custom-block-body">
              <h5 className="mb-3">{texth5}</h5>

              <p>{paragraph}</p>

              <div className="progress mt-4">
                <div
                  className={DClass2}
                  role="progressbar"
                  aria-valuenow={num}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="d-flex align-items-center my-2">
                <p className="mb-0">
                  <strong>{tStrong}</strong>
                  {numb}
                </p>

                <p className="ms-auto mb-0">
                  <strong>{tStrong2}</strong>
                  {numb2}
                </p>
              </div>
            </div>

            <a href="donate.html" className="custom-btn btn">
              Donate now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function SmalSection4({ div, type, id, placeholder, tel, pattern }) {
  return (
    <>
      <div className={div}>
        <input
          type={type}
          className="form-control"
          pattern={pattern}
          id={id}
          name={id}
          placeholder={placeholder}
          required
        />

        {tel ? (
          <>
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Upload your CV
            </label>

            <i className="bi-cloud-arrow-up ms-auto"></i>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export function Sction({ div, i, para, opt }) {
  return (
    <>
      <div className={div}>
        <p>
          {opt ? <i className={i}></i> : ""}
          {para}
        </p>
      </div>
    </>
  );
}

export function Sction5({ Href, aclass, tt, tvf, span }) {
  return (
    <>
      <a href={Href} className={aclass}>
        {tt}
        {tvf ? <span className="badge">{span}</span> : ""}
      </a>
    </>
  );
}

export function Sction52({ dclas, sptext, smText }) {
  return (
    <>
      <div className={dclas}>
        <div className="carousel-caption">
          <h4 className="carousel-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio
            harum repellat sit quaerat.
          </h4>
          <small className="carousel-name">
            <span className="carousel-name-title">{sptext}</span>,{smText}
          </small>
        </div>
      </div>
    </>
  );
}

export function Sction522({ liCls, dtbs, Src }) {
  return (
    <>
      <li
        data-bs-target="#testimonial-carousel"
        className={liCls}
        data-bs-slide-to={dtbs}
      >
        <img
          src={Src}
          alt="..."
          className="img-fluid rounded-circle avatar-image"
        />
      </li>
    </>
  );
}

export function Footr({ para, clas, aclas }) {
  return (
    <li className={clas}>
      <a href="#" className={aclas}>
        {para}
      </a>
    </li>
  );
}

export function Fotr({ pcls, icls, text, as, para }) {
  return (
    <p className={pcls}>
      <i className={icls}></i>
      {as ? (
        <a href="" className="site-footer-link">
          {para}
        </a>
      ) : (
        ""
      )}
      {text}
    </p>
  );
}
