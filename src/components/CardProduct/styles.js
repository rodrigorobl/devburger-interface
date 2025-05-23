import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    p {
      font-size: 18px;
      color: ${(props) => props.theme.orange};
      line-height: 1.2; /* Unitless line-height */
      font-weight: 700;
      margin-top: 40px;
    }

    strong {
      font-size: 22px;
      color: ${(props) => props.theme.black};
      font-weight: 800;
      line-height: 1.2; /* Unitless line-height */
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    gap: 30px;

    div {
      height: 70px;

      p {
        font-size: 16px;
        margin-top: 35px;
        line-height: 1.3; /* Adjusted for smaller font */
      }

      strong {
        font-size: 20px;
        line-height: 1.3; /* Adjusted for smaller font */
      }
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 25px;

    div {
      height: 60px; /* This height might be restrictive if product name wraps */

      p {
        font-size: 14px;
        margin-top: 25px; /* Slightly reduced margin-top */
        line-height: 1.4; /* Adjusted for smaller font */
      }

      strong {
        font-size: 18px;
        line-height: 1.3; /* Adjusted for smaller font */
      }
    }
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;

  @media (max-width: 768px) {
    height: 90px;
    top: -45px;
  }

  @media (max-width: 480px) {
    height: 80px;
    top: -40px;
  }
`;
