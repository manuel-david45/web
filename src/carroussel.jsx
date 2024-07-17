import React from "react";
import { Carroselle } from "./compinents";
import { Button } from "./button";

export default function Carroussel({}) {
  return (
    <section className="hero-section hero-section-full-height">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12 p-0">
            <div
              id="hero-slide"
              className="carousel carousel-fade slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <Carroselle
                  SRc="../images/slide/volunteer-helping-with-donation-box.jpg"
                  Alt="..."
                  hText="lorem ipsum"
                  PText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <Carroselle
                  SRc="../images/slide/medium-shot-people-collecting-donations.jpg"
                  Alt="..."
                  hText="Humanity"
                  PText="lorem ipsum etat question is best"
                />
                <Carroselle
                  SRc="../images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                  Alt="..."
                  hText="🙋‍♂️ hello "
                  PText="how are you man"
                />
              </div>
              <Button
                classe="carousel-control-prev"
                typo="button"
                datBtarge="#hero-slide"
                dataBSlide="prev"
                SClass="carousel-control-prev-icon"
                ariaHidden="true"
                SClass2="visually-hidden"
                text="Previous"
              ></Button>
              <Button
                classe="carousel-control-next"
                typo="button"
                datBtarge="#hero-slide"
                dataBSlide="next"
                SClass="carousel-control-next-icon"
                ariaHidden="true"
                SClass2="visually-hidden"
                text="Next"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
