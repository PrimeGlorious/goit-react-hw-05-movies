import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: blueviolet;
  }
`;

export const MovieDetailsContainer = styled.div`
  margin-left: 10px;
  margin-bottom: 50px;
`

export const MovieDetailsBtn  = styled.button`
  color: black;
  background-color: bisque;
  margin-top: 20px;
  margin-bottom: 10px;
  border: none;
  padding: 5px 10px;
  font-size: 14 px;
  border-radius: 10%;

  &:hover {
  color: bisque;
  background-color: black;
  }

  &:focus {
  color: bisque;
  background-color: black;
  }
`

export const MovieDetailsCard  = styled.div`
  margin-bottom: 20px;
  padding: 10px 15px;
  border: 1px solid black;
  width: 300px;
`

export const MovieDetailsImg  = styled.img`
  margin-bottom: 20px;
  width: 300px;
`

export const MovieDetailsInfo  = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
`

export const MovieDetailsTitle  = styled.h2`
  text-transform: uppercase;
`

export const MovieDetailsSubTitle  = styled.h3`
  text-transform: uppercase;
`

export const MovieDetailsText  = styled.p`
  font-size: 18px;
  max-width: 300px;

  &:last-child {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
`

export const MovieDetailsList  = styled.ul`
  text-align: center;
  display: flex;
  border: 1px solid black;
  width: 300px;
  padding: 10px 15px;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`
