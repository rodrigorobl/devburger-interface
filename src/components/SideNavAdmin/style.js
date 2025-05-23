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
    }

    @media (max-width: 768px) {
        height: 60px;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 20px;

        img {
            width: auto;
            height: 40px;
            margin: 10px 0;
        }
    }

    @media (max-width: 480px) {
        padding: 0 10px;

        img {
            height: 35px;
        }
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: center;
        width: auto;
        gap: 10px;
    }

    @media (max-width: 480px) {
        gap: 5px;
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => (props.$isActive ? props.theme.purple : "transparent")};
    transition: all 0.3s ease;
    border-radius: 4px;
    margin: 0 8px;

    svg {
        transition: all 0.3s ease;
    }

    &:hover {
        background-color: ${(props) => props.theme.purple};

        svg {
            transform: scale(1.1);
        }
    }

    &[href="/"] {
        margin-bottom: 16px;
        background-color: ${(props) => props.$isActive ? props.theme.green : "transparent"};

        &:hover {
            background-color: ${(props) => props.theme.green};
        }

        @media (max-width: 768px) {
            margin-bottom: 0;
        }
    }

    @media (max-width: 768px) {
        padding: 8px 15px;
        gap: 8px;
        margin: 0 4px;
        font-size: 14px;

        svg {
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 480px) {
        padding: 6px 10px;
        gap: 6px;
        font-size: 12px;
        margin: 0 2px;

        svg {
            width: 16px;
            height: 16px;
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;

    @media (max-width: 768px) {
        width: auto;
        margin: 0;
    }

    ${NavLink} {
        color: ${(props) => props.theme.red};
        
        &:hover {
            background-color: ${(props) => props.theme.red};
            color: ${(props) => props.theme.white};
        }
    }
`;
