import React from "react";
import { FaArrowDown } from "react-icons/fa";

import { Image, ContactWrapper } from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://www.svgrepo.com/show/37594/man.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Mohamed Said, </strong> I’m a Front-End
            Developer located in London, England. I have a serious passion for
            UI development and creating intuitive, dynamic user experiences.
            <br />
            I'm a well-organised, problem solver, and an independent employee
            with high attention to detail. My hobbies include playing football
            and watching TV series. I am interested in the entire frontend
            spectrum and working on ambitious projects with positive people.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies{" "}
            <FaArrowDown />
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
