import React from 'react';
import {
  Container, Input, Interno, DivRow, Button,
} from './styles';

export default function singin() {
  return (
    <Container>
      <Interno>
        <Input placeholder="Token enviado por e-mail" maxLength={8} />
        <Input placeholder="Email cadastro para empresa!" />
        <Input placeholder="Sua senha cadastrada!" security="true" type="password" />
        <DivRow>
          <Button to="/dashboard">Login</Button>
          <Button to="/singup">SingUp</Button>
        </DivRow>
      </Interno>

      <div />
    </Container>
  );
}
