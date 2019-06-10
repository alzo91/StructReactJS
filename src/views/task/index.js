import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as fnMenu from '../../store/actions/fnMenu';
// import { Container } from './styles';
import Header from '../../components/Header';

class Task extends Component {
  componentDidMount() {
    this.props.doOpenMenu({ open: false });
  }

  render() {
    return (
      <div>
        <Header title="Task Or TODO" />
        <button onClick={() => this.props.doOpenMenu({ open: true })}>Taks</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ menu: state.menu });

const mapDispatchToProps = dispatch => bindActionCreators(fnMenu, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);
