import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  background-color: ${(props) => props.theme.darkPurple};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0;
  z-index: 10;
  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
  }
`;
