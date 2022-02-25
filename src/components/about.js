import React from "react";

const About = () => {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p>
                    <strong>Hi I'm Marie Knowlton-Hotchkiss</strong>{" "}
                    Hard-working web developer with a flair of developing,
                    testing and maintaining elegant, user-friendly web
                    applications in the least amount of time. Developed
                    ecommerce & Saas webapp, customer web portal and
                    fully-functional websites.
                  </p>
                  <p>
                    Well-organised person, self-taught learner with high
                    attention to detail. When I'm not coding, you'll find me
                    cooking, exploring places and hanging out with friends.
                  </p>
                  <p>
                    Interested in working on ambitious projects with positive
                    people.
                  </p>
                  <p>
                    Current Focus:
                    <span className="current-focus">
                      React-Redux // Responsive design // Javascript
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
