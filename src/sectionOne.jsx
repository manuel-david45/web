import React from "react";
import { FirstSection } from "./compinents";

export default function SectionOne({}) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 text-center mx-auto">
            <h2 className="mb-5">Lorem ipsum dolor sit amet consectetur</h2>
          </div>
          <FirstSection
            DClass="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0"
            Src="../images/icons/hands.png"
            Alt="..."
            text="lorem"
            bold="ipsum"
          />
          <FirstSection
            DClass="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4"
            Src="../images/icons/heart.png"
            Alt="...."
            text="lorem"
            bold="ipsum"
          ></FirstSection>
          <FirstSection
            DClass="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4"
            Src="../images/icons/receive.png"
            Alt="...."
            text="lorem"
            bold="ipsum"
          ></FirstSection>
          <FirstSection
            DClass="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0"
            Src="../images/icons/scholarship.png"
            Alt="..."
            text="lorem"
            bold="ipsum"
          ></FirstSection>
        </div>
      </div>
    </section>
  );
}
