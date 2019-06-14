import React, { Component, Fragment } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import * as fnMenu from '../../store/actions/fnMenu';
// import { Container } from './styles';
import Header from '../../components/Header';

class Task extends Component {
  componentDidMount() {
    this.props.doOpenMenu({ open: false });
  }

  render() {
    return (
      <Fragment>
        <Header title="Task Or TODO" />
        <Container>
          <Paper style={{ padding: '2px', marginTop: '4px' }}>
            <Typography variant="h5" component="h3">
              {moment(new Date()).format('DD/M/YYYY HH:mm')}
            </Typography>
            <Typography style={{ color: '#666' }} component="p">
              Tarefa XYZ
            </Typography>
          </Paper>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ menu: state.menu });

const mapDispatchToProps = dispatch => bindActionCreators(fnMenu, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);
