import React from "react";
import { SmallSection3 } from "./compinents";

export default function Section3({}) {
  return (
    <section className="section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-4">
            <h2>Our Causes</h2>
          </div>
          <SmallSection3
            DClass="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
            Src="../images/causes/group-african-kids-paying-attention-class.jpg"
            texth5="lorem ipsum"
            paragraph="Lorem Ipsum dolor sit amet, consectetur adipsicing kenganomeg kohm tokito"
            DClass2="progress mt-4"
            num="75"
            tStrong="Raised:"
            numb="$18,500"
            tStrong2="Goal:"
            numb2="$32,000"
          />
          <SmallSection3
            DClass="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
            Src="../images/causes/poor-child-landfill-looks-forward-with-hope.jpg"
            texth5="lorem ipsum"
            paragraph="Sed leo nisl, posuere at molestie ac, suscipit auctor  mauris. Etiam quis metus tempor"
            DClass2="progress-bar w-50"
            num="50"
            tStrong="Raised:"
            numb="$27,600"
            tStrong2="Goal:"
            numb2="$60,000"
          ></SmallSection3>
          <SmallSection3
            DClass="col-lg-4 col-md-6 col-12"
            Src="../images/causes/african-woman-pouring-water-recipient-outdoors.jpg"
            texth5="lorem ipsum"
            paragraph="Orci varius natoque penatibus et magnis dis parturient  montes, nascetur ridiculus"
            DClass2="progress-bar w-100"
            num="100"
            tStrong="Raised:"
            numb="$84,600"
            tStrong2="Goal:"
            numb2="$100,000"
          ></SmallSection3>
        </div>
      </div>
    </section>
  );
}
