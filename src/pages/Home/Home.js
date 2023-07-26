import React from "react";
import "./Home.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1 style={{ color: "rgb(10, 5, 10)" }}>
          Hi, <br />
          I'm Seif <br />a web developer
        </h1>
        <h2>
          frontend developer / computer science student
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </h2>
      </div>
      <div className="myimage">
        <div className="skills">
          <div className="skilltitle">
            <h2>My skills</h2>
          </div>
          <div className="skill">
            <CircularProgressbar
              value={90}
              text="CSS"
              styles={buildStyles({
                textSize:15,
                rotation: 0.25,
                textColor: "rgb(10, 5, 10)",
                backgroundColor: "rgb(10, 5, 10)",
                pathColor: "rgb(10, 5, 10)",
              })}
            />
            <CircularProgressbar
              value={90}
              text="JAVASCRIPT"
              styles={buildStyles({
                textSize:15,
                rotation: 0.25,
                textColor: "rgb(10, 5, 10)",
                backgroundColor: "rgb(10, 5, 10)",
                pathColor: "rgb(10, 5, 10)",
              })}
            />
            <CircularProgressbar
              value={80}
              text="REACT"
              styles={buildStyles({
                textSize:15,
                rotation: 0.25,
                textColor: "rgb(10, 5, 10)",
                backgroundColor: "rgb(10, 5, 10)",
                pathColor: "rgb(10, 5, 10)",
              })}
            />
            <CircularProgressbar
              value={85}
              text="SCSS"
              styles={buildStyles({
                textSize:15,
                rotation: 0.25,
                textColor: "rgb(10, 5, 10)",
                backgroundColor: "rgb(10, 5, 10)",
                pathColor: "rgb(10, 5, 10)",
              })}
            />
            <CircularProgressbar
              value={95}
              text="vue"
              styles={buildStyles({
                textSize:15,
                rotation: 0.25,
                textColor: "rgb(10, 5, 10)",
                backgroundColor: "rgb(10, 5, 10)",
                pathColor: "rgb(10, 5, 10)",
              })}
            />
            <CircularProgressbar
              value={50}
              text="PYTHON"
              styles={buildStyles({
                textSize:15,
                rotation: 0.25,
                textColor: "rgb(10, 5, 10)",
                backgroundColor: "rgb(10, 5, 10)",
                pathColor: "rgb(10, 5, 10)",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
