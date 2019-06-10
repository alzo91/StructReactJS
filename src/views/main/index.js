import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MenuDrawer from '../../components/MenuDrawer';

import Singin from '../singin';
import Singup from '../singup';
import Dashboard from '../dashboard';
import User from '../user';
import Task from '../task';
import Location from '../location';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Fragment>
        <Route exact path="/" component={Singin} />
        <Route exact path="/singup" component={Singup} />
        <Fragment>
          <MenuDrawer />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/user" component={User} />
          <Route exact path="/dashboard/task" component={Task} />
          <Route exact path="/dashboard/location" component={Location} />
        </Fragment>
      </Fragment>
    </Switch>
  </BrowserRouter>
);

export default Routes;
