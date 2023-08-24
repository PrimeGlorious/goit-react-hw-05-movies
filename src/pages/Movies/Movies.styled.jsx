import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: yellowgreen;
  }
`;

export const MovieContainer = styled.div`
  margin-left: 10px;
`;

export const MovieForm = styled.form`
  display: flex;
  margin-top: 20px;
`;

export const MovieBtn = styled.button`
  border: none;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 10px;
`;

export const MovieInput = styled.input`
  font-size: 18px;
`;

export const MovieList = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
