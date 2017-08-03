import { SHOP } from '../actiontypes';

/*
 * Actions
 */

export const setItems = items => {
    return {
        type: SHOP.SET_ITEMS,
        payload: { items: items },
    }
};

export const updateItems = (updatedItem, name) => {
    console.log("update items", updatedItem, name);
    return {
        type: SHOP.UPDATE_ITEMS,
        payload: { updatedItem: updatedItem, name: name}
    }
};