import React from "react";
import { SmalSection4 } from "./compinents";

export default function Section4({ p, h2, h3, h4 }) {
  return (
    <section className="volunteer-section section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="text-white mb-4">{h2}</h2>

            <form
              className="custom-form volunteer-form mb-5 mb-lg-0"
              action="#"
              method="post"
              role="form"
            >
              <h3 className="mb-4">{h3}</h3>

              <div className="row">
                <SmalSection4
                  div="col-lg-6 col-12"
                  type="text"
                  id="volunteer-name"
                  placeholder="Jack Doe"
                  tel=""
                ></SmalSection4>
                <SmalSection4
                  div="col-lg-6 col-12"
                  type="email"
                  id="volunteer-email"
                  placeholder="Jackdoe@gmail.com"
                  tel=""
                  pattern="[^ @]*@[^ @]*"
                ></SmalSection4>
                <SmalSection4
                  div="col-lg-6 col-12"
                  type="text"
                  id="volunteer-subject"
                  placeholder="Subject"
                  tel=""
                ></SmalSection4>
                <div className="col-lg-6 col-12">
                  <SmalSection4
                    div="input-group input-group-file"
                    type="file"
                    id="inputGroupFile02"
                    tel="true"
                  ></SmalSection4>
                </div>
              </div>
              <textarea
                name="volunteer-message"
                rows="3"
                className="form-control"
                id="volunteer-message"
                placeholder="Comment (Optional)"
              ></textarea>

              <button type="submit" className="form-control">
                envoyer
              </button>
            </form>
          </div>

          <div className="col-lg-6 col-12">
            <img
              src="../images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg"
              className="volunteer-image img-fluid"
              alt=""
            />

            <div className="custom-block-body text-center">
              <h4 className="text-white mt-lg-3 mb-lg-3">{h4}</h4>

              <p className="text-white">{p}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
