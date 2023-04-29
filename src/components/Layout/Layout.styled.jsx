import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 24px;
  line-height: calc(42 / 24);
  padding: 8px 16px;
  margin: 16px;
  border-radius: 8px;

  &.active {
    background-color: blue;
  }
`;

export const StyledLinkContainer = styled.div`
  margin: 20px;
`;

export const Header = styled.header`
  border-bottom: 1px solid black;
`;
