import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }

    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100vh;
        background-color: ${(props) => props.theme.secondWhite};
        overflow: auto;

        @media (max-width: 768px) {
            height: calc(100vh - 60px);
        }
    }

    section {
        margin: 0 auto;
        padding: 40px 20px;
        max-width: 1200px;
        width: 100%;

        @media (max-width: 768px) {
            padding: 20px 15px;
        }

        @media (max-width: 480px) {
            padding: 15px 10px;
        }
    }
`;
