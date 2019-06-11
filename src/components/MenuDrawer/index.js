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

import { makeStyles } from '@material-ui/core/styles';
import * as fnMenu from '../../store/actions/fnMenu';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    height: '100%',
    background: '#0d132a' /* '#2a6f7f', */,
    color: '#fff',
  },
}));

// background: #2a6f7f;
// color: #ffffff;

function MenuDrawer({ open, menus, doOpenMenu }) {
  const classes = useStyles();

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      color="inherit"
      variant="persistent"
      anchor="left"
      style={{ background: '#2a6f7f' }}
      open={open}
    >
      <div>
        <IconButton
          color="inherit"
          onClick={() => {
            doOpenMenu({ open: false });
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider style={{ background: '#fff' }} />

      <List>
        {menus.map((item, index) => (
          <ListItem color="inherit" key={index}>
            <ListItemIcon>
              {item.icon === 'Home' && <Home style={{ color: '#fff' }} />}
              {item.icon === 'Place' && <Place style={{ color: '#fff' }} />}
              {item.icon === 'Settings' && <Settings style={{ color: '#fff' }} />}
              {item.icon === 'ViewList' && <ViewList style={{ color: '#fff' }} />}
            </ListItemIcon>
            <Link color="inherit" component={RouterLink} to={item.url}>
              {item.descr}
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
const mapStateToProps = state => ({ open: state.menu.open, menus: state.menu.menus });

const mapDispatchToProps = dispatch => bindActionCreators(fnMenu, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDrawer);
