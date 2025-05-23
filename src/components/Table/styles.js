import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.secondBlack};
  border-bottom: 1px solid ${(props) => props.theme.lightGray};

  /* Note: For full table responsiveness (e.g., horizontal scroll or stacked rows),
     consider wrapping the <Table> component in a div with overflow-x: auto
     or implementing a more complex CSS transformation (which may require JS/HTML changes). */

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px; /* Example: Adjust font size if needed */
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px; /* Example: Adjust font size if needed */
  }

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.secondBlack};
  font-weight: 500;
  line-height: 115%;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px; /* Example: Adjust font size if needed */
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px; /* Example: Adjust font size if needed */
  }
`;

export const Body = styled.tbody``;
