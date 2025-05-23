import styled from 'styled-components';

import Background from '../../assets/background.svg';
import BannerHamburger from '../../assets/banner-hamburger.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburger}') no-repeat;
  background-color: ${(props) => props.theme.mainBlack};
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    /* position: absolute; Removed for flex centering */
    color: ${(props) => props.theme.white};
    text-align: center; /* Ensure text is centered if it wraps */

    /* right: 20%; Removed */
    /* top: 30%; Removed */
  }

  span {
    display: block;
    color: ${(props) => props.theme.white};
    font-size: 20px;
    text-align: center; /* Ensure text is centered */
  }

  /* Added a container for h1 and span to use flexbox on Banner for centering them together */
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  @media (max-width: 768px) {
    height: 350px;
    h1 {
      font-size: 60px;
      line-height: 50px;
    }
    span {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    height: 250px;
    h1 {
      font-size: 45px;
      line-height: 40px;
    }
    span {
      font-size: 16px;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
  flex-wrap: wrap; /* Allow wrapping */

  @media (max-width: 768px) {
    gap: 30px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? props.theme.purple : props.theme.dimgray)};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${props.theme.purple}`};

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    padding: 30px;
    margin: 40px auto;
  }

  @media (max-width: 600px) { /* Adjusted breakpoint for 1 column */
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
    margin: 30px auto;
  }
`;
