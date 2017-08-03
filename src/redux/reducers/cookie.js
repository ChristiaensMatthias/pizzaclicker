import { COOKIE } from '../actiontypes';
/*
 * Cookie reducer
 */
// The state argument is not application state,
// only the state this reducer is responsible for
const initialState = {
  amount: 0
};

export default function (state = initialState , action){
  switch (action.type) {
      case COOKIE.UPDATE_VALUE:
      return Object.assign({}, state, { amount: action.payload.cookieAmount });

    default:
      return state;
  }
}
