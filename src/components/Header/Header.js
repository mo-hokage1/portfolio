import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <div className="link">MS♠</div>
        </Logo>
        <NavMenu>
          <NavLink
            className="menu-item"
            to="projects"
            smooth={true}
            style={{ borderLeft: "1px solid gray", paddingLeft: "15px" }}
          >
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>

          <NavLink className="menu-item" to="skills" smooth={true}>
            Skills
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Hire Me
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn"
            href="https://www.linkedin.com/in/mohamed-abdulqadir-b69552245/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
