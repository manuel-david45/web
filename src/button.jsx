import React from "react";
export function Button({
  classe,
  typo,
  datBtoggl,
  datBtarge,
  ariControl,
  ariExpande,
  ariLabe,
  SClass,
  ariaHidden,
  SClass2,
  text,
  dataBSlide,
}) {
  return (
    <button
      type={typo}
      data-bs-toggle={datBtoggl}
      data-bs-target={datBtarge}
      aria-controls={ariControl}
      aria-expanded={ariExpande}
      aria-label={ariLabe}
      data-bs-slide={dataBSlide}
      className={classe}
    >
      <span className={SClass} aria-hidden={ariaHidden}></span>
      <span className={SClass2}>{text}</span>
    </button>
  );
}

export function NavbarFirst({ classe, Href, Src, Classe2, Alt }) {
  return (
    <a href={Href} className={classe}>
      <img src={Src} alt={Alt} className={Classe2} />
      <span>
        Lorem ipsum dolor sit
        <small>Lorem ipsum dolor sit amet consectetur</small>
      </span>
    </a>
  );
}
