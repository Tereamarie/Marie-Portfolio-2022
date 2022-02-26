import React from "react";

const Experience = () => {
  return (
    <section className="colorlib-experience" data-section="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Experience</span>
            <h2 className="colorlib-heading animate-box">Work Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-1">
                    <i className="icon-pen2" />
                  </div>
                  <div className="timeline-label">
                    <h2>
                      <a href=".">Back-end Developer</a>{" "}
                      <span className="jobplace">
                        Underdog Devs, at Bloom Technology Insitute{" "}
                      </span>
                      <br />
                      <span className="jobplace">11/2021-12/2021</span>
                    </h2>

                    <div>
                      <div className="work-header">Responsibilities:</div>
                      <ul>
                        <li>
                          Greenfield application developed for Underdog Devs to
                          manage their mentor-to-mentee relationships and
                          interactions, as well as make for more efficient
                          resource management.
                        </li>
                        <li>
                          Enhanced data importing, cleaning process along with
                          troubleshooting. Worked with a team of Back-End
                          developers to implement a Postgres database to manage
                          our application’s ticketing system.
                        </li>
                        <li>
                          Designed and implemented a Node.js/Express API, and
                          constructed database models to perform CRUD operations
                          on the Postgres database.
                        </li>
                        <li>
                          Assisted with debugging procedures via pair
                          programming in an Agile remote engineering
                          environment.
                        </li>
                        <li>
                          Applied version control software (Git) to track, test
                          and update pre-existing source code.
                        </li>
                      </ul>
                      <div className="work-header">Key Achievements:</div>
                      <ul>
                        <li>
                          Optimized user experience by 65% using Data
                          Visualization techniques.{" "}
                        </li>
                      </ul>
                      <div className="work-header">Technology:</div>
                      <button className="btn btn-success cursor-none">
                        PostgresSQL
                      </button>
                      <button className="btn btn-success cursor-none">
                        Javascript/ES6
                      </button>
                      <button className="btn btn-success cursor-none">
                        Bootstrap
                      </button>
                      <button className="btn btn-success cursor-none">
                        React
                      </button>
                      <button className="btn btn-success cursor-none">
                        Git
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-2">
                    <i className="icon-pen2" />
                  </div>
                  <div className="timeline-label">
                    <h2>
                      <a href=".">Full Stack Developer</a>{" "}
                      <span className="jobplace">
                        React Testing Contact Form
                      </span>
                      <br />
                      <span className="jobplace">7/2020-8/2020</span>
                    </h2>
                    <div>
                      <div className="work-header">Responsibilities:</div>
                      <ul>
                        <li>
                          Implemented custom features, filters. Example of
                          ability to write code tests in React Testing Library
                          to efficiently test front-end user operations and
                          provide clear quality of data.
                        </li>
                        <li>
                          Wrote appropriate code tests to ensure that contact
                          form is not only operational and pre-filled but
                          functions with user input as expected.
                        </li>
                        <li>
                          Work closely with product team members to design and
                          develop a SaaS application
                        </li>
                        <li>
                          Gained an understanding of Test Driven Development
                          through this project.
                        </li>
                      </ul>
                      <div className="work-header">Key Achievements:</div>
                      <ul>
                        <li>
                          Reduced repetitive data entry and storage inventory.{" "}
                        </li>
                      </ul>
                      <div className="work-header">Technology:</div>
                      <button className="btn btn-success cursor-none">
                        React.js
                      </button>
                      <button className="btn btn-success cursor-none">
                        Javascript
                      </button>
                      <button className="btn btn-success cursor-none">
                        React-testing-Library
                      </button>
                      <button className="btn btn-success cursor-none">
                        Bootstrap
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              {/* <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-3">
                    <i className="icon-pen2" />
                  </div>
                  <div className="timeline-label">
                    <h2>
                      <a href=".">Developer</a>{" "}
                      <span className="jobplace">BiztechCS</span>
                      <br />
                      <span className="jobplace">2015-2017</span>
                    </h2>
                    <div>
                      <div className="work-header">Responsibilities:</div>
                      <ul>
                        <li>
                          Worked on various software development applications in
                          all layers, from the initial specification, through to
                          developing, testing and launching.
                        </li>
                        <li>
                          Liaised with Product Manager, Program Manager,
                          Software Engineer, Quality Assurance testers in
                          identifying software problems, testing methods, and
                          best solutions.
                        </li>
                        <li>
                          Created dynamic employee Leave/Salary management
                          system, Bug tracker, Project status tools, automated
                          appraisal software, Punch-In/Out application etc.
                        </li>
                        <li>
                          Implemented and managed web plug-ins like “SugarCRM
                          Customer Portal Pro” (data integration connector
                          between SugarCRM and Word Press) and “Dynamic CRM
                          Customer Portal Pro”.
                        </li>
                        <li>
                          Drove continual improvement to existing system
                          architecture by refactoring old legacy code and
                          developed AJAX and JSON routines in jQuery to populate
                          jQGrid user interfaces.
                        </li>
                        <li>
                          Responsible for maintaining versions of source code
                          using GitHub.{" "}
                        </li>
                      </ul>
                      <div className="work-header">Key Achievements:</div>
                      <ul>
                        <li>
                          Increased almost 100+ employee’s productivity by
                          integrating employee daily evaluation with task and
                          appraisal management bundled software.
                        </li>
                        <li>
                          Drove best practice implementation for 80+ employees
                          across multiple departments. Decreased rework by 23%
                          and costs by 15% by creating Bug tracker and Project
                          status tools.
                        </li>
                      </ul>
                      <div className="work-header">Technology:</div>
                      <button className="btn btn-success cursor-none">
                        PHP/MYSQL
                      </button>
                      <button className="btn btn-success cursor-none">
                        Wordpress
                      </button>
                      <button className="btn btn-success cursor-none">
                        AJAX/jQuery
                      </button>
                      <button className="btn btn-success cursor-none">
                        HTML5/CSS3
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-4">
                    <i className="icon-pen2" />
                  </div>
                  <div className="timeline-label">
                    <h2>
                      <a href=".">Web Intern</a>{" "}
                      <span className="jobplace">X-mx Solutions</span>
                      <br />
                      <span className="jobplace">2014</span>
                    </h2>
                    <div>
                      <div className="work-header">Responsibilities:</div>
                      <ul>
                        <li>
                          Effectively worked with a small professional team to
                          design, implement and then thoroughly test large scale
                          web products coded primarily in PHP, SQL, JavaScript
                          and Flash ActionScript.
                        </li>
                        <li>
                          {" "}
                          Designed web pages and logos using Adobe Photoshop.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article> */}

              <article
                className="timeline-entry begin animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-none" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
