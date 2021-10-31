import React from "react";
import Form from "../components/Form";

import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <Form />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="rgb(240, 146, 37)"
          fill-opacity="1"
          d="M0,160L120,165.3C240,171,480,181,720,154.7C960,128,1200,64,1320,32L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </LoginContainer>
  );
};

export default Login;

export const LoginContainer = styled.div`
  height: calc(100vh - 70px);
  padding-top: 70px;
  overflow: hidden;
  svg {
    bottom: 0px;
    position: absolute;
    display: block;
    z-index: 500;
  }
`;
