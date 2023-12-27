import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Experience</h2>
          
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>STATLIGHT SOFTWARE SOLUTIONS PVT LTD</h4>
              <h5>Sep 2022 to Dec 2022</h5>
              <p><em>UI Developer</em></p>
              <ul>
                <li>Developed front-end pages with HTML5, CSS3 and
                  React Native.</li>
                <li>Created components using AntD and some basics of
                  ReactJs</li>
                <li>Worked on internal project applications using HTML5,
                  CSS, and React Native</li>
                <li>Built 25+ single-page designs for the internal project</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>DOT COM INFOWAY</h4>
              <h5>May-2022 to Aug-2022</h5>
              <p><em>Mobile App Developer</em></p>
              <ul>
                <li>Worked as a Trainee React Native Mobile App
                  Developer in Dot Com Infoway at Madurai</li>
              </ul>
            </div>
           
          
          </div>
        </div>

      </div>
    </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Experience;
