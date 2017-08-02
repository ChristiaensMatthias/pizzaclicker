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

export const updateItems = (cost, amount, index) => {
    console.log("update items", cost, amount, index);
    return {
        type: SHOP.UPDATE_ITEMS,
        payload: { cost: cost , amount: amount, itemIndex: index}
    }
};