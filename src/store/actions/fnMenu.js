export const typeOfMenu = {
  REQUEST_MENU: 'REQ_MENU',
  SUCCESS_MENU: 'SUCESS_MENU',
  ERROR_MENU: 'ERROR_MENU',
  LOAD_MENU: 'LOAD_MENU',
  OPEN_MENU: 'OPEN_MENU',
  REMOVE_MENU: 'REMOVE_MENU',
};

/** Resposavel pelo menu */
export const doRequestMenu = objMenu => ({
  type: typeOfMenu.REQUEST_MENU,
  payload: { objMenu },
});

export const doSuccessMenu = objMenu => ({
  type: typeOfMenu.SUCCESS_MENU,
  payload: { objMenu },
});

export const doErrorMenu = objMenu => ({
  type: typeOfMenu.ERROR_MENU,
  payload: { objMenu },
});

export const doLoadMenu = () => ({
  type: typeOfMenu.LOAD_MENU,
});

export const doOpenMenu = objMenu => ({
  type: typeOfMenu.OPEN_MENU,
  payload: { objMenu },
});

export const doRemoveMenu = () => ({
  type: typeOfMenu.REMOVE_MENU,
});
