import React from "react";

const Education = () => {
  return (
    <section className="colorlib-services" data-section="education">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading">Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center animate-box">
            <div className="services color-1">
              <div className="">
                <h3> Bloom Institute of Web Develpoment </h3>
                <span className=" btn btn-primary pull-left ">2019-2021</span>
                <p>
                  Database management and design, project management life cycle
                  practices and web applications development. Coursework in
                  Programming, web designing and practical laboratory
                  sessions.Prepared detailed reports and diagrams concerning
                  project specifications and analysis.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center animate-box">
            <div className="services color-5">
              <div className="">
                <h3>Free Code Camp</h3>
                <p>
                  <span className=" btn btn-success pull-left ">
                    2019-current
                  </span>
                  Coursework in Programming, web designing and practical
                  laboratory sessions.Prepared detailed reports and diagrams
                  concerning project specifications and analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
