import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards & Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                1 ACHIEVED 1ST RANK IN FINAL YEAR PROJECT WITH 98%.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                2 WON PRIZES IN SPORTS EVENT AT SCHOOL AND COLLEGE.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
