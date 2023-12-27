import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="home">
          <div className="resume-section-content">
            <h1 className="mb-0">
             SUSMITHA
              <span className="text-primary">RAJENDRAN</span>
            </h1>
            <div className="subheading mb-5">
            370/3A Ramaswamy Nagar, Temple View Avenue, Thiruppalai, Madurai -625014,  (+91) 638-497-0881 ·
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#all">r.susmitha1811@gmail.com</a>
            </div>
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/feed/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="https://github.com/codewithviju/react-js-resume-website/tree/master/src">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="https://web.skype.com/?openPstnPage=true">
                <i className="fab fa-skype"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
        
        <hr className="m-0" />

       
      </div>
    </>
  );
};

export default Home;
