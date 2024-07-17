import React from "react";
import { Story } from "./compinents";
import { DivS } from "./compinents";
import { SectionChild } from "./compinents";

export default function SectionTwo({}) {
  return (
    <>
      <section className="section-padding section-bg" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <img
                src="../images/group-people-volunteering-foodbank-poor-people.jpg"
                alt="..."
                className="custom-text-box-image img-fluid"
              />
            </div>
            <div className="col-lg-6 col-12">
              <Story
                aff=""
                DClass="custom-text-box"
                TClass="mb-2"
                title="our story"
                STClass="mb-3"
                smallTitle="Kind Heart Charity, Non-Profit Organization"
                PClass="mb-0"
                paragraph="c est bien d etre un enfant sage et respectueux vis a vis des parents "
              />
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <Story
                    aff="true"
                    DClass="custom-text-box mb-lg-0"
                    STClass="mb-3"
                    smallTitle="our Mission"
                    paragraph="Sed leo nisl, posuere at molestie ac, suscipit auctor quis
                      metus"
                    lCL="custom-list-item d-flex"
                    iCl="bi-check custom-text-box-icon me-2"
                    text1="lorem ipsum"
                    text2="lorem ipsum"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                    <DivS
                      DClass="counter-thumb"
                      DataTo="2009"
                      Stext2="Founded"
                    />
                    <DivS
                      DClass="counter-thumb mt-4"
                      DataTo="120"
                      Stext1="B"
                      Stext2="Donations"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionChild
        tH2="Sandy chan"
        para="Co-Founding Partner"
        para1="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                  kohm tokito Professional charity theme based"
        para2="You are not allowed to redistribute this template ZIP file on
                  any other template collection website. Please contact
                  TemplateMo for more information."
        text="Make an impact"
        text2="Save lives."
        link="Make a donation"
        link2="Become a volunteer"
      ></SectionChild>
    </>
  );
}
