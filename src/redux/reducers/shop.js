import {SHOP} from '../actiontypes';
/*
 * Cookie reducer
 */
// The state argument is not application state,
// only the state this reducer is responsible for
const initialState = {};

export default function (state = initialState, action) {


    switch (action.type) {
        case SHOP.SET_ITEMS:
            return Object.assign({}, state, { items: action.payload.items});

        case SHOP.UPDATE_ITEMS:
            console.log("weird payload", action.payload);
            return Object.assign({}, ...state, { items: { ...state.items, [action.payload.name]: action.payload.updatedItem}});

        default:
            return state;
    }
}
