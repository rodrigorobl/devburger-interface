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
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 475px) {
    min-height: calc(100vh - 60px);
  }
`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 180px;
  width: 100%;

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
  @media (max-width: 475px) {
    height: 90px;
    position: relative;

    img {
      height: 55px;
    }
  }

  @media (max-width: 360px) {
    height: 80px;
    
    img {
      height: 45px;
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
  margin: 20px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.green};
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 25px 0;

    &::after {
      width: 48px;
      left: calc(50% + -24px);
    }
  }
  @media (max-width: 480px) {
    font-size: 24px;
    margin: 20px 0;

    &::after {
      width: 40px;
      left: calc(50% + -20px);
    }
  }  @media (max-width: 475px) {
    font-size: 18px;
    margin: 10px 5px;
    padding: 0 5px 8px 5px;
    line-height: 1.2;
    white-space: normal;
    word-wrap: break-word;

    &::after {
      width: 32px;
      height: 3px;
    }
  }

  @media (max-width: 360px) {
    font-size: 15px;
    margin: 6px 4px;
    padding: 0 4px 6px 4px;
    
    &::after {
      width: 28px;
      height: 2px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 35%;
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }  @media (max-width: 475px) {
    padding: 8px;
    gap: 12px;
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }

  @media (max-width: 360px) {
    padding: 4px;
    gap: 8px;
    margin-bottom: 50px;
  }
`;
