import React from "react";
import Sidebar from "./sidebar";
import About from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Education from "./education";

const App = () => {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default App;
