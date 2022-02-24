import React from "react";

const Skills = () => {
  return (
    <section className="colorlib-skills" data-section="skills">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Specialty</span>
            <h2 className="colorlib-heading animate-box">My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          />
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="progress-wrap">
              <h3>PHP</h3>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "65%" }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="progress-wrap">
              <h3>MySQL</h3>
              <div className="progress">
                <div
                  className="progress-bar color-2"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="progress-wrap">
              <h3>HTML5</h3>
              <div className="progress">
                <div
                  className="progress-bar color-3"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="progress-wrap">
              <h3>CSS3</h3>
              <div className="progress">
                <div
                  className="progress-bar color-4"
                  role="progressbar"
                  aria-valuenow={63}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "63%" }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="progress-wrap">
              <h3>Javascript/Jquery</h3>
              <div className="progress">
                <div
                  className="progress-bar color-5"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="progress-wrap">
              <h3>React</h3>
              <div className="progress">
                <div
                  className="progress-bar color-6"
                  role="progressbar"
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "30%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row" style={{ marginTop: 20 }}>
          <div
            className="col-md-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="services color-1">
              <span className="icon2 ">
                <i className="icon-code-outline" />
              </span>
              <h3 className="extra-skill">Saas/SCSS, Bootstrap</h3>
            </div>
          </div>
          <div
            className="col-md-3 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className="services color-2">
              <span className="icon2">
                <i className="icon-globe-outline" />
              </span>
              <h3 className="extra-skill"> Google Map API, Highcharts</h3>
            </div>
          </div>
          <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
            <div className="services color-3">
              <span className="icon2">
                <i className="icon-git" />
              </span>
              <h3 className="extra-skill">
                Git, <br />
                Bitbucket
              </h3>
            </div>
          </div>
          <div
            className="col-md-3 animate-box"
            data-animate-effect="fadeInBottom"
          >
            <div className="services color-4">
              <span className="icon2">
                <i className="icon-command2" />
              </span>
              <h3 className="extra-skill">
                React-Redux
                <br />
                React Hooks
                <br />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
