import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 475px) {
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 15px;
  }

  @media (max-width: 360px) {
    padding: 10px;
    border-radius: 12px;
    margin-bottom: 12px;
  }

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
      'delivery-tax delivery-tax-price';    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: ${(props) => props.theme.secondBlack};
      color: ${(props) => props.theme.white};
      width: 100%;
      padding: 15px;
      text-align: center;
      border-radius: 8px;      @media (max-width: 475px) {
        font-size: 16px;
        padding: 12px;
        margin-bottom: 15px;
      }

      @media (max-width: 360px) {
        font-size: 14px;
        padding: 10px;
        margin-bottom: 12px;
        border-radius: 6px;
      }
    }    .items {
      grid-area: items;
      padding-left: 20px;

      @media (max-width: 360px) {
        padding-left: 12px;
        font-size: 13px;
      }
    }

    .items-price {
      grid-area: items-price;
      padding-right: 20px;
      text-align: right;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 20px;
      text-align: right;
    }

    @media (max-width: 1024px) {
      grid-gap: 10px 25%;

      .title {
        font-size: 18px;
        padding: 12px;
      }
    }

    @media (max-width: 768px) {
      grid-gap: 10px 20%;

      .title {
        font-size: 16px;
        padding: 10px;
        margin-bottom: 15px;
      }

      .items,
      .items-price,
      .delivery-tax,
      .delivery-tax-price {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      grid-gap: 10px 15%;

      .title {
        font-size: 15px;
        padding: 8px;
        margin-bottom: 12px;
      }

      .items,
      .items-price,
      .delivery-tax,
      .delivery-tax-price {
        font-size: 13px;
        padding-left: 10px;
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
    border-top: 2px solid ${(props) => props.theme.lightGray};

    * {
      font-weight: 700;
    }

    @media (max-width: 1024px) {
      font-size: 18px;
      padding: 15px;
      margin-top: 20px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px;
      margin-top: 16px;
    }

    @media (max-width: 480px) {
      font-size: 15px;
      padding: 10px;
      margin-top: 12px;
    }
  }
`;
