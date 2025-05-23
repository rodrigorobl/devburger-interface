import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;

    @media (max-width: 992px) {
        grid-template-columns: 1fr; /* Content takes full width */
        /* Assuming sidebar will be hidden or overlaid by JS toggle */
    }

    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100vh;
        background-color: ${(props) => props.theme.secondWhite};
        overflow: auto;
    }

    section {
        margin: 0 auto;
        padding: 40px 20px;
        max-width: 1200px;
        width: 100%;

        @media (max-width: 768px) {
            padding: 30px 15px;
        }

        @media (max-width: 480px) {
            padding: 20px 10px;
        }
    }
`;
