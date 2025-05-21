import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  * {
    color: ${(props) => props.theme.secondBlack};
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    @media (max-width: 768px) {
      grid-gap: 10px 20%;
    }

    @media (max-width: 480px) {
      grid-gap: 10px 10%;
    }

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: ${(props) => props.theme.secondBlack};
      color: ${(props) => props.theme.white};
      width: 100%;
      padding: 15px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      @media (max-width: 768px) {
        font-size: 18px;
        padding: 12px;
      }

      @media (max-width: 480px) {
        font-size: 16px;
        padding: 10px;
      }
    }

    .items {
      grid-area: items;
      padding-left: 20px;

      @media (max-width: 480px) {
        padding-left: 10px;
      }
    }

    .items-price {
      grid-area: items-price;
      padding-right: 20px;

      @media (max-width: 480px) {
        padding-right: 10px;
      }
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;

      @media (max-width: 480px) {
        padding-left: 10px;
      }
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 20px;

      @media (max-width: 480px) {
        padding-right: 10px;
      }
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 20px;

    * {
      font-weight: 700;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      padding: 15px;
      margin-top: 20px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      padding: 10px;
      margin-top: 16px;
    }
  }
`;
