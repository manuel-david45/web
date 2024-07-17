import React from "react";

import Carroussel from "./carroussel.jsx";
import SectionOne from "./sectionOne.jsx";
import SectionTwo from "./sectiontwo.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import SectionFive from "./SectionFive.jsx";
import Section6 from "./section6.jsx";
import { Footer } from "./footer.jsx";

export default function Home() {
  return (
    <div>
      <main>
        <Carroussel></Carroussel>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <Section3></Section3>
        <Section4
          p="Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based"
          h2="vonlentier"
          h3="lorem ipsum"
          h4="lorem ipsum"
        ></Section4>
        <SectionFive></SectionFive>
        <Section6></Section6>
      </main>
      <Footer></Footer>
    </div>
  );
}
