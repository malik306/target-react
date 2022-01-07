import { createStore, combineReducers } from 'redux';
import { handleToast } from '../actionsReducers/reducers';
const ReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const configStore = () => {
  return createStore(combineReducers({ handleToast }), ReduxDevTools);
};
