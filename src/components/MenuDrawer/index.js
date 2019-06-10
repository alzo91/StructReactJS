import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Home from '@material-ui/icons/HomeRounded';
import Place from '@material-ui/icons/PlaceRounded';
import Settings from '@material-ui/icons/SettingsRounded';
import ViewList from '@material-ui/icons/ViewList';

import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as fnMenu from '../../store/actions/fnMenu';

const MenuDrawer = ({ open, menus, doOpenMenu }) => (
  <Drawer variant="persistent" anchor="left" open={open}>
    <div>
      <IconButton
        onClick={() => {
          doOpenMenu({ open: false });
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />

    <List>
      {menus.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            {item.icon === 'Home' && <Home />}
            {item.icon === 'Place' && <Place />}
            {item.icon === 'Settings' && <Settings />}
            {item.icon === 'ViewList' && <ViewList />}
          </ListItemIcon>
          <Link component={RouterLink} to={item.url}>
            {item.descr}
          </Link>
        </ListItem>
      ))}
    </List>
  </Drawer>
);
const mapStateToProps = state => ({ open: state.menu.open, menus: state.menu.menus });

const mapDispatchToProps = dispatch => bindActionCreators(fnMenu, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDrawer);
