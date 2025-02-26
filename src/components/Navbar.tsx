import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #222;
  padding: 15px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/experience">Experience</StyledLink>
      <StyledLink to="/skills">Skills</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/work-history">Work History</StyledLink>
    </Nav>
  );
};

export default Navbar;
