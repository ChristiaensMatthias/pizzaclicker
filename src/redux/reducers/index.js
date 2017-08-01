import { combineReducers } from 'redux';
import CookieReducer from './cookie';

const appReducer = combineReducers({
  cookie: CookieReducer,
});

const rootReducer = (state, action) => {
    console.log("state", state);
    console.log("action", action);
    return appReducer(state, action)
};

export default rootReducer;
