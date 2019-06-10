import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global';
import Main from './views/main';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <Main />
    </Fragment>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));
