import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/icons/Menu';
import Grade from '@material-ui/icons/GradeRounded';
import Work from '@material-ui/icons/WorkRounded';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as fnMenu from '../../store/actions/fnMenu';

import { Container } from './styles';

const Header = ({ title, doOpenMenu }) => (
  <Container>
    <div>
      <IconButton
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={() => {
          doOpenMenu({ open: true });
        }}
      >
        <MoreVertIcon />
      </IconButton>
    </div>
    <div>
      <h2 color="#fff">{title}</h2>
    </div>
    <div>
      <IconButton
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={() => {
          doOpenMenu({ open: true });
        }}
      >
        <Work />
      </IconButton>
    </div>
  </Container>
);

const mapStateToProps = state => ({ menu: state.menu });

const mapDispatchToProps = dispatch => bindActionCreators({ ...fnMenu }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
