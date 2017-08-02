import { COOKIE } from '../actiontypes';

/*
 * Actions
 */

export const updateCookie = cookie => ({
    type: COOKIE.UPDATE_VALUE,
    payload: { cookieAmount: cookie },
});