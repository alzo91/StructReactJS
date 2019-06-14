import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
    <Container maxWidth="sm" style={{ background: '#fff', height: '100%', marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={2}>
          <Button color="primary" style={{ background: '#0d132a', color: '#fff' }} maxWidth="md">
            Button Test
          </Button>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Button color="primary" style={{ background: '#0d132a', color: '#fff' }} maxWidth="md">
            Button Atuh
          </Button>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Button color="primary" style={{ background: '#0d132a', color: '#fff' }} maxWidth="md">
            Button Clear
          </Button>
        </Grid>
      </Grid>
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
    </Container>
  </div>
);

const mapStateToProps = state => ({ login: state.login, menu: state.menu });

const mapDispatchToProps = dispatch => bindActionCreators({ ...fnLogin, ...fnMenus }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
