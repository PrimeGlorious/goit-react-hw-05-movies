import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;

  &.active {
    color: blueviolet;
  }
`;

export const LayoutHeader = styled.header`
  background-color: white;
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

export const LayoutNav = styled.nav`
  margin-left: 15px;
`

export const LayoutList = styled.ul`
  display: flex;
  gap: 10px;
`
