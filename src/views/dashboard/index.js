import React, { Component, Fragment } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import Header from '../../components/Header';

import * as fnLogin from '../../store/actions/fnLogin';
import * as fnMenus from '../../store/actions/fnMenu';

import 'react-toastify/dist/ReactToastify.min.css';
import './toast.css';

const NewButton = styled(Button).attrs({
  style: {
    background: '#0d132a',
    color: '#fff',
    padding: '5px',
    marginLeft: '4px',
    marginRight: '4px',
    borderRadius: '10px',
  },
})``;

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  // default to 750ms, can be omitted
  duration: 750,
});

// const Dashboard = ({ doOpenMenu }) => (
class Dashboard extends Component {
  componentDidMount() {
    this.props.doOpenMenu({ open: false });
  }

  render() {
    return (
      <Fragment>
        <Header title="Dashboard" />
        <ToastContainer />
        <Container maxWidth="sm" style={{ background: '#fff', padding: '60px', marginTop: '4px' }}>
          <Grid
            container
            spacing={3}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Grid item xs={3} sm={2}>
              <NewButton maxWidth="md">Button 01</NewButton>
            </Grid>
            <Grid item xs={3} sm={2}>
              <NewButton maxWidth="md">Button 02</NewButton>
            </Grid>
            <Grid item xs={3} sm={2}>
              <NewButton maxWidth="md">Button 03</NewButton>
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
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({ login: state.login, menu: state.menu });

const mapDispatchToProps = dispatch => bindActionCreators({ ...fnLogin, ...fnMenus }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
