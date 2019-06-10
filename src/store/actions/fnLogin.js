export const typeOfLogin = {
  SINGUP: 'CAD_LOGIN',
  CAD_SUCESS: 'CAD_SUCESS',
  ERROR: 'ERROR',
  REQ_LOGIN: 'DO_REQ_LOGIN',
  LOGIN_OK: 'LOGIN_OK',
  LOGOUT: 'DO_LOGOUT',
};

/** Resposavel pelo cadastro via empresa */
export const doSingUp = objToCadastro => ({
  type: typeOfLogin.SINGUP,
  payload: { objToCadastro },
});

export const doError = objErr => ({
  type: typeOfLogin.ERROR,
  payload: { objErr },
});

export const doCadSucess = objSucess => ({
  type: typeOfLogin.CAD_SUCESS,
  payload: { objSucess },
});

/** Resposavel pela validação do Login */
export const doReqLogin = obj => ({
  type: typeOfLogin.REQ_LOGIN,
  payload: { obj },
});

/** Resposavel pela saida da empresa */
export const doLogin = isLoginOK => ({
  type: typeOfLogin.LOGIN_OK,
  payload: { isLoginOK },
});

export const doLogout = token => ({
  type: typeOfLogin.LOGOUT,
  payload: { token },
});
