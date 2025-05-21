import styled from 'styled-components';

export const Container = styled.div`
  .carousel-items {
    padding-right: 40px;

    @media (max-width: 768px) {
      padding-right: 20px;
    }

    @media (max-width: 480px) {
      padding-right: 10px;
    }
  }

  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;

    @media (max-width: 480px) {
      left: 5px;
    }
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
  }

  padding-left: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-bottom: 30px;
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    padding-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.green};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.green};
    left: calc(50% - 28px);
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 50px 0;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin: 40px 0;

    &::after {
      width: 40px;
      left: calc(50% - 20px);
    }
  }
`;
