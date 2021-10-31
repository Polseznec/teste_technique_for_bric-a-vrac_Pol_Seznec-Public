import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Logo from "../medias/cropped-cropped-logo_couleur.png";

const Nav = () => {
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <img src={Logo} alt="Bric-a-Vrac Logo" />
        </Link>
      </div>
      <div>
        <a href="https://bricavrac.com/contact/">Contact</a>
        <a href="https://bricavrac.com/blog/">Blog</a>

        <Link to="/">
          <i class="fas fa-home"></i>
        </Link>
      </div>
    </NavContainer>
  );
};

export default Nav;

//style

export const NavContainer = styled.nav`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 244, 244, 1) 100%
  );
  height: 70px;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10000;
  box-shadow: rgba(0, 0, 0, 0.2) 100px 8px 50px -10px;

  img {
    height: 100px;
    width: auto;
    padding-top: 70px;
    padding-left: 70px;
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
  }
  i {
    color: rgb(184, 208, 111);
    padding-right: 70px;
    font-size: 40px;
  }
  a {
    margin-right: 30px;
    font-size: 20px;
    text-decoration: none;
    color: black;
  }
`;
