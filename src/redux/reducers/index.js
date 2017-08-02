import { combineReducers } from 'redux';
import CookieReducer from './cookie';
import ShopReducer from './shop';

const appReducer = combineReducers({
    cookie: CookieReducer,
    shop: ShopReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;
