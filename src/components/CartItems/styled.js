import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;

  @media (max-width: 768px) {
    height: 70px;
    width: 70px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 60px;
    width: 60px;
    border-radius: 8px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    gap: 8px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.white};
    border-radius: 4px;
    background-color: ${(props) => props.theme.purple};
    transition: all 0.4s;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }

    /* Adjust button size slightly for very small screens if necessary */
    @media (max-width: 360px) {
      height: 28px;
      width: 28px;
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
  /* Assuming this is the price per item line, e.g., "$19.99" */
  /* Font size adjustments can be added if it's part of the cart item display */
  @media (max-width: 768px) {
    font-size: 15px; /* Example if it's similar to other item text */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Example */
  }
`;

export const TrashImagem = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 22px;
    width: 22px;
  }

  @media (max-width: 480px) {
    height: 24px; /* Increased for better tap target */
    width: 24px;  /* Increased for better tap target */
  }
`;
