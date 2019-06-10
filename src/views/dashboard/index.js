import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Header from '../../components/Header';

import * as fnLogin from '../../store/actions/fnLogin';
import * as fnMenus from '../../store/actions/fnMenu';

const Dashboard = ({ doOpenMenu }) => (
  <div>
    <Header title="Dashboard" />
    <Button
      color="primary"
      onClick={() => {
        doOpenMenu({ open: true });
      }}
    >
      material-ui
    </Button>
  </div>
);

const mapStateToProps = state => ({ login: state.login, menu: state.menu });

const mapDispatchToProps = dispatch => bindActionCreators({ ...fnLogin, ...fnMenus }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
