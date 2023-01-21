import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: black;
  font-size: 32px;
  text-decoration: none;
  padding: 8px;
  border-radius: 16px;
  &.active {
    color: #607d8b;
  }

  &:not(.active):hover,
  &:not(.active):focus {
    background-color: #d9ebf4;
  }
`;
