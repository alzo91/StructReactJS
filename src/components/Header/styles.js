import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #0d132a; /* #2a6f7f; */
  color: #ffffff;
`;

export const Button = styled.button`
  background-color: #fff07a; /*#fffcbf;*/
  color: #000;
  font-style: bold;
  width: 35px;
  height: 24px;
  max-width: 350px;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  text-align: center;
  border: 0.5px;
  border-style: solid;
  border-color: #fff;
  &:hover {
    background: #f4fa9c; /* #fce8aa; /* #faee1c;*/
    color: #3f1263;
    border: 1.5px;
    border-color: #3f1263;
  }
`;
