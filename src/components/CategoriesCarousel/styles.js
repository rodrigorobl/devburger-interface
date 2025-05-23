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
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
    border-radius: 15px;
  }
`;

export const CategoryButton = styled.button`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.7);
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 22px;
  font-weight: bold;
  margin-top: 50px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    border-color: ${(props) => props.theme.white};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 18px;
    margin-top: 30px;
  }
`;
