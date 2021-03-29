import {
    SET_FETCHING,
    SET_BARS,
    SET_USERS,
    SET_HIGHWAY,
    SET_CAVES
} from "../constants";

export default function app(
state = { loading:false, users:[], bars:[], highwayStats:[], caveStats:[] },action) {
    switch (action.type) {

        case SET_FETCHING:
            return Object.assign({}, state, {
                loading:action.payload
            });

        case SET_BARS:
            return Object.assign({}, state, {
                bars:action.payload
            });

        case SET_USERS:
            return Object.assign({}, state, {
                users:action.payload
            });

        case SET_HIGHWAY:
            return Object.assign({}, state, {
                highwayStats:action.payload
            });

        case SET_CAVES:
            return Object.assign({}, state, {
                caveStats:action.payload
            });

        default:
        return state;
    }
}