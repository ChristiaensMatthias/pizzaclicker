import { COOKIE } from '../actiontypes';

/*
 * Actions
 */

export const cookieClick = cookie => ({
    type: COOKIE.ADD_VALUE,
    payload: { cookie: cookie },
});