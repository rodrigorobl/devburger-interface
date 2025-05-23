import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.svg';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    right: 20%;
    position: absolute;
    top: 10%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    height: 400px;

    h1 {
      font-size: 70px;
      right: 15%;
    }
  }

  @media (max-width: 768px) {
    height: 350px;

    h1 {
      font-size: 60px;
      right: 10%;
      top: 15%;
    }
  }

  @media (max-width: 480px) {
    height: 300px;

    h1 {
      font-size: 40px;
      right: 50%;
      transform: translateX(50%);
      width: 100%;
      text-align: center;
      top: 20%;
    }
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  min-height: 800px;
  padding: 20px 0;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 15px 0;
  }

  > div {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 15px;
    }

    @media (max-width: 480px) {
      padding: 0 10px;
    }
  }
`;
