import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>To secure a challenging role as a UI Developer, where I can utilize
            my skills and expertise in creating visually stunning and user-friendly
            interfaces that meet the needs of the end-users. </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img.jpeg" className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Career Objective :-</h3>
            <br></br>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>18 Nov 1995</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 638 497 0881</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tamil Nadu, Madurai</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>MBA (HR)</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email I'd:</strong> <span>r.susmitha1811@gmail.com</span></li>
                </ul>
              </div>
            </div><br></br>
            <p>
              I aim to
            continuously learn and grow in my career while staying up-to-date
            with the latest trends and technologies in UI development.</p><p> I also
            hope to collaborate with a team of professionals and contribute my
            expertise to achieve project goals and exceed client expectations.
            </p>
          </div>
        </div>

      </div>
    </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default About;
