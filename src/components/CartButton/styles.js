import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: ${(props) => props.theme.purple};
    padding: 8px 16px;
    border: 0;
    border-radius: 5px;
    font-size: 16px;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
       background-color: ${(props) => props.theme.secondDarkPurple};
       transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 6px 10px;
        font-size: 13px;
        gap: 6px;
    }
`;
