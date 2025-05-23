import styled from "styled-components";

import { Link as ReactLink } from "react-router-dom";

import BackgroundLogin from "../../assets/background-login.svg";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }

  @media (max-width: 992px) {
    display: none; /* Hide on smaller screens */
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  @media (max-width: 992px) {
    max-width: 100%;
    padding: 20px; /* Add padding when full width */
  }

  background: url('${Background}');
  background-color: #1e1e1e;

  p { /* Login link container text */
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: ${(props) => props.theme.purple};

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px; /* Keeps form from being too wide */

  @media (max-width: 480px) {
    gap: 15px;
    padding: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;

    @media (max-width: 480px) {
      height: 48px;
    }
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.white};

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p { /* Error message */
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.darkRed};
    font-weight: 600;
    height: 10px; /* Keeps space for error message */

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};

  /* Assuming this Link is used for the "Already have an account? Login" text */
  /* Its parent <p> tag already has font-size adjustments in RightContainer */
  /* If this Link is used elsewhere with different parent, it might need its own font-size adjustments */
`;
