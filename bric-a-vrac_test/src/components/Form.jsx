import React from "react";

import styled from "styled-components";

const Form = () => {
  const handelClic = () => {
    window.alert(
      "login !...  Voir ce ripo Github pour un exemple d'un Form from scratch avec la dependence react-form : https://github.com/Polseznec/teste_technique_for_X-Fabric-Pol_Seznec/tree/main/exercice_2/form_exercice )"
    );
  };
  return (
    <FormContainer>
      <form autoComplete="off" className="form">
        <h1>Connection</h1>
        <div>
          <label className="label" htmlFor="email">
            Email :{" "}
          </label>
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label className="label" htmlFor="password">
            Mpd :{" "}
          </label>
          <input
            className="input"
            id="password"
            type="password"
            name="password"
          />
        </div>

        <button onClick={handelClic}>Go</button>
      </form>
    </FormContainer>
  );
};

export default Form;

export const FormContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 35px;
    padding-bottom: 30px;
    color: whitesmoke;
  }
  form {
    height: 400px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(184, 208, 111);
    border-radius: 5%;
    color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  input {
    height: 30px;
    border-radius: 5px;
    margin-top: 30px;
    background-color: rgb(226, 224, 224);
    box-shadow: rgba(0, 0, 0, 0.027) 0px 2px 4px 0px inset;
  }

  button {
    margin-top: 30px;
    cursor: pointer;
    font-size: 30px;
    padding: 10px 40px;
    background-color: rgb(240, 146, 37);
    border-radius: 40px;
    color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: box-shadow 0.3s ease-out;
    &:hover {
      box-shadow: rgba(240, 145, 37, 0.432) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }
`;
