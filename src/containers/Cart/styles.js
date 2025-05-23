import styled from 'styled-components';
import Texture from '../../assets/texture.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  min-height: 100vh;
`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img {
    height: 130px;
  }

  @media (max-width: 768px) {
    height: 150px;
    img {
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    height: 120px;
    img {
      height: 80px;
    }
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${(props) => props.theme.green};
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    &::after {
      width: 40px;
      left: calc(50% - 20px); /* Adjusted for potentially smaller text */
    }
  }

  &::after {
    position: absolute;
    left: calc(50% - 28px); /* Corrected from + - to just - */
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.green};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr; /* Stack cart items and summary */
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 20px;
  }
`;
