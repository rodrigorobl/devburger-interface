import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${(props) => props.theme.mainBlack};
  width: 100%;
  height: 72px;
  padding: 0 56px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 8px 20px;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
    gap: 10px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 10px 0;

    div {
      gap: 15px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    
    div {
      gap: 10px;
      width: 100%;
      justify-content: space-around;
    }
  }

  hr {
    height: 24px;
    border: 1px solid ${(props) => props.theme.darkGray};
    
    @media (max-width: 480px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 10px 0;

    div {
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }

    hr {
      display: none;
    }
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => (props.$isActive ? (props) => props.theme.purple : (props) => props.theme.white)};
  border-bottom: ${(props) => (props.$isActive ? `1px solid ${(props) => props.theme.purple}` : "none")};
  padding: 8px 12px;
  text-decoration: none;
  font-size: 14px;
  transition: all 200ms;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  
  &:hover {
    color: ${props => props.theme.purple};
  }

  @media (max-width: 475px) {
    font-size: 12px;
    padding: 6px 8px;
    min-width: auto;
    border-radius: 4px;
    background-color: ${props => props.$isActive ? props.theme.purple + '20' : 'transparent'};
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 10px;
    min-width: auto;
  }

  &:hover {
    color: ${(props) => props.theme.purple};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 15px;
    width: 100%;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  @media (max-width: 475px) {
    font-size: 11px;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: ${(props) => props.theme.white};
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: ${(props) => props.theme.purple};
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Logout = styled.button`
  color: ${(props) => props.theme.red};
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
