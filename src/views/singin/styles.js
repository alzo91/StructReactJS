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
  background-color: #e5fcc2; /*#fff07a; /*#fffcbf;*/
  color: #3a276a;
  font-style: bold;
  width: 350px;
  height: 24px;
  max-width: 350px;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 5px;
  text-align: center;
  border: 0.5px;
  border-style: solid;
  border-color: #fff;
  &:hover {
    background: #fcf9ec; /* #f4fa9c; /* #fce8aa; /* #faee1c;*/
    color: #08085e;
  }
`;
