import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import Header from '../../components/Header';

import * as fnLogin from '../../store/actions/fnLogin';
import * as fnMenus from '../../store/actions/fnMenu';

import 'react-toastify/dist/ReactToastify.min.css';
import './toast.css';

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  // default to 750ms, can be omitted
  duration: 750,
});

const Dashboard = ({ doOpenMenu }) => (
  <div>
    <Header title="Dashboard" />
    <ToastContainer />
    <Button
      color="primary"
      onClick={() => {
        toast('Uhuuuuu', {
          position: 'top-center',
          type: 'info',
          transition: Zoom,
          draggable: true,
        });
      }}
    >
      Gerar ToastNotification
    </Button>
  </div>
);

const mapStateToProps = state => ({ login: state.login, menu: state.menu });

const mapDispatchToProps = dispatch => bindActionCreators({ ...fnLogin, ...fnMenus }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
