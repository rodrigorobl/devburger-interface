import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.svg';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    right: 20%;
    position: absolute;
    top: 10%;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  height: 800px;
`;
