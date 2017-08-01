import { COOKIE } from '../actiontypes';
/*
 * Cookie reducer
 */
// The state argument is not application state,
// only the state this reducer is responsible for

export default function (state = { cookie: {}}, action){
  switch (action.type) {
    case COOKIE.ADD_VALUE:
      return Object.assign({}, state, { cookie: { value: 1 } });

    default:
      return state;
  }
}
