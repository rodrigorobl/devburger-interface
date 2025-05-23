import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.svg';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    text-align: center; /* Ensure text is centered if it wraps */
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 60px; /* Adjust font size for smaller screens */
    }
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  min-height: 100vh;
`;
