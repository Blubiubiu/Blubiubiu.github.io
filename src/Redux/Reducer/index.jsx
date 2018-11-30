import { combineReducers } from 'redux';
import { USERINFO_LOGIN, UPDATE_CITYNAME } from '../Action';

const initialState = {}

function userinfo(state = initialState, action) {
    switch (action.type) {
        case USERINFO_LOGIN:
            return action.data
        case UPDATE_CITYNAME:
            return action.data
        default: 
            return state
    }
}

const todoApp = combineReducers({
    userinfo
})

export default todoApp