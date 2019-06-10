import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as fnMenu from '../../store/actions/fnMenu';
// import { Container } from './styles';
import Header from '../../components/Header';

class Location extends Component {
  componentDidMount() {
    this.props.doOpenMenu({ open: false });
  }

  render() {
    return (
      <div>
        <Header title="Locations" />
        <button onClick={() => this.props.doOpenMenu({ open: true })}>Location</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ menu: state.menu });

const mapDispatchToProps = dispatch => bindActionCreators(fnMenu, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Location);
