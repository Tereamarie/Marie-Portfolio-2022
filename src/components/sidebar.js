import React from "react";

const Sidebar = () => {
  return (
    <div>
      <nav
        href="#navbar"
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <i />
      </nav>
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div
            className="author-img"
            style={{ backgroundImage: "url(images/me.jpg)" }}
          />
          <h1 id="colorlib-logo">
            <a href="index.html">Marie Knowlton-Hotchkiss</a>
          </h1>
          <span className="position">Full Stack Web Developer</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active">
                <a href="#about" data-nav-section="about">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" data-nav-section="skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" data-nav-section="experience">
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  data-nav-section="work"
                  style={{ display: "none" }}
                >
                  My Work
                </a>
              </li>
              <li>
                <a href="#education" data-nav-section="education">
                  Education
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="colorlib-social-menu">
          <ul>
            <li>
              <a
                aria-label="Marie Knowlton-Hotchkiss"
                href="mailto:mtknowlton67@gmail.com"
                data-position="top"
                data-tooltip="Email Marie"
                className="btn-floating btn-large waves-effect waves-light brown tooltipped"
              >
                <div className="social-icon-div ">
                  <i className="icon-mail5 custom-social-icon " />
                </div>
              </a>
            </li>
            <li>
              <a
                aria-label="View Marie on LinkedIn"
                href="https://www.linkedin.com/in/marie-hotchkiss-201571190/"
                target="_blank"
                rel="noopener noreferrer"
                data-position="top"
                data-tooltip="View Marie on LinkedIn"
                className="btn-floating btn-large waves-effect waves-light brown tooltipped"
              >
                <div className="social-icon-div ">
                  <i className="icon-linkedin22 custom-social-icon " />
                </div>
              </a>
            </li>
            <li>
              <a
                aria-label="Viewwith Marie on GitHub"
                href="github:https://github.com/Tereamarie"
                target="_blank"
                rel="noopener noreferrer"
                data-position="top"
                data-tooltip="Connect with Marie on gitHub"
                className="btn-floating btn-large waves-effect waves-light brown tooltipped"
              >
                <div className="social-icon-div ">
                  <i className="icon-github custom-social-icon" />
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://codepen.io/mthotchkiss18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon-div ">
                  <i className="icon-codepen custom-social-icon" />
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <div className="colorlib-footer">
          <p>
            <small>
              Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
              <i className="icon-coffee" aria-hidden="true" />
              <br />
              Thanks{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>{" "}
              for inspiration
            </small>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
