import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: ${(props) => props.theme.purple};
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    font-size: 30px;
    color: ${(props) => props.theme.white};

    @media (max-width: 768px) {
      font-size: 26px; /* Adjusted for smaller screens */
      height: 50px;    /* Adjusted for smaller screens */
    }

    @media (max-width: 480px) {
      font-size: 22px; /* Further adjusted for mobile */
      height: 46px;    /* Further adjusted for mobile */
    }

    &:hover {
       background-color : ${(props) => props.theme.secondDarkPurple};
    }
`;
