import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

export const Interno = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-top: 5px;
  width: 350px;
  max-width: 400px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 0px;
  border-radius: 3px;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  max-width: 400px;
  justify-content: space-around;
`;

export const Button = styled(Link)`
  background-color: #0d132a; /*#f4fa9c; /* #fffcbf; */
  color: #fff;
  width: 350px;
  padding: 16px;
  max-width: 350px;
  margin-top: 5px;
  margin-left: 5px;
  text-align: center;
  border-radius: 5px;
  border: 3px;
  border-style: solid;
  border-color: #fff;
  &:hover {
    background: #300532; /*#fffcbf; /* #fce8aa; /* #faee1c;*/
    color: #fff; /*#08085e; */
  }
`;
