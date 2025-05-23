import styled from 'styled-components';

export const Container = styled.div`
  min-height: 50px; /* Changed to min-height for flexibility */
  background-color: ${(props) => props.theme.darkPurple};
  width: 100%; /* Changed from 100vw to 100% */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px; /* Added padding for text content */

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
    text-align: center; /* Ensure text is centered if it wraps */
  }

  @media (max-width: 480px) {
    min-height: 40px; /* Slightly reduce height */
    p {
      font-size: 12px; /* Slightly reduce font size for very small screens */
    }
  }
`;
