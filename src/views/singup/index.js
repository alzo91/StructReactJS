import React, { Component } from 'react';

import {
  Container, Input, Interno, DivRow, Button, Error,
} from './styles';

class Singin extends Component {
  state = {
    user: null,
    email: null,
    pass: null,
    confirmed: null,
    error: null,
  };

  handleSingIn = (e) => {
    const st = this.state;

    if (!st.user) {
      this.setState({ error: 'Favor entrar com nome!' });
      e.preventDefault();
      return;
    }
    if (!st.email) {
      this.setState({ error: 'Favor entrar com email!' });
      e.preventDefault();
      return;
    }
    if (!st.pass) {
      this.setState({ error: 'Favor entrar com password!' });
      e.preventDefault();
      return;
    }
    if (!st.confirmed) {
      this.setState({ error: 'Favor confirmar o password!' });
      e.preventDefault();
      return;
    }
    if (st.pass !== st.confirmed) {
      this.setState({ error: 'Senhas não conferem!' });
      e.preventDefault();
    }
  };

  render() {
    return (
      <Container>
        <Interno>
          {this.state.error && (
            <Error>
              <strong>
                <p>{this.state.error}</p>
              </strong>
            </Error>
          )}
          <Input
            placeholder="user"
            maxLength="100"
            onChange={e => this.setState({ error: null, user: e.target.value })}
          />
          <Input
            placeholder="email"
            type="email"
            maxLength="250"
            onChange={e => this.setState({ error: null, email: e.target.value })}
          />
          <Input
            placeholder="enter withpassword"
            security="true"
            type="password"
            onChange={e => this.setState({ error: null, pass: e.target.value })}
          />
          <Input
            placeholder="confirmed your password"
            security="true"
            type="password"
            onChange={e => this.setState({ error: null, confirmed: e.target.value })}
          />
          <DivRow>
            <Button onClick={this.handleSingIn} to="/">
              <strong>Singup</strong>
            </Button>
          </DivRow>
        </Interno>
      </Container>
    );
  }
}
export default Singin;
