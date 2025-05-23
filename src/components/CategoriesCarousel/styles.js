import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .carousel-items {
    padding-right: 40px;
  }

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
  }

  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 20px;
    .carousel-items {
      padding-right: 20px;
    }
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    .carousel-items {
      padding-right: 10px;
    }
    .react-multiple-carousel__arrow--left {
      left: 5px;
      top: 5px; /* Adjust for smaller screens */
    }
    .react-multiple-carousel__arrow--right {
      right: 5px; /* Ensure right arrow is also adjusted */
      top: 5px; /* Adjust for smaller screens */
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 180px;
    padding: 15px 8px;
  }
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: bold;
  margin-top: 50px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 25px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 6px 20px;
    margin-top: 30px;
  }
`;
