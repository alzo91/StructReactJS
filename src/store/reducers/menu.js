import { typeOfMenu } from '../actions/fnMenu';

const INITIAL_STATE = {
  open: false,
  menus: [
    { descr: 'Home', url: '/dashboard', icon: 'Home' },
    { descr: 'Prefereces', url: '/dashboard/user', icon: 'Settings' },
    { descr: 'Task', url: '/dashboard/task', icon: 'ViewList' },
    { descr: 'Location', url: '/dashboard/location', icon: 'Place' },
  ],
  loading: false,
  error: null,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case typeOfMenu.REQUEST_MENU: // 'CAD_LOGIN':
      /** ira solicitar para o backend o menu a ser montado */
      return { ...state };
    case typeOfMenu.SUCCESS_MENU: // 'CAD_SUCESS':
      /** ira montar menus */
      return { ...state };
    case typeOfMenu.ERROR_MENU:
      /** irá retornar uma mensagem de erro */
      return { ...state, error: action.payload.objMenu.error };
    case typeOfMenu.LOAD_MENU:
      /** sera interceptado pelo saga e ira verificar na localStorage */
      return { ...state };
    case typeOfMenu.OPEN_MENU:
      /** irá add um item na lista de menus .push */
      console.log(action);
      return { ...state, open: action.payload.objMenu.open };
    case typeOfMenu.REMOVE_MENU:
      /** irá remover todos os dados das opçoes do menu */
      return { ...state };
    default:
      return state;
  }
}
