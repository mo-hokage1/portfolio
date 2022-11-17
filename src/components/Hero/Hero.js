import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer className="hero">
        <HeroWrapper>
          <HeroLeft>
            <h1>
              Hi, I'm{" "}
              <span className="name" style={{ fontWeight: "900" }}>
                Mohamed Said
              </span>{" "}
            </h1>
            <h5 className="frontend">Frontend Developer</h5>
            <p style={{ color: "white" }}>
              I am a{" "}
              <span style={{ color: "salmon", fontWeight: "900" }}>
                Software Engineer
              </span>{" "}
              specializing in{" "}
              <span style={{ color: "salmon", fontWeight: "900" }}>
                Front-End Development
              </span>{" "}
              and love what I do.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://www.svgrepo.com/show/37594/man.svg"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
