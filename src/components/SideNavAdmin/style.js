import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.black};

    img {
        width: 60%;
        margin: 40px 0;

        @media (max-width: 1200px) { /* Example: when viewport is getting smaller */
            margin: 30px 0;
            width: 55%;
        }

        @media (max-width: 992px) {
            /* Styles for if the sidebar were to be shown on tablet-sized screens */
            /* (AdminLayout currently hides the column containing this nav) */
            /* For robustness, if this component were used in another layout: */
            margin: 20px 0;
            width: 50%;
        }
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => (props.$isActive ? props.theme.purple : "transparent")};

    &:hover {
        background-color: ${(props) => props.theme.purple};
    }

    /* Example: Adjust padding for smaller sidebar contexts if needed */
    @media (max-width: 992px) {
        padding: 10px 15px;
        gap: 10px;
        /* Font size could be adjusted here if text is from this component */
    }
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
    /* Potentially add padding to footer content if any */
`;
