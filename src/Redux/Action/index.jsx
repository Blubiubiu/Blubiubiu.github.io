/*
 * action 类型
 */

export const USERINFO_LOGIN = 'USERINFO_LOGIN';
export const UPDATE_CITYNAME = 'UPDATE_CITYNAME';

export function login(data) {
    return {
        type: USERINFO_LOGIN,
        data
    }
}

export function updateCityName(data) {
    return {
        type: UPDATE_CITYNAME,
        data
    }
}
