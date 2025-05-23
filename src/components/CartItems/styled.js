import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;
  @media (max-width: 475px) {
    height: 60px;
    width: 60px;
    border-radius: 12px;
  }

  @media (max-width: 360px) {
    height: 50px;
    width: 50px;
    border-radius: 10px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 360px) {
    gap: 8px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;

    @media (max-width: 360px) {
      height: 26px;
      width: 26px;
    }
    color: ${(props) => props.theme.white};
    border-radius: 4px;
    background-color: ${(props) => props.theme.purple};
    transition: all 0.4s;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashImagem = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
