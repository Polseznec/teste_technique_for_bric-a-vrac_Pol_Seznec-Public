import React from "react";

import logo from "../medias/cropped-cropped-logo_couleur.png";
import styled from "styled-components";

import StyledLink from "../styles/Link.style"

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <img src={logo} alt="bric-a-vrac_logo" />
      </div>
      <div>
        <StyledLink to="/login">
          <div>Log In</div>
        </StyledLink>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#B8D084"
          fill-opacity="1"
          d="M0,160L120,165.3C240,171,480,181,720,154.7C960,128,1200,64,1320,32L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </HomeContainer>
  );
};

export default Home;

export const HomeContainer = styled.div`
  height: calc(100vh - 70px);
  padding-top: 70px;
  overflow: hidden;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 80%;
    min-width: 450px;
  }
  
  div:nth-child(2) {
    position: absolute;
    bottom: 60px;
    right: 5%;
    z-index: 600;
    font-size: 30px;
    background-color: rgb(240, 146, 37);
    padding: 10px 40px;
    border-radius: 40px;
    color: whitesmoke;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: box-shadow 0.3s ease-out;
    transition: box-shadow 0.3s ease-out;
    &:hover {
      box-shadow: rgba(240, 145, 37, 0.432) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }

  svg {
    bottom: 0px;
    position: absolute;
    display: block;
    z-index: 500;
  }

  @media only screen and (max-width: 880px) {
    div:nth-child(2) {
      bottom: 100px;
      right: calc(50% - 79.25px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
