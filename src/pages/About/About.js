import React from "react";
import "./About.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import slide1 from "../../assets/myreads.jpg";
import slide2 from "../../assets/weatherapp.jpg";
import slide3 from "../../assets/mart.jpg";
import slide4 from "../../assets/humm.jpg";
import slide5 from "../../assets/multistep.jpg";




const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="h11">about me</h1>
          <p>
            <h2>1. About me:</h2>
            <br />
            Hello! my name is seif, and I am a computer scinece student with a
            passionfor creating user-friendly websites. I have a strong
            background in HTML, CSS, and javascript, experienced with Vue, Nuxt3, and React
          </p>
          <p>
            <h2>2. My Skills:</h2>
            <br /> I have some experience in developing modern frontend
            applications using HTML, CSS, JavaScript, React, and other popular
            frameworks. I'm also familiar with version control systems such as
            Git Additionally, I have experience with responsive design
            techniques to ensure that websites look great on any device or
            browser.
          </p>
        </div>
        <div className="second">
          <div className="title">
            <h1>
              some of my projects
            </h1>
          </div>

          <div className="projects">
            <Slide className="slide">
              <card className="cards">
                <div
                  className="project"
                  style={{
                    
                    backgroundImage: `url(${slide1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                >

                </div>
                <div className="articles">
                  <p>this is an application to organize your books</p>
                  <h2><a href="https://github.com/seifelden66/udacit-myreads">source code </a></h2>
                </div>
              </card>
              <card className="cards">
                <div
                  className="project"
                  style={{
                    backgroundImage: `url(${slide2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",

                  }}
                >

                </div>
                <div className="articles"><p>this is an application to describe the weather</p>
                  <h2><a href="https://github.com/seifelden66/weather-app">source code </a></h2>
                </div>
              </card>
              <card className="cards">
                <div
                  className="project"
                  style={{
                    backgroundImage: `url(${slide3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                >
                  
                </div>
                <div className="articles">
                  <p>this is a frontend e-commerce application</p>
                  <h2><a href="https://github.com/seifelden66/market">source code </a></h2>
                </div>
              </card>
              <card className="cards">
                <div
                  className="project"
                  style={{
                    backgroundImage: `url(${slide4})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                >
                  
                </div>
                <div className="articles">
                  <p>this is a website for food lovers</p>
                  <div className="links">
                    <h2><a href="https://github.com/seifelden66/humm-clone">source code </a></h2>
                    <h2><a href="https://hummclone.netlify.app/en">live demo </a></h2>
                  </div>
                  
                </div>
              </card>
              <card className="cards">
                <div
                  className="project"
                  style={{
                    backgroundImage: `url(${slide5})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                >
                  
                </div>
                <div className="articles">
                  <p>this is a website for food lovers</p>
                  <div className="links">
                  <h2><a href="https://github.com/seifelden66/multistep-form">source code </a></h2>
                  <h2><a href="https://effulgent-rugelach-6e2d19.netlify.app/">live demo </a></h2>
                  </div>

                </div>
              </card>
            </Slide>


          </div>
        </div>
      </div>
    </>
  );
};

export default About;
