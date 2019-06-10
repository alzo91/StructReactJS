import { typeOfLogin } from '../actions/fnLogin';

const INITIAL_STATE = {
  token: null,
  username: null,
  email: null,
  avatar: null,
  isValidToken: false,
  loading: false,
  error: null,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case typeOfLogin.SINGUP: // 'CAD_LOGIN':
      console.log('reducer login CAD_LOGIN');
      // return { ...state, token: action.payload.objToCadastro.token };
      return { ...state };
    case typeOfLogin.CAD_SUCESS: // 'CAD_SUCESS':
      console.log('reducer login CAD_SUCESS');
      return { ...state, token: action.payload.objSucess.token };
    case typeOfLogin.ERROR:
      console.log('reducer login ERROR');
      return { ...state, error: action.payload.objErr.error };
    case typeOfLogin.REQ_LOGIN:
      return { ...state };
    case typeOfLogin.LOGIN_OK: // 'LOGIN_OK':
      return { ...state };
    case typeOfLogin.LOGOUT: // 'DO_LOGOUT':
      return state;
    default:
      return state;
  }
}
