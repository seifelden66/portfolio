import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Sidebar.scss";
import { faEnvelope, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="nav-bar">
      
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHouse} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/seif-elden-mohammed-426aa0197/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/seifelden66">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/seifelden.mohammed.5/">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
