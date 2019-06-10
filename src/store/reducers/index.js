import { combineReducers } from 'redux';

import login from './login';
import menu from './menu';

export default combineReducers({ login, menu });
