import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 22px;
  color: black;

  &:hover,
  &:focus {
    color: red;
  }
`;

export const HomeContainer = styled.div`
  margin-left: 20px;
`;

export const HomeTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 24px;
  color: green;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

