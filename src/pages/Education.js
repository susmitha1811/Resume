import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Education</h2>
         
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            
           

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master Degree</h4>
              <h5>2020 - 2022</h5>
              <p><em>MBA -HUMAN RESOURCE MANAGEMENT</em></p>
              <p>MBA  - Human Resource Management

                Annamalai University of Arts & Science with a Master of Human Resource Management, Chidambaram Annamalai University. Passed Out Year - 2022 with 75%.</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Arts &amp; Science</h4>
              <h5>2016 - 2019</h5>
              <p><em>B.Sc - INFORMATION TECHNOLOGY</em></p>
              <p>Sourashtra College of Arts & Science with a Bachelor of Information Technology, Madurai Kamaraj University. Passed Out Year - 2019 with 65%.</p>
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

export default Education;
